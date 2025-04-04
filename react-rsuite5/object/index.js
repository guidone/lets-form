import LetsForm from '../../react-rsuite5';

import { CommonObject } from '../../common/object';

import { lfLog } from '../../helpers/lf-log';

lfLog('Loaded RSuite5.Object');

const RSuite5Object = props => (
  <CommonObject
    LetsFormComponent={LetsForm}
    {...props}
  />
);

export default RSuite5Object;
