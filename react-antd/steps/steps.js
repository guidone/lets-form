import React, { useState, useCallback } from 'react';
import _ from 'lodash';
import { Button, Steps } from 'antd';

import { passRest } from '../../helpers';
import { I18N } from '../../components';
import { GenericIcon } from '../../components/generic-icon';
import { lfLog } from '../../helpers/lf-log';

import './steps.scss';
import classNames from 'classnames';

const i18nSteps = (value, i18n) =>
  (value ?? []).filter(value => value != null).map(value => ({
    ...value,
    label: i18n(value.label),
    description: i18n(value.description),
    subtitle:  i18n(value.subtitle)
  }));

const AntdSteps = I18N(
  ({
    name,
    children,
    value,
    steps,
    onChange = () => {},
    align,
    status,
    small,
    labelNext,
    labelPrevious,
    labelPlacement,
    percent,
    clickable,
    stepsType,
    ...rest
  }) => {
    let defaultStep = value;
    let defaultStepIdx = (steps || []).findIndex(obj => obj.value === value);
    if (!defaultStep && !_.isEmpty(steps)) {
      defaultStepIdx = 0;
    }

    const [stepIdx, setStepIdx] = useState(defaultStepIdx);
    const step = _.isArray(steps) && !_.isEmpty(steps) && stepIdx >= 0 ? steps[stepIdx].value : null;

    const handleNext = useCallback(
      () => {
        const step = steps[stepIdx + 1].value;
        setStepIdx(value => value + 1);
        onChange(step);
      },
      [onChange, stepIdx, steps]
    );

    const handlePrevious = useCallback(
      () => {
        const step = steps[stepIdx - 1].value;
        setStepIdx(value => value - 1);
        onChange(step);
      },
      [onChange, stepIdx, steps]
    );

    const handleChange = useCallback(
      current => {
        setStepIdx(current);
        onChange(steps[current]);
      },
      [steps]
    );

    const antdSteps = (steps || []).map(step => ({
      title: step.label,
      description: step.description,
      subTitle: step.subtitle,
      icon: step.icon ? <GenericIcon icon={step.icon} /> : undefined
    }));

    return (
      <div
        className="lf-control-steps"
        data-lf-field-name={name}
      >
        <Steps
          current={stepIdx}
          status={status}
          percent={percent}
          type={stepsType}
          labelPlacement={labelPlacement}
          size={small ? 'small' : 'default'}
          items={antdSteps}
          onChange={clickable ? handleChange : undefined}
          {...passRest(rest)}
        />
        {_.isFunction(children) && (
          <div className="lf-step">
            {children(step)}
          </div>
        )}
        <div className={classNames('lf-navigation-buttons', align)}>
          <>
            <Button
              onClick={handlePrevious}
              disabled={_.isEmpty(steps) || stepIdx === 0}
            >{labelPrevious || 'Previous'}</Button>
            <Button
              onClick={handleNext}
              disabled={_.isEmpty(steps) || stepIdx === (steps.length - 1) }
              style={{ margin: '0 8px' }}
            >{labelNext || 'Next'}</Button>
          </>
        </div>
      </div>
    );
  },
  ['labelPrevious', 'labelNext'],
  {
    tabs: i18nSteps
  }
);
lfLog('Loaded AntD.Steps');

export default AntdSteps;
