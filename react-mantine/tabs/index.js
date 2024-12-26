import React from 'react';
import _ from 'lodash';
import { Tabs } from '@mantine/core';
import classNames from 'classnames';

import { i18nOptions } from '../../helpers/i18n-options';
import { passRest } from '../../helpers/pass-rest';
import { TextOrIcon } from '../../common/text-or-icon';
import { I18N } from '../../components/i18n';
import { lfLog } from '../../helpers/lf-log';
import { makeClassName } from '../../helpers/make-class-name';

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
    className,
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

    return (
      <div
        {...makeClassName('tabs', name, className, {
          [`orientation-${orientation}`]: orientation != null,
          [`placement-${placement}`]: placement != null
        })}
      >
        <Tabs
          value={active}
          onChange={onChange}
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
