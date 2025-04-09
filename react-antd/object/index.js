import React from 'react';

import LetsForm from '../../react-antd';
import { CommonObject } from '../../common/object';
import { lfLog } from '../../helpers/lf-log';

const ReactAntDObject = props => (
  <CommonObject
    LetsFormComponent={LetsForm}
    {...props}
  />
);
lfLog('Loaded AntD.Object');

export default ReactAntDObject;
