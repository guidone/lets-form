import React, { useState, useCallback, useEffect } from 'react';
import _ from 'lodash';
import { Stepper, Button, Group } from '@mantine/core';

import { passRest } from '../../helpers/pass-rest';
import { I18N } from '../../components/i18n';
import { GenericIcon } from '../../components/generic-icon';
import { lfLog } from '../../helpers/lf-log';
import { makeClassName } from '../../helpers/make-class-name';

import './steps.scss';

const i18nSteps = (value, i18n) =>
  (value ?? []).filter(value => value != null).map(value => ({
    ...value,
    label: i18n(value.label),
    description: i18n(value.description)
  }));

const MantineSteps = I18N(
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
    allowStepClick,
    allowStepSelect,
    className,
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

    const handleStepClick = useCallback(
      (stepIndex) => {
        setStepIdx(stepIndex);
        onChange(stepIndex);
      },
      [onChange]
    );

    const handlePrevious = useCallback(
      () => {
        const step = steps[stepIdx - 1].value;
        setStepIdx(value => value - 1);
        onChange(step);
      },
      [onChange, stepIdx, steps]
    );

    useEffect(
      () => {
        if (value) {
          let changedStepIdx = (steps || []).findIndex(obj => obj.value === value);
          if (changedStepIdx !== -1) {
            setStepIdx(changedStepIdx);
          }
        }
      },
      [value]
    );

    return (
      <div {...makeClassName('steps', name, className)}>
        <Stepper
          active={stepIdx}
          onStepClick={handleStepClick}
          {...passRest(rest)}
        >
          {(steps || []).map(step => (
            <Stepper.Step
              key={`step_${step.value}`}
              allowStepClick={allowStepClick}
              allowStepSelect={allowStepSelect}
              description={step.description || undefined}
              label={step.label}
              icon={step.icon && <GenericIcon icon={step.icon} />}
            />
          ))}
        </Stepper>
        {_.isFunction(children) && (
          <div className="lf-step">
            {children(step)}
          </div>
        )}

        <Group justify={align} mt="xl" className="lf-navigation-buttons">
          <Button
            onClick={handlePrevious}
            disabled={_.isEmpty(steps) || stepIdx === 0}
          >{labelPrevious || 'Previous'}</Button>
          <Button
            onClick={handleNext}
            disabled={_.isEmpty(steps) || stepIdx === (steps.length - 1) }
          >{labelNext || 'Next'}</Button>
        </Group>

      </div>
    );
  },
  ['labelPrevious', 'labelNext'],
  {
    steps: i18nSteps
  }
);
lfLog('Loaded Mantine.Steps');

export default MantineSteps;
