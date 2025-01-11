import React from 'react';

import { I18N } from '../../components/i18n';
import { i18nOptions } from '../../helpers/i18n-options';
import { lfLog } from '../../helpers/lf-log';
import { AntdGenericSelect } from '../../components/antd-select';
import { makeClassName } from '../../helpers/make-class-name';

const SelectAntd = I18N(
  (props) => {
    return (
      <AntdGenericSelect
        {...makeClassName('select', props.name, props.className)}
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
