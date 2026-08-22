const VIDEO_EXTENSIONS = ['.mp4', '.webm', '.mov'];

export function isVideoSrc(src) {
  if (!src) return false;
  const lower = src.toLowerCase();
  return VIDEO_EXTENSIONS.some((ext) => lower.endsWith(ext));
}
