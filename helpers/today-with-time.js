import { isValidTime } from './is-valid-time';

const toInt = s => {
  return !isNaN(parseInt(s, 10)) ? parseInt(s, 10) : undefined;
};

const todayWithTime = s => {
  if (isValidTime(s)) {
    const [hours, minutes, seconds] = s.split(':');
    const d = new Date();
    d.setHours(
      toInt(hours),
      toInt(minutes),
      toInt(seconds)
    );
    return d;
  }
  return undefined;
};

export { todayWithTime };
