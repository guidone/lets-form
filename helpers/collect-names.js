import _ from 'lodash';

import { reduceFields } from './reduce-fields';

export const collectNames = form => {
  if (form && _.isArray(form.fields) && !_.isEmpty(form.fields)) {
    return reduceFields(
      form.fields,
      (field, accumulator) => {
        if (!accumulator.includes(field.name)) {
          return [...accumulator, field.name];
        }
        return accumulator;
      },
      []
    );
  }
  return [];
};
