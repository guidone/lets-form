/* LetsForm Generator v0.11.4 - ESM */
import { d as _slicedToArray } from './index-Ce7dhp0n.js';
import { d as dayjs } from './dayjs.min-DnCrqzWp.js';

var timeToDayJSTime = function timeToDayJSTime(str) {
  var _str$split = str.split(':'),
    _str$split2 = _slicedToArray(_str$split, 3),
    hours = _str$split2[0],
    minutes = _str$split2[1],
    seconds = _str$split2[2];
  if (hours || minutes || seconds) {
    console.log('splittato ', hours, minutes, seconds);
    var d = dayjs();
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

export { timeToDayJSTime as t };
