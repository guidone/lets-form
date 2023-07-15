import React, { useState, useCallback } from 'react';
import _ from 'lodash';
import { Tabs, Tab,  Box } from '@mui/material';

import { i18nOptions, passRest } from '../../helpers';
import { I18N } from '../../components';

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
    let defaultKey = value;
    if (!defaultKey && !_.isEmpty(tabs)) {
      defaultKey = tabs[0].value;
    }
    const [active, setActive] = useState(defaultKey);

    const handleKey = useCallback(
      (event, key) => {
        setActive(key);
        onChange(key);
      },
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

export { TabsMui as Tabs };
