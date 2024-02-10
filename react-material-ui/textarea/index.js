import React from 'react';

import { I18N } from '../../components';
import { MuiGenericInput } from '../../components/mui-generic-input';
import { lfLog } from '../../helpers/lf-log';

// DOC: https://mui.com/material-ui/api/input/

const Textarea = I18N(
  ({ ...rest }) => {

    return (
      <MuiGenericInput
        className="lf-control-textarea"
        component="textarea"
        multiline
        {...rest}
      />
    );
  },
  ['label', 'hint', 'placeholder']
);
lfLog('Loaded MUI.Textarea');

export default Textarea;