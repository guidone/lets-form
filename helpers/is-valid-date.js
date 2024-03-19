/**
 * isValidDate
 * _.date() is not enough, it could be a date object but an invalid date, in that
 * case toISOString will fail
 * @param {} d 
 * @returns 
 */
export const isValidDate = d => d instanceof Date && !isNaN(d);
