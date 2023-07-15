import React, { useState, useCallback } from 'react';
import _ from 'lodash';
import { Tabs, Tab } from 'react-bootstrap';


import { i18nOptions, passRest } from '../../helpers';
import { I18N } from '../../components';

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
    let defaultKey = value;
    if (!defaultKey && !_.isEmpty(tabs)) {
      defaultKey = tabs[0].value;
    }
    const [active, setActive] = useState(defaultKey);

    const handleKey = useCallback(
      key => {
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
        <Tabs
          activeKey={active}           
          onSelect={handleKey}
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

export { TabsReactBootstrap as Tabs };
