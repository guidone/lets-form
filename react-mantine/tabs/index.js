import React, { useState, useCallback } from 'react';
import _ from 'lodash';
import Nav from 'rsuite/Nav';
import { Tabs, rem } from '@mantine/core';

import { i18nOptions, passRest } from '../../helpers';
import { I18N } from '../../components';
import { lfLog } from '../../helpers/lf-log';

import './tabs.scss';

const MantineTabs = I18N(
  ({
    name,
    value,
    tabs,
    onChange,
    children,
    appearance,
    reversed,
    justified,
    pullRight,
    ...rest
  }) => {
    let defaultKey = value;
    if (!defaultKey && !_.isEmpty(tabs)) {
      defaultKey = tabs[0].value;
    }
    const [active, setActive] = useState(defaultKey);

    const handleChange = useCallback(
      active => {
        setActive(active);
        onChange(active);
      },
      [onChange]
    );

    return (
      <div
        className="lf-control-tabs"
        data-lf-field-name={name}
      >
        <Tabs
          value={active}
          onChange={handleChange}




          appearance={appearance}
          reversed={reversed}
          justified={justified}
          pullRight={pullRight}
          {...passRest(rest)}
        >
        <Tabs.List>
          {(tabs || []).map(tab => (
            <Tabs.Tab
              value={tab.value}
            >{tab.label}</Tabs.Tab>
          ))}
        </Tabs.List>

          {(tabs || []).map(tab => (
            <Tabs.Panel value={tab.value}>
            {children(tab.value)}
          </Tabs.Panel>
          ))}

        </Tabs>
      </div>
    );
  },
  [],
  {
    tabs: i18nOptions
  }
);
lfLog('Loaded Mantine.Tabs');

export default MantineTabs;
