import React from 'react';

import { lfLog } from '../../helpers/lf-log';
import { makeClassName } from '../../helpers/make-class-name';

const Hidden = ({ name }) => (
  <div
    {...makeClassName('hidden', name)}
    style={{ padding: '10px' }}
  >Hidden field: <em>{name}</em></div>
);
lfLog('Loaded RSuite5.Hidden');

export default Hidden;
