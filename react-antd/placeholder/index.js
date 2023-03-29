import React from 'react';
import { Form } from 'antd';

import { Placeholder } from '../../common';

const PlaceholderAntd = ({
  hint,
  text,
  tooltip,
  label
}) => {
  return (
    <Form.Item
      label={label}
      help={hint && !tooltip ? hint : undefined}
      tooltip={tooltip && hint}
      className="lf-control-placeholder"
    >
      <Placeholder text={text} />
    </Form.Item>
  );
};

export { PlaceholderAntd as Placeholder };