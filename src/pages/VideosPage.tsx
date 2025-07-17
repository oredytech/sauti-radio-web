
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { youtube } from "@/lib/youtube";
import { formatViewCount } from "@/lib/utils";
import { Clock, Eye } from "lucide-react";
import ReactPlayer from 'react-player';
import { useTranslation } from "@/hooks/useTranslation";
import RadioPlayer from "@/components/RadioPlayer";

interface YouTubeVideo {
  kind: string;
  etag: string;
  id: {
    kind: string;
    videoId: string;
  };
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      default: {
        url: string;
        width: number;
        height: number;
      };
      medium: {
        url: string;
        width: number;
        height: number;
      };
      high: {
        url: string;
        width: number;
        height: number;
      };
    };
    channelTitle: string;
    liveBroadcastContent: string;
    publishTime: string;
  };
  statistics: {
    viewCount: string;
  };
}

const VideosPage = () => {
  const { playlistId } = useParams<{ playlistId: string }>();
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [playlistTitle, setPlaylistTitle] = useState<string>("");
  const { t } = useTranslation();

  useEffect(() => {
    const fetchVideos = async () => {
      if (!playlistId) return;

      try {
        const playlistResponse = await youtube.playlists.list({
          id: [playlistId],
          part: ["snippet"],
        });

        if (playlistResponse.data.items && playlistResponse.data.items.length > 0) {
          setPlaylistTitle(playlistResponse.data.items[0].snippet?.title || "Playlist");
        }

        const response = await youtube.playlistItems.list({
          playlistId: playlistId,
          part: ["snippet", "status"],
          maxResults: 50,
        });

        if (response.data.items) {
          const videoDetails = await Promise.all(
            response.data.items
              .filter((item) => item.snippet?.resourceId?.kind === "youtube#video")
              .map(async (item) => {
                const videoId = item.snippet?.resourceId?.videoId;
                if (!videoId) return null;

                try {
                  const videoResponse = await youtube.videos.list({
                    id: [videoId],
                    part: ["snippet", "statistics"],
                  });

                  if (videoResponse.data.items && videoResponse.data.items.length > 0) {
                    return {
                      ...videoResponse.data.items[0],
                    };
                  }
                  return null;
                } catch (error) {
                  console.error("Error fetching video details:", error);
                  return null;
                }
              })
          );

          // Filter out any null results from the video details fetch
          const validVideos = videoDetails.filter((video): video is YouTubeVideo => video !== null);
          setVideos(validVideos);
        }
      } catch (error) {
        console.error("Error fetching playlist items:", error);
      }
    };

    fetchVideos();
  }, [playlistId]);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{playlistTitle} - Radio Sauti ya Injili</title>
        <meta name="description" content={`Regardez les vidéos de la playlist ${playlistTitle} sur Radio Sauti ya Injili`} />
      </Helmet>

      <Navbar />

      <main className="pt-20 pb-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {playlistTitle}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t('videos.watch')} {playlistTitle} {t('videos.on')} Radio Sauti ya Injili
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video) => (
              <div key={video.id.videoId} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-w-16 aspect-h-9">
                  <ReactPlayer
                    url={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                    width="100%"
                    height="100%"
                    style={{ position: 'absolute', top: 0, left: 0 }}
                    config={{
                      youtube: {
                        playerVars: { showinfo: 0 },
                      },
                    }}
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-sm font-semibold mb-1">{video.snippet.title}</h3>
                    <div className="flex items-center text-xs space-x-3">
                      <div className="flex items-center">
                        <Eye className="h-4 w-4 mr-1" />
                        <span>{formatViewCount(video.statistics.viewCount)}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{new Date(video.snippet.publishedAt).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
      <RadioPlayer />
    </div>
  );
};

export default VideosPage;
