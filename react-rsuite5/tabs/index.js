import React, { useState, useCallback } from 'react';
import _ from 'lodash';
import { Nav } from 'rsuite';

import { i18nOptions, passRest } from '../../helpers';
import { I18N } from '../../components';
import { lfLog } from '../../helpers/lf-log';

import './tabs.scss';

const Tabs = I18N(
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
        <Nav
          appearance={appearance}
          reversed={reversed}
          justified={justified}
          pullRight={pullRight}
          activeKey={active}
          onSelect={handleKey}
          {...passRest(rest)}
        >
          {(tabs || []).map(tab => (
            <Nav.Item
              key={tab.value}
              eventKey={tab.value}
            >{tab.label}</Nav.Item>
          ))}
        </Nav>
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
lfLog('Loaded RSuite.Tabs');

export default Tabs;
