export const formatTime = (timeString: string) => {
  const min = +timeString.slice(0, 2);
  const sec = +timeString.slice(3);
  return min * 60 + sec;
}