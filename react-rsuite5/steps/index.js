import React, { useState, useCallback } from 'react';
import _ from 'lodash';
import { Steps, ButtonGroup, Button } from 'rsuite';

import { passRest } from '../../helpers';
import { I18N } from '../../components';

import './steps.scss';
import classNames from 'classnames';

const i18nSteps = (value, i18n) => 
  (value ?? []).filter(value => value != null).map(value => ({ 
    ...value, 
    label: i18n(value.label),
    description: i18n(value.description) 
  }));

const Rsuite5Steps = I18N(
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

    return (
      <div
        className="lf-control-steps"
        data-lf-field-name={name}
      >
        <Steps 
          current={stepIdx}
          currentStatus={status}
          small={small}
          {...passRest(rest)}
        >
          {(steps || []).map(step => (
            <Steps.Item 
              key={`step_${step.value}`}
              description={step.description || undefined}
              title={step.label} 
            />
          ))}      
        </Steps>
        {_.isFunction(children) && (
          <div className="lf-step">
            {children(step)}
          </div>
        )}

        <div className={classNames('lf-navigation-buttons', align)}>
          <ButtonGroup>
            <Button 
              onClick={handlePrevious} 
              disabled={_.isEmpty(steps) || stepIdx === 0}
            >{labelPrevious || 'Previous'}</Button>
            <Button 
              onClick={handleNext} 
              disabled={_.isEmpty(steps) || stepIdx === (steps.length - 1) }
            >{labelNext || 'Next'}</Button>
          </ButtonGroup>
        </div>
      </div>
    );
  },
  ['labelPrevious', 'labelNext'],
  {
    tabs: i18nSteps
  }
);

export { Rsuite5Steps as Steps };
