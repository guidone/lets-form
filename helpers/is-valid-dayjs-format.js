import _ from 'lodash';

const DAYJS_VALID_TOKENS =  ['YY', 'YYYY', 'M', 'MM', 'MMM', 'MMMM', 'D', 'DD', 'Do', 'd', 'dd', 'ddd', 'dddd', 'A', 'a', 'H', 'HH', 'h', 'hh', 'm', 'mm', 's', 'ss'];

const isValidDayjsFormat = str => {
  if (_.isString(str) && !_.isEmpty(str)) {
    const tokens = str.match(/([A-Za-z0-9]{1,})/gm);
    const isValid = tokens.every(t => DAYJS_VALID_TOKENS.includes(t));
    if (!isValid) {
      console.error([`MUI: The token "${str}" is not supported by the Date and Time Pickers.`, 'Please try using another token or open an issue on https://github.com/mui/mui-x/issues/new/choose if you think it should be supported.'].join('\n'));
    }
    return isValid;
  }
  return false;
};

export { isValidDayjsFormat };
