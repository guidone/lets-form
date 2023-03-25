import _ from 'lodash';

function mergeFields() {
  let idx;
  let result = {};
  for(idx = 0; idx < arguments.length; idx++) {
    const fields = arguments[idx];
    // iterate keys 'toggle', 'input-number', etc
    _.keys(fields).forEach(key => {
      if (_.isEmpty(result[key])) {
        result[key] = fields[key];
      } else {
        result[key] = {
          ...result[key],
          ...fields[key]
        };
      }
    });
  }
  return result;
};

export { mergeFields };
