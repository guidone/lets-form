import _ from 'lodash';

const EXCLUDED_LETSFORM_FIELDS = [
  'lfFramework', 
  'lfComponent', 
  'lfLocale', 
  'lfOnEnter', 
  'transformer', 
  'script'
];

/**
 * passRest
 * Help method to filter props passed with the rest props, removing lets-form specific properties
 * @param {*} props 
 * @param {*} additional 
 * @returns 
 */
export const passRest = (props, additional = []) => 
  _.omit(props, [...EXCLUDED_LETSFORM_FIELDS, ...(_.isArray(additional) ? additional : [additional])]);
