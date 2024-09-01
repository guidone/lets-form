import _ from 'lodash';

export const filterOptions = (
  options,
  filterValue,
  filterKey = 'value'
) => {
  if (_.isArray(options) && !_.isEmpty(filterKey) && !_.isEmpty(filterValue)) {
    return options
      .filter(item => item[filterKey] === filterValue);
  }
  return options;
};
