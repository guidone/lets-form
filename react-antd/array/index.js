import React from 'react';
import { Form } from 'antd';

import { ListArray } from '../../common';
import LetsForm from '../../react-antd';
import { I18N } from '../../components';
import { lfLog } from '../../helpers/lf-log';

import './array.scss';

const ListArrayAntd = I18N(
  ({
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
        valuePropName={null}
      >
        <ListArray
          LetsFormComponent={LetsForm}
          {...rest}
        />
      </Form.Item>
    );
  },
  ['label', 'hint']
);
lfLog('Loaded AntD.ListArray');

export default ListArrayAntd;
