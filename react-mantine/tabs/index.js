import React, { useState, useCallback } from 'react';
import _ from 'lodash';
import { Tabs } from '@mantine/core';
import classNames from 'classnames';

import { i18nOptions, passRest } from '../../helpers';
import { I18N } from '../../components';
import { lfLog } from '../../helpers/lf-log';

import './tabs.scss';

// TODO if url, then use icon
// TODO disabled tabs

const MantineTabs = I18N(
  ({
    name,
    value,
    tabs,
    onChange,
    children,
    grow,
    justify,
    orientation,
    placement,
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
        className={classNames('lf-control-tabs', {
          [`orientation-${orientation}`]: orientation != null,
          [`placement-${placement}`]: placement != null
        })}
        data-lf-field-name={name}
      >
        <Tabs
          value={active}
          onChange={handleChange}
          orientation={orientation}
          placement={placement}
          {...passRest(rest)}
        >
        <Tabs.List
          grow={grow}
          justify={justify}
        >
          {(tabs || []).map(tab => (
            <Tabs.Tab
              key={tab.value}
              value={tab.value}
              leftSection={tab.leftSection}
              rightSection={tab.rightSection}
              size={tab.size}
              color={tab.color}
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
