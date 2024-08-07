import React from 'react';
import _ from 'lodash';
import { Nav } from 'rsuite';

import { i18nOptions } from '../../helpers/i18n-options';
import { passRest } from '../../helpers/pass-rest';
import { I18N } from '../../components/i18n';
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
        <Nav
          appearance={appearance}
          reversed={reversed}
          justified={justified}
          pullRight={pullRight}
          activeKey={active}
          onSelect={onChange}
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
