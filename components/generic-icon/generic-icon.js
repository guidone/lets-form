import React from 'react';
import classNames from 'classnames';

const GenericIcon = ({ icon, size }) => (
  <img className={classNames("lf-generic-icon", { size })} src={icon} />
);

export { GenericIcon };
