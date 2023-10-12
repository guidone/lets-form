import _ from 'lodash';

import { reduceFields } from './reduce-fields';

const createEmptyField = (Manifests, fields, component, framework) => {
  const countFields = reduceFields(
    fields,
    (field, accumulator) => accumulator + 1,
    0
  );

  let newId = _.uniqueId(`field_${countFields + 1}_`);
  let newName = `field_${countFields + 1}`;

  let retries = 0;
  let exists = fieldExists(fields, field => field.name === newName || field.id === newId);

  while(exists && retries < 100) {
    newId = newId + '_1';
    newName = newName + '_1';
    // eslint-disable-next-line no-loop-func
    exists = fieldExists(fields, field => field.name === newName || field.id === newId);
    ++retries;
  }

  let newField = {
    component,
    label: `Field ${countFields + 1}`,
    name: newName,
    id: newId
  }

  // if component has default values
  if (Manifests[component] && Manifests[component].defaultValues) {
    // apply all defaults for all platforms
    Object.keys(Manifests[component].defaultValues)
      .forEach(framework => {
        newField = { ...newField, ...Manifests[component].defaultValues[framework] };
      });
    // be sure to apply the current framework as last one (in case it includes non framework specific values)
    if (Manifests[component].defaultValues[framework]) {
      newField = { ...newField, ...Manifests[component].defaultValues[framework] };
    }
  }

  return newField;
};


const findField = (fields, predicate) => {
  if (_.isEmpty(fields) || !_.isArray(fields)) {
    return null;
  }

  let found = fields.find(predicate);

  fields.forEach(field => {
    if (!found) {
      if (field.component === 'group' || field.component === 'array') {
        found = findField(field.fields, predicate);
      } else if (field.component === 'two-columns') {
        found = findField(field.leftFields, predicate)
          || findField(field.rightFields, predicate);
      } else if (field.component === 'three-columns') {
        found = findField(field.leftFields, predicate)
          || findField(field.centerFields, predicate)
          || findField(field.rightFields, predicate);
      } else if (field.component === 'tabs' && _.isObject(field.fields) && !_.isArray(field.fields)) {
        const subkeys = Object.keys(field.fields);
        subkeys.forEach(subkey => {
          if (!found) {
            const search = findField(field.fields[subkey], predicate);
            if (search) {
              found = search;
            }
          }
        });
      } 
    }
  });

  return found;
};

const getFieldById = (fields, id) =>  findField(fields, field => field.id === id);

const fieldExists = (fields, predicate) => findField(fields, predicate) != null;

export { findField, createEmptyField, reduceFields, getFieldById };
