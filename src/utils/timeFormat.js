export function timeFormat(time) {
  const minute = Math.floor(time / 60);
  const second = time % 60;

  const minuteStr = minute.toString().padStart(2, 0);
  const secondStr = second.toString().padStart(2, 0);

  console.log(minute, second);
  return `${minuteStr}:${secondStr}`;
}
