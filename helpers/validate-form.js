import _ from 'lodash';

import Manifests from '../manifest.json';

import { reduceFields } from './reduce-fields';
import { filterFields } from './filter-fields';

const LAYOUT_FIELDS = ['group', 'two-columns', 'three-columns'];

const validateJSONForm = json => {
  if (!_.isObject(json)) {
    return 'Not a valid JSON object';
  }

  if (!json.version || !_.isNumber(json.version)) {
    return 'Not a valid LetsForm object, missing "version" value';
  }
  if (_.isEmpty(json.fields)) {
    return 'Missing or empty "fields" value';
  }

  // check that all fields have component key
  const missingComponentFields = filterFields(
    json.fields,
    field => _.isEmpty(field.component)
  );
  if (!_.isEmpty(missingComponentFields)) {
    return 'All fields must includes a "component" key (' + missingComponentFields.length + ' incorrect json objects) ';
  }

  // check all non layouts fields have "name" key
  const missingNameFields = filterFields(
    json.fields,
    field => !LAYOUT_FIELDS.includes(field.component) && _.isEmpty(field.name)
  );
  if (!_.isEmpty(missingNameFields)) {
    return 'Fields (excepts layouts fields like "group") must have a "name" key, check these fields/components: '
      + _.uniq(missingNameFields.map(field => field.component));
  }

  // collect all component names and check they exists
  const usedComponets = _.uniq(
    reduceFields(
      json.fields,
      (field, acc) => [...acc, field.component],
      []
    )
  );
  const availableComponents = Object.keys(Manifests);
  const unknownCommponents = usedComponets.filter(component => !availableComponents.includes(component));
  if (unknownCommponents.length !== 0) {
    return 'Form contains unknows component(s): ' + unknownCommponents.join(', ');
  }

  return null;
};


export const isValidForm = form => validateJSONForm(form) == null;

export const isValidField = obj => {
  return typeof obj === 'object' && obj.component && obj.name;
};

export const isValidArrayOfFields = obj => {
  return Array.isArray(obj) && obj.every(isValidField);
};


export { validateJSONForm };
