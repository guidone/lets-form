import _ from 'lodash';

import Manifests from '../manifest.json';
import * as Connectors from './connectors';

import { reduceFields } from './reduce-fields';
import { filterFields } from './filter-fields';

const CONNECTOR_NAMES = Object.keys(Connectors);
const AVAILABLE_COMPONENTS = Object.keys(Manifests);
const LAYOUT_FIELDS = ['group', 'two-columns', 'three-columns', 'steps', 'tabs', 'columns'];

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

  const unknownCommponents = usedComponets.filter(component => !AVAILABLE_COMPONENTS.includes(component));
  if (unknownCommponents.length !== 0) {
    return 'Form uses unknows component(s): ' + unknownCommponents.join(', ');
  }

  if (json.connectors) {
    if (!Array.isArray(json.connectors)) {
      return '"Connectors" key should be an array';
    }
    const invalidConnectors = json.connectors.filter(c => !isValidConnector(c));
    if (invalidConnectors.length !== 0) {
      return 'Form uses unknown connector(s): ' + invalidConnectors.map(c => c.name ?? 'unknown').join(',');
    }
  }

  return null;
};

export const isValidConnector = c => {
  return typeof c === 'object' && c.name && CONNECTOR_NAMES.includes(c.name);
};

export const isValidForm = form => validateJSONForm(form) == null;

export const isValidField = obj => {
  return typeof obj === 'object' && obj.component && obj.name && AVAILABLE_COMPONENTS.includes(obj.component);
};

export const isValidArrayOfFields = obj => {
  return Array.isArray(obj) && obj.every(isValidField);
};


export { validateJSONForm };
