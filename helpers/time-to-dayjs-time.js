import dayjs from 'dayjs';

export const timeToDayJSTime = str => {
  const [hours, minutes, seconds] = str.split(':');

  if (hours || minutes || seconds) {
    console.log('splittato ', hours, minutes, seconds)
    let d = dayjs();
    if (hours) {
      d = d.hour(hours);
    }
    if (minutes) {
      d = d.minute(minutes);
    }
    if (seconds) {
      d = d.second(seconds);
    }
    return d;
  }
  return undefined;
};
