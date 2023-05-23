import React from 'react';
import { Form } from 'antd';

import { ListArray } from '../../common';
import LetsForm from '../../react-antd';

import './array.scss';

const ListArrayAntd = ({
  hint,
  required,
  tooltip,
  name,
  label,
  error,
  ...rest
}) => {

  return (
    <Form.Item
      className="lf-control-array"
      data-lf-field-name={name}
      label={label}
      name={name}
      help={error != null ? error : (hint && !tooltip ? hint : undefined)}
      required={required}
      tooltip={tooltip && hint}
      hasFeedback={error != null}
      validateStatus={error ? 'error': undefined}
    >
      <ListArray
        LetsFormComponent={LetsForm}
        {...rest}
      />
    </Form.Item>
  );
};

export { ListArrayAntd as ListArray };
