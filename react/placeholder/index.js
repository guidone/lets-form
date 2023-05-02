import React from 'react';

import { Placeholder } from '../../common';
import { I18N } from '../../components';

const PlaceholderReact = I18N(
  ({
    name,
    label,
    hint,
    text
  }) => {
    return (
      <div
        className="lf-form-react-control-group lf-control-placeholder"
        data-lf-field-name={name}
      >
        <label for={name}>
          {label}
        </label>
        <Placeholder text={text} />
        {hint && <div className="lf-form-react-message">{hint}</div>}
      </div>
    );
  },
  ['label', 'hint', 'text']
);

export { PlaceholderReact as Placeholder };