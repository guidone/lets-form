import React from 'react';
import _ from 'lodash';
import { Tabs } from 'antd';

import { i18nOptions, passRest } from '../../helpers';
import { I18N } from '../../components';
import { lfLog } from '../../helpers/lf-log';

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
          animated={animated}
          centered={centered}
          size={size}
          type={tabType}
          activeKey={active}
          items={(tabs || []).map(tab => ({
            key: tab.value,
            label: tab.label
          }))}
          onChange={onChange}
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
lfLog('Loaded AntD.Tabs');

export default TabsAntd;
