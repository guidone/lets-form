import React from 'react';
import _ from 'lodash';
import { Form, Toggle } from 'rsuite';

import { RequiredIcon } from '../../components/required-icon';
import { I18N } from '../../components/i18n';
import { lfLog } from '../../helpers/lf-log';
import { RSuite5FieldControl } from '../../components/rsuite-field-control';

const ToggleInput = I18N(
  ({
    name,
    label,
    hint,
    value,
    size,
    tooltip = false,
    disabled = false,
    required = false,
    onChange,
    checkedChildren,
    unCheckedChildren,
    error
  }) => {
    return (
      <Form.Group controlId={name} className="lf-control-toggle">
        {label && (
          <Form.ControlLabel>
            {label}
            {hint && tooltip && <Form.HelpText tooltip>{hint}</Form.HelpText>}
            {required && <RequiredIcon />}
          </Form.ControlLabel>
        )}
        <RSuite5FieldControl errorMessage={_.isString(error) ? error : undefined }>
          <Toggle
            name={name}
            checked={value}
            onChange={onChange}
            disabled={disabled}
            unCheckedChildren={unCheckedChildren && unCheckedChildren !== '' ? unCheckedChildren : undefined}
            checkedChildren={checkedChildren && checkedChildren !== '' ? checkedChildren : undefined}
            errorMessage={_.isString(error) ? error : undefined }
            size={size}
          />
        </RSuite5FieldControl>
        {hint && !tooltip && <Form.HelpText>{hint}</Form.HelpText>}
      </Form.Group>
    );
  },
  ['label', 'hint', 'checkedChildren', 'unCheckedChildren']
);
lfLog('Loaded RSuite5.ToggleInput');

export default ToggleInput;
