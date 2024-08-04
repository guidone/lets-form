import React, { useCallback } from 'react';
import _ from 'lodash';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import { i18nOptions, passRest } from '../../helpers';
import { I18N } from '../../components';
import { lfLog } from '../../helpers/lf-log';

import './tabs.scss';

const TabsMui = I18N(
  ({
    name,
    value,
    tabs,
    onChange,
    children,
    centered,
    fullWidth,
    indicatorColor,
    textColor,
    ...rest
  }) => {
    let active;
    if (value) {
      active = value;
    } else {
      if (!_.isEmpty(tabs)) {
        active = tabs[0].value;
      }
    }

    const handleKey = useCallback(
      (_event, key) => onChange(key),
      [onChange]
    );

    return (
      <div
        className="lf-control-tabs"
        data-lf-field-name={name}
      >
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={active}
            onChange={handleKey}
            centered={centered ?? undefined}
            indicatorColor={indicatorColor ?? undefined}
            textColor={textColor ?? undefined}
            variant={fullWidth ? 'fullWidth' : 'standard'}
            {...passRest(rest)}
          >
            {(tabs || []).map(tab => (
              <Tab key={tab.value} label={tab.label} value={tab.value} />
            ))}
          </Tabs>
        </Box>
        {_.isFunction(children) && (
          <div className="tab-fields">
            {children(active)}
          </div>
        )}
      </div>
    );
  },
  [],
  {
    tabs: i18nOptions
  }
);
lfLog('Loaded MUI.Tabs');

export default TabsMui;
