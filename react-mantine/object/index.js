import React from 'react';

import LetsForm from '../../react-bootstrap';
import { CommonObject } from '../../common/object';
import { lfLog } from '../../helpers/lf-log';

const ReactMantineObject = props => (
  <CommonObject
    LetsFormComponent={LetsForm}
    {...props}
  />
);
lfLog('Loaded Mantine.Object');

export default ReactMantineObject;
