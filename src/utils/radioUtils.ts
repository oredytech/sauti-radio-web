
// Static audio instance that persists across page navigations
let audioInstance: HTMLAudioElement | null = null;

// For reliability, provide multiple stream URLs to try
export const STREAM_URLS = [
  "https://stream.zeno.fm/jyat1y09yg1tv",
  "https://radio.sauti-ya-injili.com/stream",  // Backup URL
  "https://icecast.sauti-ya-injili.org/live"   // Another backup URL
];

export const getAudioInstance = (): HTMLAudioElement => {
  if (!audioInstance) {
    audioInstance = new Audio(STREAM_URLS[0]);
    audioInstance.preload = "auto";
  }
  return audioInstance;
};

// Helper function to launch VLC with the stream URL
export const launchVlcWithStream = (streamUrl: string = STREAM_URLS[0]): void => {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  
  if (isMobile) {
    // On mobile, attempt to copy the URL to clipboard
    if (navigator.clipboard) {
      navigator.clipboard.writeText(streamUrl)
        .catch(err => console.error("Could not copy URL to clipboard:", err));
    }
  } else {
    // On desktop, use the VLC protocol handler
    const link = document.createElement('a');
    link.href = `vlc://${streamUrl}`;
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};

// Declare global window types
declare global {
  interface Window {
    radioPlayer: HTMLAudioElement | null;
    playRadio: (() => void) | undefined;
  }
}
