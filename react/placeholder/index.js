import React from 'react';

import { Placeholder } from '../../common';
import { I18N } from '../../components';
import { lfLog } from '../../helpers/lf-log';

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
        {label && (
          <label for={name}>
            {label}
          </label>
        )}
        <Placeholder text={text} />
        {hint && <div className="lf-form-react-message">{hint}</div>}
      </div>
    );
  },
  ['label', 'hint', 'text']
);
lfLog('Loaded React.Placeholder');

export default PlaceholderReact;