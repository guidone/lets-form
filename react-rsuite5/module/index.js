import React, { useEffect } from 'react';

import { ModuleComponent } from '../../common/module';
import { passRest } from '../../helpers';

const DEF_1 = false;
const DEF_2 = 'Input';

const RSuite5ModuleComponent = ({
  name,
  componentUrl,
  onChange,
  value,
  ...rest
}) => {
  return (
    <ModuleComponent
      name={name}
      onChange={onChange}
      componentUrl={componentUrl}
      value={value}
      defaultExport={DEF_1}
      exportedKey={DEF_2}
      {...passRest(rest)}
    />
  );
};

export default RSuite5ModuleComponent;
