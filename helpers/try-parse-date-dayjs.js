import _ from 'lodash';
import dayjs from 'dayjs';

import { isValidDate } from './is-valid-date';

export const tryParseDateDayJs = value => {
  if (_.isDate(value)) {
    return dayjs(value);
  } else if (_.isString(value)) {
    const d = new Date(value);
    if (isValidDate(d)) {
      return dayjs(d);
    }
  }
  return undefined;
};
