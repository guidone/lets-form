import React from 'react';

import { I18N } from '../../components/i18n';
import { i18nOptions } from '../../helpers/i18n-options';
import { lfLog } from '../../helpers/lf-log';

import { AntdGenericSelect } from '../../components/antd-select';

const SelectAntd = I18N(
  (props) => {
    return (
      <AntdGenericSelect
        className="lf-control-select"
        {...props}
      />
    );
  },
  ['label', 'hint', 'placeholder'],
  {
    options: i18nOptions
  }
);
lfLog('Loaded AntD.Select');

export default SelectAntd;
