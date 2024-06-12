import React from 'react';

import { lfLog } from '../../helpers/lf-log';

const Hidden = ({ name }) => (
  <div
    className="lf-control-hidden"
    style={{ padding: '10px' }}
  >Hidden field: <em>{name}</em></div>
);
lfLog('Loaded RSuite5.Hidden');

export default Hidden;
