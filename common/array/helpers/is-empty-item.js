export const isEmptyItem = (obj) => {
  return Object
    .keys(obj)
    .filter(key => key !== 'id')
    .every(key => obj[key] === null || obj[key] === undefined || obj[key] === '');
};
