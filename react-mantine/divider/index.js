import React from 'react';
import { Divider } from '@mantine/core';

import { lfLog } from '../../helpers/lf-log';

const DividerMantine = ({
  ...rest
}) => {
  return (
    <Divider
      {...rest}
    />
  );
};
lfLog('Loaded Mantine.Divider');

export default DividerMantine;