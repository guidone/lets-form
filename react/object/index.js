import React from 'react';

import LetsForm from '../../react';
import { CommonObject } from '../../common/object';
import { lfLog } from '../../helpers/lf-log';

const ReactObject = props => (
  <CommonObject
    LetsFormComponent={LetsForm}
    {...props}
  />
);
lfLog('Loaded React.Object');

export default ReactObject;
