import _ from 'lodash';

//import { FIELDS_KEY } from './fields-keys';

import { FRAMEWORKS, FIELDS_KEY } from '../costants';





/**
 * cleanUp
 * Remove id from json file and all empty keys
 * @param {*} json
 * @returns
 */
const cleanUp = json => {
  if (_.isArray(json)) {
    return json.map(item => cleanUp(item));
  } else if (_.isObject(json)) {
    // collect all empty keys
    const emptyKeys = _.keys(json).filter(key => _.isEmpty(json[key]) && !(_.isBoolean(json[key]) || _.isNumber(json[key])));
    // clone and remove id and empty keys
    const cloned = _.omit(json, ['id', ...emptyKeys]);
    // clean all platform subkeys
    FRAMEWORKS.forEach(key => {
      if (cloned[key]) {
        cloned[key] = cleanUp(cloned[key]);
      }
    });
    // recurse for all fields keys
    FIELDS_KEY.forEach(key => {
      if (cloned[key]) {
        cloned[key] = cleanUp(cloned[key]);
      }
    });
    return cloned;
  }
  return json;
};

export { cleanUp }