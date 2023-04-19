import _ from 'lodash';

import { mapFields } from './map-fields';
import { FRAMEWORKS } from '../costants';

const ApiFactory = function(formFields, currenValues) {
  let fields = formFields;

  return {
    fields: () => {
      return fields;
    },

    setValue: (name, key, value, framework) => {
      fields = mapFields(
        fields,
        field => {
          if (field.name === name) {
            if (framework != null && framework !== '*') {
              // apply framework specific value
              return {
                ...field,
                [framework]: {
                  ...field[framework],
                  [key]: value
                }
              };
            } else if (framework === '*') {
              // apply custom value to all frameworks
              let newField = { ...field };
              FRAMEWORKS.forEach(framework => {
                newField[framework] = {
                  ...newField[framework],
                  [key]: value
                };
              });
              return newField;
            } else {
              return {
                ...field,
                [key]: value
              };
            }
          }
          return field;
        }
      );
    },
    enable: (name) => {
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

const applyTransformers = (fields, transformers, values) => {
  if (_.isArray(transformers) && !_.isEmpty(transformers) && _.isFunction(transformers[0])) {

    let newFields = fields;
    // apply all transformers
    transformers
      .filter(transformer => _.isFunction(transformer))
      .forEach(transformer => {
        const api = new ApiFactory(fields, values);
        newFields = transformer(api);
      });

    return newFields;
  }
  return fields;
};

export { applyTransformers };
