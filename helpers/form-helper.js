import _ from 'lodash';

import { mapFields } from './map-fields';
import { filterFields } from './filter-fields';
import { lfLog } from './lf-log';

const formHelper = form => {
  let _form = form ? { ...form } : {};
  let _fields = form?.fields ? [...form.fields] : [];
  let _skip = false;

  const makeHelper = params => {
    return function(fieldName) {
      const fieldNames = Array.isArray(fieldName) ? fieldName : [fieldName];
      _fields = mapFields(
        _fields,
        field => {
          if (fieldNames.includes(field.name)) {
            return { ...field, ...params };
          }
          return field;
        }
      );
      return obj;
    }
  };

  const obj = {
    filter: predicate => {
      _fields = filterFields(_fields, predicate);
      return obj;
    },
    debug: (s = '') => {
      lfLog(`FormHelper: ${s}`);
      return obj;
    },
    enable: makeHelper({ disabled: false }),
    disable: makeHelper({ disabled: true }),
    hide: makeHelper({ hidden: true }),
    show: makeHelper({ hidden: false }),
    set: (key, value) => {
      _form[key] = value;
      return obj;
    },
    map: predicate => {
      _fields = mapFields(_fields, predicate);
      return obj;
    },
    skip: skip => {
      _skip = skip;
      return obj;
    },
    append: field => {
      _fields = [..._fields, field];
      return obj;
    },
    setField: (fieldName, key, value) => {
      const toReplace = _.isObject(key) ? key : { [key]: value };
      _fields = mapFields(
        _fields,
        field => {
          if (field.name === fieldName) {
            return { ...field, ...toReplace };
          }
          return field;
        }
      );
      return obj;
    },
    form: () => {
      // if skip, then just return the same form
      if (_skip) {
        return form;
      }
      return {
        ..._form,
        fields: _fields
      };
    },
    fields: () => {
      return _fields;
    }
  };

  return obj;
};

export { formHelper };
