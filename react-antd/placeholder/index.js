import React from 'react';
import { Form } from 'antd';

import { Placeholder } from '../../common/placeholder';
import { I18N } from '../../components/i18n';
import { lfLog } from '../../helpers/lf-log';
import { makeClassName } from '../../helpers/make-class-name';

const PlaceholderAntd = I18N(
  ({
    name,
    hint,
    text,
    tooltip,
    label,
    className
  }) => {
    return (
      <Form.Item
        {...makeClassName('placeholder', name, className)}
        label={label}
        help={hint && !tooltip ? hint : undefined}
        tooltip={tooltip && hint}
        valuePropName={null}
      >
        <Placeholder text={text} />
      </Form.Item>
    );
  },
  ['label', 'hint', 'text']
);
lfLog('Loaded AntD.Placeholder');

export default PlaceholderAntd;