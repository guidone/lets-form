import _ from 'lodash';

export const isI18n = obj => {
  return _.isObject(obj) && Object.keys(obj).every(key => key.length === 2 || key.length === 5);
};
