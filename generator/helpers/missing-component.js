import React from 'react';
import _ from 'lodash';

export const MissingComponent = ({ lfComponent, label, lfFramework }) => {
  return (
    <div className="lf-missing-component">
      <div className="icon">
        <Warning color="#ff6633" height={16}/>
      </div>
      <div className="message">
        The component <span className="tag-component">{lfComponent}</span> (<em>"{_.isString(label) ? label : 'unknown'}"</em>)
        is not available for this framework (<b>{lfFramework}</b>)
      </div>
    </div>
  );
}