import _ from 'lodash';

import { FRAMEWORKS } from '../costants';

import { mapFields } from './map-fields';
import { isI18n } from './is-i18n';


const collectEmptyKeys = obj =>
_.keys(obj).filter(key => _.isEmpty(obj[key]) && !(_.isBoolean(obj[key]) || _.isNumber(obj[key])));


const removeEmptyKeys = obj => {
  // collect all empty keys
  const emptyKeys = collectEmptyKeys(obj);
  // clone and remove id and empty keys
  return _.omit(obj, emptyKeys);
}

const removeUnusedLocalesFromI18n = (obj, locales) => {
  if (_.isArray(locales) && !_.isEmpty(locales)) {
    const keysToRemove = Object.keys(obj).filter(key => !locales.includes(key));
    const cleaned = !_.isEmpty(keysToRemove) ? _.omit(obj, keysToRemove) : obj;

    if (Object.keys(cleaned).length !== 0) {
      return cleaned;
    }
    return null;
  } else {

    // no locales specified, so try to extract english dialect or the first available key
    if (obj['en-US']) {
      return obj['en-US'];
    } else if (obj['en-GB']) {
      return obj['en-GB'];
    } else if (Object.keys(obj).length !== 0) {
      return obj[Object.keys(obj)[0]];
    }
    return null;
  }
};

const removeUnusedLocalesFromObj = (obj, locales) => {
  let cloned = { ...obj };
  Object.keys(obj || {})
    .forEach(key => {
      if (_.isArray(cloned[key])) {
        cloned[key] = cloned[key]
          .map(item => removeUnusedLocalesFromObj(item, locales));
      } else if (isI18n(cloned[key])) {
        cloned[key] = removeUnusedLocalesFromI18n(cloned[key], locales);
      } else if (key === 'validation' && isI18n(cloned.validation.message)) {
        cloned.validation = {
          ...cloned.validation,
          message: removeUnusedLocalesFromI18n(cloned.validation.message, locales)
        }
      }
    });
  return cloned;
};

const removeUnusedTabs = obj => {
  if (obj.component === 'tabs') {
    return {
      ...obj,
      fields: _.pick(obj.fields, (obj.tabs || []).map(tab => tab.value))
    };
  }
  return obj;
};

/**
 * cleanUp
 * Remove id from json file and all empty keys, all frameworks props not used, empty tabs
 * @param {*} json
 * @returns
 */
const cleanUp = (json, framework) => {
  const cloned = { ...json };

  // remove unused locales
  if (cloned.labelSubmit && isI18n(cloned.labelSubmit)) {
    cloned.labelSubmit = removeUnusedLocalesFromI18n(cloned.labelSubmit, json.locales);
  }
  if (cloned.labelCancel && isI18n(cloned.labelCancel)) {
    cloned.labelCancel = removeUnusedLocalesFromI18n(cloned.labelCancel, json.locales);
  }

  const emptyKeys = _.keys(cloned).filter(key => _.isEmpty(cloned[key]) && !(_.isBoolean(cloned[key]) || _.isNumber(cloned[key])));
  const cleanedUp = _.omit(cloned, emptyKeys);

  const newForm =  {
    ...cleanedUp,
    fields: mapFields(
      json.fields,
      field => {
        // clone and remove id
        let cloned = _.omit(field, 'id');
        // clean all platform subkeys
        FRAMEWORKS.forEach(key => {
          if (cloned[key]) {
            cloned[key] = removeEmptyKeys(cloned[key]);
            // remove if empty after cleaning
            if (Object.keys(cloned[key]).length === 0) {
              delete cloned[key];
            }
          }
        });
        // remove all other frameworks if one is specified
        if (framework) {
          FRAMEWORKS
            .filter(s => s !== framework)  
            .forEach(framework => delete cloned[framework]);
        }
        // collect all empty keys
        cloned = removeEmptyKeys(cloned);
        // cycle all keys and check if it's an i18n object
        cloned = removeUnusedLocalesFromObj(cloned, json.locales);
        // remove unused tabl
        cloned = removeUnusedTabs(cloned);

        return cloned;
      }
    )
  };

  return newForm;
};

export { cleanUp }
