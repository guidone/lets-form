import React from 'react';

import { isUrl } from '../../helpers';

export const TextOrIcon = str => {
  if (isUrl(str)) {
    return (
      <img className="lf-prefix-icon" src={str} alt="icon"/>
    );
  } else {
    return <span>{str}</span>;
  }
};