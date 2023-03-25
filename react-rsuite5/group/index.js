import React, { useState } from 'react';

import { Form, Divider, IconButton } from 'rsuite';

//import ArrowDownIcon from '@rsuite/icons/ArrowDown';
//import ArrowUpIcon from '@rsuite/icons/ArrowUp';

import './fields-group.scss';

const ArrowDownIcon = () => <span>-</span>
const ArrowUpIcon = () => <span>+</span>



const FieldsGroup = ({
  name,
  label,
  hint,
  value,
  size,
  placeholder,
  tooltip = false,
  disabled = false,
  onChange,
  onBlur,
  open = true,
  collapsible = true,
  children
}) => {
  const [isOpen, setIsOpen] = useState(open);

  return (
    <Form.Group controlId={name} className="rsuite5-fields-group">
      <Divider>
        {label}
        {collapsible && (
          <IconButton
            disabled={disabled}
            className="arrow"
            appearance="link"
            icon={isOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}
            size="sm"
            onClick={event => {
              setIsOpen(!isOpen);
            }}
          />
        )}
      </Divider>
      {(isOpen || !collapsible) && <>{children}</>}
    </Form.Group>
  );
};

export { FieldsGroup };