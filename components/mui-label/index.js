import React from 'react';

import { RequiredIcon } from '../required-icon';

import './mui-label.scss';

const MuiLabel = ({ children, required = false }) => (
  <div className="lf-react-material-ui-label">
    {children}
    {required && <RequiredIcon />}
  </div>
);

export { MuiLabel };