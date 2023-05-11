import _ from 'lodash';

import { mapFields } from './map-fields';

const fillIds = (fields, namespace = '') => {
  return mapFields(
    fields,
    field => {
      // if not id, then create it
      if (!field.id) {
        return {
          id: _.uniqueId(namespace),
          ...field
        };
      }
      // special case of array
      //if (field.component === 'array') {
      //  field.fields = fillIds(field.fields);
      //}
      return field;
    }
  );
};

export { fillIds }