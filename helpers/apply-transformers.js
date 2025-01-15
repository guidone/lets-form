import _ from 'lodash';

import { mapFields } from './map-fields';
import { findField } from './find-field';
import { lfWarn } from './lf-log';

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

const ApiFactory = function({ formName, framework, formFields, currentValues, formContext, components }) {
  let fields = formFields;
  const rerenders = {}; // store re-render requests after field change
  const scheduledChanges = {};

  const fieldExists = name => {
    if (findField(fields, field => field.name === name) != null) {
      return true;
    } else {
      throw new Error(`Field "${name}" doesn't exist in the form`);
    }
  };

  const isCustomComponent = component => components[component] && components[component].custom === true;
  //const isCommonProperty = (component, key) => FIELD_MAPPINGS[component] && FIELD_MAPPINGS[component][key] == null;
  const isFrameworkProperty = (component, key, framework) => {
    return (
      FIELD_MAPPINGS[component]
      && _.isArray(FIELD_MAPPINGS[component][key])
      && FIELD_MAPPINGS[component][key].includes(framework)
    );
  };

  const methods = {
    fields: () => {
      return fields;
    },

    context: key => {
      return formContext ? formContext[key] : null
    },

    setFieldValue: (name, value) => {
      // set the field to be re-rendered if it's uncontrolled
      rerenders[name] = rerenders[name] ? rerenders[name] + 1 : 1;
      // schedule a field change and differ it, otherwise setValue will trigger the re-design of the component
      // before the information or re-render reaches it
      scheduledChanges[name] = value;
    },

    getReRenders: () => rerenders,

    getScheduledChanges: () => scheduledChanges,

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

    toggle: (name, key) => {
      const field = findField(fields, field => field.name === name);
      if (!field) {
        return;
      }

      methods.setParam(name, key, !field[key]);
    },

    setParam: (name, key, value) => {
      if (!fieldExists(name)) {
        return;
      }
      fields = mapFields(
        fields,
        field => {
          if (field.name === name) {
            // if components doesn't exist in manifest/mapping and is not a custom component
            if (FIELD_MAPPINGS[field.component] == null && !isCustomComponent(field.component)) {
              console.warn(`[LetsForm] param "${key}" for component "${field.component}" in framework "${framework}" doesn't exist`);
              return field;
            }

            if (FIELD_MAPPINGS[field.component] && FIELD_MAPPINGS[field.component][key] === 'validation') {
              // handle special case of validation fields
              return {
                ...field,
                validation: {
                  ...(field.validation ?? {}),
                  [translateValidationKey(key)]: value
                }
              };
            } else if (isFrameworkProperty(field.component, key, framework)) {
              // key property it's a framework specific key, belongs to one or more frameworks, so it must be
              // set in the specific subset, use the current framework so set it
              return {
                ...field,
                [framework]: {
                  ...(field[framework] ?? {}),
                  [key]: value
                }
              };
            }
            // key property exists but it's just common property to all frameworks
            return {
              ...field,
              [key]: value
            };
          }
          return field;
        }
      );
    },

    setValue: (name, key, value) => {
      lfWarn('LetsForm Script .setValue() is deprecated, use .setParam() instead');
      return methods.setParam(name, key, value);
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

    arraySetValue: (name, key, value) => {
      lfWarn('LetsForm Script .arraySetValue() is deprecated, use .arraySetParam() instead');
      return methods.arraySetParam(name, key, value);
    },

    /**
     * Change field property inside and array
     * @param {*} arrayName
     * @param {*} arrayFieldName
     * @param {*} key
     * @param {*} value
     * @returns
     */
    arraySetParam: (arrayName, arrayFieldName, key, value) => {
      if (!fieldExists(arrayName)) {
        return;
      }
      fields = mapFields(
        fields,
        arrayField => {
          if (arrayField.component === 'array' && arrayField.name === arrayName) {
            const newFields = mapFields(
              arrayField.fields,
              field => {
                if (field.name === arrayFieldName) {
                  return {
                    ...field,
                    [key]: value
                  };
                }
                return field;
              }
            );
            return {
              ...arrayField,
              fields: newFields
            };
          }
          return arrayField;
        }
      );
    },

    values: Object.freeze({ ...currentValues })
  };

  return methods;
};

/**
 * applyTransformers
 * Apply a list of transformers
 * @param {*} formName
 * @param {*} framework
 * @param {*} fields
 * @param {*} transformers
 * @param {*} values
 * @param {*} onJavascriptError
 * @param {*} formContext
 * @param {*} setValue
 */
const applyTransformers = async function*(
  formName,
  framework,
  fields,
  transformers,
  values,
  onJavascriptError,
  formContext,
  components
) {

  if (_.isArray(transformers) && !_.isEmpty(transformers)) {

    let newFields = fields;
    // apply all transformers
    const txs = transformers/*.filter(transformer => _.isFunction(transformer))*/
    let idx;
    for(idx = 0; idx < txs.length; idx++) {
      const api = new ApiFactory({
        formName,
        framework,
        formFields: newFields,
        currentValues: values,
        formContext,
        components
      });
      try {
        for await (const f of txs[idx](api)) {
          newFields = f;
          yield {
            fields: f,
            rerenders: api.getReRenders(),
            changes: api.getScheduledChanges()
          };
        }
      } catch(e) {
        console.error('[LetsForm] Error in script: ', e);
        const error = new Error('Error executing script: ' + e.message, { cause: e });
        error.errorType = 'runtime';
        onJavascriptError(error);
      }
    }

    yield { fields: newFields };
  } else {
    yield { fields };
  }
};

export { applyTransformers };
