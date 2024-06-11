/**
 * isValidTime
 *
 * @param {} d Time string (i.e. 12:12:00)
 * @returns
 */
export const isValidTime = d => {
  return typeof d === 'string' && d.match(/^[0-9]{1,2}:[0-9]{2,2}(:[0-9]{2,2}){0,1}$/) != null;
};
