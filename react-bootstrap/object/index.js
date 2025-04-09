import React from 'react';

import LetsForm from '../../react-bootstrap';
import { CommonObject } from '../../common/object';
import { lfLog } from '../../helpers/lf-log';

const ReactBoostrapObject = props => (
  <CommonObject
    LetsFormComponent={LetsForm}
    {...props}
  />
);
lfLog('Loaded ReactBootstrap.Object');

export default ReactBoostrapObject;
