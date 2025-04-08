
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

// Declare global window types
declare global {
  interface Window {
    radioPlayer: HTMLAudioElement | null;
    playRadio: (() => void) | undefined;
  }
}
