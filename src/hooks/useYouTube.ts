
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

const YOUTUBE_API_KEY = 'AIzaSyAm1eWQTfpnRIPKIPw4HTZDOgWuciITktI';
const CHANNEL_ID = 'UCVtyJTceyibnYDLQ7eCK8gg';

export const useYouTubePlaylists = () => {
  return useQuery({
    queryKey: ['youtube-playlists', CHANNEL_ID],
    queryFn: async (): Promise<YouTubePlaylist[]> => {
      console.log('Fetching playlists for channel:', CHANNEL_ID);
      
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/playlists?part=snippet,contentDetails&channelId=${CHANNEL_ID}&maxResults=50&key=${YOUTUBE_API_KEY}`
      );
      
      if (!response.ok) {
        console.error('Failed to fetch playlists:', response.status, response.statusText);
        throw new Error(`Failed to fetch playlists: ${response.status}`);
      }
      
      const data = await response.json();
      console.log('Playlists API response:', data);
      
      return data.items.map((item: any) => ({
        id: item.id,
        title: item.snippet.title,
        description: item.snippet.description,
        thumbnail: item.snippet.thumbnails.medium?.url || item.snippet.thumbnails.default?.url,
        videoCount: item.contentDetails.itemCount
      }));
    },
    enabled: !!YOUTUBE_API_KEY,
    retry: 3,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000)
  });
};

export const useYouTubePlaylistVideos = (playlistId: string) => {
  return useQuery({
    queryKey: ['youtube-playlist-videos', playlistId],
    queryFn: async (): Promise<YouTubeVideo[]> => {
      console.log('Fetching videos for playlist:', playlistId);
      
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=50&key=${YOUTUBE_API_KEY}`
      );
      
      if (!response.ok) {
        console.error('Failed to fetch playlist videos:', response.status, response.statusText);
        throw new Error(`Failed to fetch playlist videos: ${response.status}`);
      }
      
      const data = await response.json();
      console.log('Playlist videos API response:', data);
      
      if (!data.items || data.items.length === 0) {
        console.warn('No videos found in playlist:', playlistId);
        return [];
      }
      
      return data.items.map((item: any) => ({
        id: item.id,
        title: item.snippet.title,
        description: item.snippet.description,
        thumbnail: item.snippet.thumbnails.medium?.url || item.snippet.thumbnails.default?.url,
        publishedAt: item.snippet.publishedAt,
        videoId: item.snippet.resourceId.videoId
      }));
    },
    enabled: !!playlistId && !!YOUTUBE_API_KEY,
    retry: 3,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000)
  });
};

// Fonction pour trouver une playlist correspondant à une sous-catégorie
export const useMatchingPlaylist = (subcategoryName: string) => {
  const { data: playlists } = useYouTubePlaylists();
  
  // Trouve une playlist qui correspond au nom de la sous-catégorie
  const matchingPlaylist = playlists?.find(playlist => 
    playlist.title.toLowerCase().includes(subcategoryName.toLowerCase()) ||
    subcategoryName.toLowerCase().includes(playlist.title.toLowerCase())
  );
  
  return matchingPlaylist;
};
