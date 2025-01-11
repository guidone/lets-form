import React from 'react';
import { Form } from 'antd';
import _ from 'lodash';

import { ListArray } from '../../common/array';
import LetsForm from '../../react-antd';
import { I18N } from '../../components/i18n';
import { lfLog } from '../../helpers/lf-log';
import { makeClassName } from '../../helpers/make-class-name';

import './array.scss';

const ListArrayAntd = I18N(
  ({
    hint,
    required,
    tooltip,
    name,
    label,
    className,
    ...rest
  }) => {
    return (
      <Form.Item
        {...makeClassName('array', name, className)}
        label={label}
        name={name}
        help={_.isString(rest.error?.errorMessage) && rest.error?.errorMessage ?
          rest.error.errorMessage : (hint && !tooltip ? hint : undefined)
        }
        required={required}
        tooltip={tooltip && hint}
        hasFeedback={_.isString(rest.error?.errorMessage) && rest.error?.errorMessage}
        validateStatus={rest.error ? 'error': undefined}
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
