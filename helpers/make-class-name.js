import classNames from 'classnames';

export const makeClassName = function() {
  const [component, name, ...rest] = Array.from(arguments);

  return {
    className: classNames(`lf-control-${component}`, `lf-field-${name}`, ...(rest ?? [])),
    'data-lf-field-name': name
  };
};
