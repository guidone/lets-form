import React, { useState, useCallback } from 'react';
import _ from 'lodash';
import { Tabs } from '@mantine/core';
import classNames from 'classnames';

import { i18nOptions } from '../../helpers/i18n-options';
import { passRest } from '../../helpers/pass-rest';
import { TextOrIcon } from '../../common/text-or-icon';
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
              leftSection={TextOrIcon(tab.leftSection)}
              rightSection={TextOrIcon(tab.rightSection)}
              size={tab.size}
              color={tab.color}
              disabled={tab.disabled}
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
