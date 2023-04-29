import _ from 'lodash';

import { mapFields } from './map-fields';
import { findField } from './find-field';

// cannot import manifest, need to stay in the other repo
// this is going open source, while the manifests are ip

import FIELD_MAPPINGS from '../mappings.json';


const translateValidationKey = str => {
  if (str.startsWith('validation')) {
    str = str.replace(/^validation/, '');
    if (str.length !== 0) {
      str = str[0].toLowerCase() + str.slice(1);
    }
    return str;
  } else {
    return str;
  }
};

const ApiFactory = function(formName, framework, formFields, currenValues) {
  let fields = formFields;

  const fieldExists = name => {
    if (findField(fields, field => field.name === name) != null) {
      return true;
    } else {
      throw new Error(`Field "${name}" doesn't exist in the form`);
    }
  }

  return {
    fields: () => {
      return fields;
    },

    element: name => {
      if (!fieldExists(name)) {
        return;
      }
      const form = document.querySelector(`[data-lf-form-name=${formName}]`);
      if (form) {
        return form.querySelector(`[data-lf-field-name=${name}]`);
      }
      return null;
    },

    style: (name, prop, value) => {
      if (!fieldExists(name)) {
        return;
      }
      // find the form, then the element, then apply the style
      const form = document.querySelector(`[data-lf-form-name=${formName}]`);
      if (form) {
        const element = form.querySelector(`[data-lf-field-name=${name}]`);
        if (element) {
          if (_.isString(prop)) {
            element.style[prop] = value;
          } else if (_.isObject(prop)) {
            Object.keys(prop).forEach(key => element.style[key] = prop[key]);
          }
        }
      }
    },

    css: (className, obj) => {
      // find the form
      const form = document.querySelector(`[data-lf-form-name=${formName}]`);
      if (form) {
        const element = form.querySelector(className);

        if (element && _.isObject(obj)) {
          Object.keys(obj).forEach(key => element.style[key] = obj[key]);
        }
      }
    },

    setValue: (name, key, value) => {
      if (!fieldExists(name)) {
        return;
      }
      fields = mapFields(
        fields,
        field => {
          if (field.name === name) {
            // check if the field exists in the manifest mapping
            // and if needs to be added in a framework sub set
            if (FIELD_MAPPINGS[field.component] && FIELD_MAPPINGS[field.component][key] !== undefined) {
              if (FIELD_MAPPINGS[field.component][key] === null) {
                // key property exists but it's just common property to all frameworks
                return {
                  ...field,
                  [key]: value
                };
              } else if (FIELD_MAPPINGS[field.component][key] === 'validation') {
                // handle special case of validation fields
                return {
                  ...field,
                  validation: {
                    ...(field.validation ?? {}),
                    [translateValidationKey(key)]: value
                  }
                };
                // handle special case of validation
              } else if (_.isArray(FIELD_MAPPINGS[field.component][key]) &&  FIELD_MAPPINGS[field.component][key].includes(framework)) {
                // key property it's a framework specific key, belongs to one or more frameworks, so it must be
                // set in the specific subset, use the current framework so set it
                return {
                  ...field,
                  [framework]: {
                    ...(field[framework] ?? {}),
                    [key]: value
                  }
                };
              } else {
                console.warning(`[LetsForm] cannot set key "${key}" for component "${field.component}" in framework "${framework}"`);
              }
            } else {
              console.error(`[LetsForm] cannot set key "${key}" for component "${field.component}"`);
            }
          }
          return field;
        }
      );
    },
    enable: (name) => {
      if (!fieldExists(name)) {
        return;
      }
      fields = mapFields(
        fields,
        field => {
          if (field.name === name) {
            return {
              ...field,
              disabled: false
            };
          }
          return field;
        }
      );

    },
    disable: (name) => {
      if (!fieldExists(name)) {
        return;
      }
      fields = mapFields(
        fields,
        field => {
          if (field.name === name) {
            return {
              ...field,
              disabled: true
            };
          }
          return field;
        }
      );
    },
    show: (name) => {
      if (!fieldExists(name)) {
        return;
      }
      fields = mapFields(
        fields,
        field => {
          if (field.name === name) {
            return {
              ...field,
              hidden: false
            };
          }
          return field;
        }
      );
    },
    hide: (name) => {
      if (!fieldExists(name)) {
        return;
      }
      fields = mapFields(
        fields,
        field => {
          if (field.name === name) {
            return {
              ...field,
              hidden: true
            };
          }
          return field;
        }
      );
    },
    values: Object.freeze({ ...currenValues })
  };
};

const applyTransformers = (formName, framework, fields, transformers, values, onJavascriptError) => {
  if (_.isArray(transformers) && !_.isEmpty(transformers) && _.isFunction(transformers[0])) {

    let newFields = fields;
    // apply all transformers
    transformers
      .filter(transformer => _.isFunction(transformer))
      .forEach(transformer => {
        const api = new ApiFactory(formName, framework, fields, values);
        try {
          newFields = transformer(api);
        } catch(e) {
          console.error('[LetsForm] Error on transformer: ', e);
          const error = new Error('Error executing transformer: ' + e.message, { cause: e });
          error.errorType = 'runtime';
          onJavascriptError(error);
        }
      });

    return newFields;
  }
  return fields;
};

export { applyTransformers };
