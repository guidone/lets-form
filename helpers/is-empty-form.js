export const isEmptyForm = form => {
  return !form || !Array.isArray(form.fields) || form.fields.length === 0;
};
