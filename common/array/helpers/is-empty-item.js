import _ from 'lodash';

export const isEmptyItem = (obj) => {
  return Object
    .keys(obj)
    .filter(key => key !== 'id')
    .every(key => _.isEmpty(obj[key]));
};
