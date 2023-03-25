import React from 'react';

import { Form, Toggle } from 'rsuite';

import { Asterisk } from '../../components';

import './index.scss';

const ToggleInput = ({
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
  onBlur
}) => {

  return (
    <Form.Group controlId={name} className="gforms-react-rsuite5-toggle">
      {label && (
        <Form.ControlLabel>
          {label}
          {hint && tooltip && <Form.HelpText tooltip>{hint}</Form.HelpText>}
          {required && <Asterisk />}
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
        size={size}
      >
        </Form.Control>
        {hint && !tooltip && <Form.HelpText>{hint}</Form.HelpText>}

    </Form.Group>
  );
};

export { ToggleInput };