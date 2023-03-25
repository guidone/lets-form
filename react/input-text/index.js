import React from 'react';

import { Form } from 'rsuite';

const TextInput = (props) => {
  const { name, label, hint, value, onChange, onBlur } = props;

  return (
    <div>
      <label>{label}</label>
      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        onBlur={onBlur}
      />
      {hint && <div className="hint">{hint}</div>}
    </div>
  );
};

export { TextInput };