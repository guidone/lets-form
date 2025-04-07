import React from 'react';

import LetsForm from '../../react-material-ui';
import { CommonObject } from '../../common/object';
import { lfLog } from '../../helpers/lf-log';

const ReactMUIObject = props => (
  <CommonObject
    LetsFormComponent={LetsForm}
    {...props}
  />
);
lfLog('Loaded MUI.Object');

export default ReactMUIObject;
