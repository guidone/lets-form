import React from 'react';

import { I18N } from '../../components/i18n';
import { i18nOptions } from '../../helpers/i18n-options';
import { lfLog } from '../../helpers/lf-log';
import { makeClassName } from '../../helpers/make-class-name';
import { AntdGenericSelect } from '../../components/antd-select';

const Multiselect = I18N(
  (props) => {
    return (
      <AntdGenericSelect
        {...makeClassName('multiselect', props.name, props.className)}
        mode="multiple"
        {...props}
      />
    );
  },
  ['label', 'hint', 'placeholder'],
  {
    options: i18nOptions
  }
);
lfLog('Loaded AntD.Multiselect');

export default Multiselect;
