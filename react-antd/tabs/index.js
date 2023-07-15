import React, { useState, useCallback } from 'react';
import _ from 'lodash';
import { Tabs } from 'antd';

import { i18nOptions, passRest } from '../../helpers';
import { I18N } from '../../components';

import './tabs.scss';

const TabsAntd = I18N(
  ({
    name,
    value,
    tabs,
    onChange,
    children,
    animated,
    centered,
    size,
    tabType,
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
          animated={animated}
          centered={centered}
          size={size}
          type={tabType}
          activeKey={active}
          items={(tabs || []).map(tab => ({
            key: tab.value,
            label: tab.label
          }))} 
          onChange={handleKey} 
          {...passRest(rest)}
        />
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

export { TabsAntd as Tabs };
