
import { useQuery } from '@tanstack/react-query';

// Types pour l'API YouTube
export interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  publishedAt: string;
  videoId: string;
}

export interface YouTubePlaylist {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoCount: number;
}

const YOUTUBE_API_KEY = 'YOUR_YOUTUBE_API_KEY'; // À remplacer par votre clé API
const CHANNEL_ID = 'UCVtyJTceyibnYDLQ7eCK8gg';

export const useYouTubePlaylists = () => {
  return useQuery({
    queryKey: ['youtube-playlists', CHANNEL_ID],
    queryFn: async (): Promise<YouTubePlaylist[]> => {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/playlists?part=snippet,contentDetails&channelId=${CHANNEL_ID}&maxResults=50&key=${YOUTUBE_API_KEY}`
      );
      
      if (!response.ok) {
        throw new Error('Failed to fetch playlists');
      }
      
      const data = await response.json();
      
      return data.items.map((item: any) => ({
        id: item.id,
        title: item.snippet.title,
        description: item.snippet.description,
        thumbnail: item.snippet.thumbnails.medium?.url || item.snippet.thumbnails.default?.url,
        videoCount: item.contentDetails.itemCount
      }));
    },
    enabled: !!YOUTUBE_API_KEY && YOUTUBE_API_KEY !== 'YOUR_YOUTUBE_API_KEY'
  });
};

export const useYouTubePlaylistVideos = (playlistId: string) => {
  return useQuery({
    queryKey: ['youtube-playlist-videos', playlistId],
    queryFn: async (): Promise<YouTubeVideo[]> => {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=50&key=${YOUTUBE_API_KEY}`
      );
      
      if (!response.ok) {
        throw new Error('Failed to fetch playlist videos');
      }
      
      const data = await response.json();
      
      return data.items.map((item: any) => ({
        id: item.id,
        title: item.snippet.title,
        description: item.snippet.description,
        thumbnail: item.snippet.thumbnails.medium?.url || item.snippet.thumbnails.default?.url,
        publishedAt: item.snippet.publishedAt,
        videoId: item.snippet.resourceId.videoId
      }));
    },
    enabled: !!playlistId && !!YOUTUBE_API_KEY && YOUTUBE_API_KEY !== 'YOUR_YOUTUBE_API_KEY'
  });
};
