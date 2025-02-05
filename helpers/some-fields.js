import { reduceFields } from './reduce-fields';

/**
 * someFields
 * Returns true if any of the fields of the form satisfy the predicate
 * @param {*} fields
 * @param {*} predicate
 * @returns {boolean}
 */
export const someFields = (fields, predicate) => {
  const arr = reduceFields(
    fields,
    (field, accumulator) => ([...accumulator, !!predicate(field)]),
    []
  );
  return arr.some(item => item);
};
