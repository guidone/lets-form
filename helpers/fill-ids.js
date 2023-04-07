import _ from 'lodash';

import { mapFields } from './map-fields';

const fillIds = (fields, namespace = '') => {
  return mapFields(
    fields,
    field => {
      if (!field.id) {
        return {
          id: _.uniqueId(namespace),
          ...field
        };
      }
      return field;
    }
  );
};

export { fillIds }