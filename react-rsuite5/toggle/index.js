import React from 'react';
import _ from 'lodash';
import Form from 'rsuite/Form';
import Toggle from 'rsuite/Toggle';

import { RequiredIcon, I18N } from '../../components';
import { lfLog } from '../../helpers/lf-log';

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
        <Form.Control
          name={name}
          accepter={Toggle}
          value={value}
          onChange={onChange}
          disabled={disabled}
          unCheckedChildren={unCheckedChildren && unCheckedChildren !== '' ? unCheckedChildren : undefined}
          checkedChildren={checkedChildren && checkedChildren !== '' ? checkedChildren : undefined}
          errorMessage={_.isString(error) ? error : undefined }
          size={size}
        >
        </Form.Control>
        {hint && !tooltip && <Form.HelpText>{hint}</Form.HelpText>}
      </Form.Group>
    );
  },
  ['label', 'hint', 'checkedChildren', 'unCheckedChildren']
);
lfLog('Loaded RSuite5.ToggleInput');

export default ToggleInput;
