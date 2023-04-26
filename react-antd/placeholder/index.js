import React from 'react';
import { Form } from 'antd';

import { Placeholder } from '../../common';
import { I18N } from '../../components';

const PlaceholderAntd = I18N(
  ({
    name,
    hint,
    text,
    tooltip,
    label
  }) => {
    return (
      <Form.Item
        label={label}
        data-lf-field-name={name}
        help={hint && !tooltip ? hint : undefined}
        tooltip={tooltip && hint}
        className="lf-control-placeholder"
      >
        <Placeholder text={text} />
      </Form.Item>
    );
  },
  ['label', 'hint', 'text']
);

export { PlaceholderAntd as Placeholder };