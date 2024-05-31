import React, { useEffect } from 'react';

import { ModuleComponent } from '../../common/module';
import { passRest } from '../../helpers';

const RSuite5ModuleComponent = ({
  name,
  componentUrl,
  onChange,
  value,
  defaultExport,
  exportedKey,
  ...rest
}) => {
  return (
    <ModuleComponent
      name={name}
      onChange={onChange}
      componentUrl={componentUrl}
      value={value}
      defaultExport={defaultExport}
      exportedKey={exportedKey}
      {...passRest(rest)}
    />
  );
};

export default RSuite5ModuleComponent;
