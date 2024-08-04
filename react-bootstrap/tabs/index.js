import React from 'react';
import _ from 'lodash';
import { Tabs, Tab } from 'react-bootstrap';


import { i18nOptions, passRest } from '../../helpers';
import { I18N } from '../../components';
import { lfLog } from '../../helpers/lf-log';

import './tabs.scss';

const TabsReactBootstrap = I18N(
  ({
    name,
    value,
    tabs,
    onChange,
    children,
    variant,
    transition,
    fill,
    justify,
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
        className="lf-control-tabs"
        data-lf-field-name={name}
      >
        <Tabs
          activeKey={active}
          onSelect={onChange}
          variant={variant || 'tabs'}
          transition={transition === false ? false : undefined}
          fill={fill}
          justify={justify}
          {...passRest(rest)}
        >
          {(tabs || []).map(tab => (
            <Tab
              key={tab.value}
              eventKey={tab.value}
              title={tab.label}
            >{children(active)}</Tab>
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
lfLog('Loaded ReactBootrap.Tabs');

export default TabsReactBootstrap;
