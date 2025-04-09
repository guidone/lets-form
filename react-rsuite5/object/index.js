import React from 'react';

import LetsForm from '../../react-rsuite5';
import { CommonObject } from '../../common/object';
import { lfLog } from '../../helpers/lf-log';

const RSuite5Object = props => (
  <CommonObject
    LetsFormComponent={LetsForm}
    {...props}
  />
);
lfLog('Loaded RSuite5.Object');

export default RSuite5Object;
