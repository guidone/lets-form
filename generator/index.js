import React, { useCallback, useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import classNames from 'classnames';

//import { DevTool } from '@hookform/devtools';
import _ from 'lodash';

import { ValidationErrors } from '../components';
import { FRAMEWORKS } from '../costants';
import { Warning  } from '../assets/icons';
import { applyFormRules, reduceFields, validateRulesDefinition  } from '../helpers';
//import PropTypes from 'prop-types';



import './index.scss';

const enrichWithLabels = (validationErrors, fields) => {
  const result = { ...validationErrors };
  const collectLabels = reduceFields(
    fields,
    (field, accumulator) => field.label ? { ...accumulator, [field.name]: field.label } : accumulator,
    {}
  );

  Object
    .keys(result)
    .forEach(key => {
      if (result[key] && result[key].ref && collectLabels[result[key].ref.name]) {
        result[key].ref.label = collectLabels[result[key].ref.name];
      }
    });
  return result;
};



const errorToString = error => {
  if (error) {
    if (error.message) {
      return error.message;
    } else if (error.type === 'required') {
      return 'This field is required';
    } else if (error.type === 'minLength') {
      return 'Text is too short';
    } else if (error.type === 'maxLength') {
      return 'Text is too long';
    } else if (error.type === 'max') {
      return 'Value is too big';
    } else if (error.type === 'min') {
      return 'Value is too small';
    }
    return 'Invalid value';
  }
  return undefined;
}


//console.log('Form---', Forms)
//console.log('Fields---', Fields)

const DEBUG_RENDER = true;

const translateValidation = validation => {
  if (!_.isEmpty(validation.message)) {
    let result = {};
    if (validation.required) {
      result.required = validation.message
    }
    ['min', 'max', 'minLength', 'maxLength', 'pattern'].forEach(key => {
      result[key] = {
        value: validation[key],
        message: validation.message
      }
    });
    return result;
  }
  return validation;
}


const MissingComponent = ({ lfComponent, label, lfFramework }) => {
  return (
    <div className="lf-missing-component">
      <div className="icon">
        <Warning color="#ff6633" height={16}/>
      </div>
      <div className="message">
        The component <span className="tag-component">{lfComponent}</span> (<em>"{label}"</em>)
        is not available for this framework (<b>{lfFramework}</b>)
      </div>
    </div>
  );
}

// Collect all rules from the form and defined inside fields (useful in manifests)
const collectRules = form => {
  return reduceFields(
    form.fields,
    (field, acc) => {
      if (field.rules) {
        const validation = validateRulesDefinition(field.rules);
        if (validation == null) {
          return [...acc, ...field.rules];
        } else {
          console.error('Wrong rules format', field, ' errors: ', validation);
        }
      }
      return acc;
    },
    form.rules ?? []
  );
};


const GenerateGenerator = ({ Forms, Fields }) => {

  const renderFields = ({ fields,
    control,
    framework,
    onChange,
    getValues,
    Wrapper,
    GroupWrapper,
    BottomView,
    debug,
    disabled,
    readOnly,
    plaintext,
    errors,
    showErrors,
    level = 1
  }) => {
    const renderedFields = (fields || [])
      .filter(field => Wrapper || field.hidden !== true)
      .map((field, index) => {
        let Component;
        if (Fields[field.component] && Fields[field.component][framework]) {
          Component = Fields[field.component][framework];
        } else if (Fields[field.component] && Fields[field.component]['*']) {
          Component = Fields[field.component]['*'];
        } else {
          Component = MissingComponent;
        }
        // remove mandatory fields and platform specific fields
        const additionalFields = _.omit(field, [
          'id', 'name', 'label', 'hint', 'disabled', 'readOnly', 'plaintext', 'size', 'placeholder', 'component',
          ...FRAMEWORKS
        ]);

        // special case of group
        if (field.component === 'group') {
          const component = (
            <Component
              key={field.name}
              lfComponent={field.component}
              lfFramework={framework}
              name={field.name}
              label={field.label}
              hint={field.hint}
              disabled={field.disabled}
              {...additionalFields}
            >
              <>
                {renderFields({
                  Wrapper,
                  GroupWrapper,
                  BottomView,
                  onChange,
                  fields: field.fields,
                  control,
                  framework,
                  getValues,
                  disabled,
                  readOnly,
                  plaintext,
                  errors,
                  showErrors,
                  level: level + 1
                })}
                {BottomView && <BottomView field={field} target="fields" />}
              </>
            </Component>
          );
          return GroupWrapper ? <GroupWrapper field={field} level={level} index={index}>{component}</GroupWrapper> : component;
        } else if (field.component === 'two-columns') {
          const component = (
            <Component
              key={field.name}
              lfComponent={field.component}
              lfFramework={framework}
              name={field.name}
              {...additionalFields}
            >
            {column => {
              if (column === 'left') {
                return (
                  <>
                    {renderFields({
                      Wrapper,
                      GroupWrapper,
                      BottomView,
                      onChange,
                      fields: field.leftFields,
                      control,
                      framework,
                      getValues,
                      disabled,
                      readOnly,
                      plaintext,
                      errors,
                      showErrors,
                      level: level + 1
                    })}
                    {BottomView && <BottomView field={field} target="leftFields" />}
                  </>
                )
              } else if (column === 'right') {
                return (
                  <>
                    {renderFields({
                      Wrapper,
                      GroupWrapper,
                      BottomView,
                      onChange,
                      fields: field.rightFields,
                      control,
                      framework,
                      getValues,
                      disabled,
                      readOnly,
                      plaintext,
                      errors,
                      showErrors,
                      level: level + 1
                    })}
                    {BottomView && <BottomView field={field} target="rightFields" />}
                  </>
                )
              }
            }}
            </Component>
          );
          return GroupWrapper ? <GroupWrapper level={level} field={field} index={index}>{component}</GroupWrapper> : component;
        } else if (field.component === 'three-columns') {
          const component = (
            <Component
              key={field.name}
              name={field.name}
              lfComponent={field.component}
              lfFramework={framework}
              {...additionalFields}
            >
            {column => {
              if (column === 'left') {
                return (
                  <>
                    {renderFields({
                      Wrapper,
                      GroupWrapper,
                      BottomView,
                      onChange,
                      fields: field.leftFields,
                      control,
                      framework,
                      getValues,
                      disabled,
                      readOnly,
                      plaintext,
                      errors,
                      showErrors,
                      level: level + 1
                    })}
                    {BottomView && <BottomView field={field} target="leftFields" />}
                  </>
                )
              } else if (column === 'center') {
                return (
                  <>
                    {renderFields({
                      Wrapper,
                      GroupWrapper,
                      BottomView,
                      onChange,
                      fields: field.centerFields,
                      control,
                      framework,
                      getValues,
                      disabled,
                      readOnly,
                      plaintext,
                      errors,
                      showErrors,
                      level: level + 1
                    })}
                    {BottomView && <BottomView field={field} target="centerFields" />}
                  </>
                )
              } else if (column === 'right') {
                return (
                  <>
                    {renderFields({
                      Wrapper,
                      GroupWrapper,
                      BottomView,
                      onChange,
                      fields: field.rightFields,
                      control,
                      framework,
                      getValues,
                      disabled,
                      readOnly,
                      plaintext,
                      errors,
                      showErrors,
                      level: level + 1
                    })}
                    {BottomView && <BottomView field={field} target="rightFields" />}
                  </>
                )
              }
            }}
            </Component>
          );
          return GroupWrapper ? <GroupWrapper field={field} level={level} index={index}>{component}</GroupWrapper> : component;
        }


        const rules = translateValidation({
          required: field.required,
          ...field.validation
        });

        return (
          <Controller
            key={`field_${field.name}`}
            name={field.name}
            rules={rules}
            control={control}
            render={({ field: fieldInfo }) => {
              const component = <Component
                {...fieldInfo}
                key={`field_${field.name}`}
                lfComponent={field.component}
                lfFramework={framework}
                name={field.name}
                label={field.label}
                hint={field.hint}
                disabled={disabled || field.disabled}
                readOnly={readOnly || field.readOnly}
                plaintex={plaintext || field.plaintext}
                size={field.size}
                placeholder={field.placeholder}
                error={errors && errors[field.name] ?
                  (showErrors === 'inline' ? errorToString(errors[field.name]) : true)
                  : undefined
                }
                {...additionalFields}
                {...field[framework]}
                onChange={(value, opts) => {
                  // TODO use callback
                  fieldInfo.onChange(value);
                  onChange({ ...getValues(), [field.name]: value }, opts);
                }}
              />;

              return Wrapper ? <Wrapper field={field} level={level} index={index}>{component}</Wrapper> : component;
              }
            }
          />
        );
      });

    return renderedFields;

    /*return BottomView ?
      [...renderedFields, <BottomView />]
      : renderedFields;
      */
  }



  const FormGenerator = React.memo(({
    framework,
    form,
    onChange = () => {},
    onSubmit = () => {},
    onReset = () => {},
    onError = () => {},
    wrapper,
    groupWrapper,
    bottomView,
    defaultValues = {},
    onlyFields = false,
    debug = false,
    disabled = false,
    readOnly = false,
    plaintext = false,
    hideToolbar = false,
    children,
    className
    //rules
  }) => {
    if (debug) {
      console.log('Generating form -> ', form);
    }
    // TODO replace this
    const { showErrors } = form;
    const collectedRules = collectRules(form)

    const { handleSubmit, formState: { errors }, reset, control, getValues } = useForm({
      defaultValues,
      mode: form.validationMode
    });
    const [validationErrors, setValidationErrors] = useState();
    // store form fields, apply immediately form rules (collected from all fields)
    const [formRules, setFormRules] = useState(collectedRules);
    const [formFields, setFormFields] = useState(
      applyFormRules(form.fields, collectedRules, defaultValues)
    );

    // update internal state if form changes
    useEffect(
      () => {
        const collectedRules = collectRules(form);
        setFormFields(applyFormRules(form.fields, collectedRules, defaultValues));
        setFormRules(collectRules(form));
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [form] // don't put defaultValues here
    );

    const onHandleSubmit = useCallback(
      data => {
        console.log('submitting', data)
        setValidationErrors(null);
        onSubmit(data);
      },
      [onSubmit]
    );

    const onHandleError = useCallback(
      data => {
        console.log('error', data);
        setValidationErrors(data);
        onError(data);
      },
      [onError]
    );

    const handleReset = useCallback(
      () => {
        setValidationErrors(null);
        reset(defaultValues);
      },
      [defaultValues, reset]
    );

    const handleChange = useCallback(
      (values) => {
        console.log('on change nel main form', values, ' with rulkes', formRules)
        // TODO rename to applyFieldsRules
        const newFormFields = applyFormRules(formFields, formRules ?? [], values);
        if (newFormFields !== formFields) {
          setFormFields(newFormFields);
        }
        onChange(values);
      },
      [onChange, formFields, formRules]
    );

    if (debug) {
      console.log('validation', errors)
    }

    const Form = Forms[framework];
    const Wrapper = wrapper;
    const GroupWrapper = groupWrapper;
    const BottomView = bottomView;

    return (
      <div className={classNames('lf-lets-form', className)}>
        {validationErrors && showErrors === 'groupedTop' && (
          <ValidationErrors className="top" errors={enrichWithLabels(validationErrors, formFields)}/>
        )}
        <Form
          onSubmit={handleSubmit(onHandleSubmit, onHandleError)}
          defaultValues={defaultValues}
          onlyFields={onlyFields}
          hideToolbar={hideToolbar}
          onReset={handleReset}
          disabled={disabled}
          readOnly={readOnly}
          plaintext={plaintext}
          {..._.omit(form, 'id', 'fields', 'version')}
        >
          {renderFields({
            Wrapper,
            GroupWrapper,
            BottomView,
            onChange: handleChange,
            fields: formFields, // take from state
            control,
            framework,
            getValues,
            debug,
            errors,
            disabled: disabled || form.disabled,
            readOnly: readOnly || form.readOnly,
            plaintext: plaintext || form.plaintext,
            showErrors
          })}
          {children}
          {validationErrors && (showErrors === 'groupedBottom' || _.isEmpty(showErrors)) && (
            <ValidationErrors className="bottom" errors={enrichWithLabels(validationErrors, formFields)}/>
          )}
        </Form>
      </div>
    )
  }, function (prevProps, nextProps) {
    if (DEBUG_RENDER) {
      console.log('Form generator re-render: are equal'
        + ' framework=' + (prevProps.framework === nextProps.framework)
        + ' onChange=' + (prevProps.onChange === nextProps.onChange)
        + ' wrapper=' + (prevProps.wrapper === nextProps.wrapper)
        + ' form=' + (prevProps.form === nextProps.form)
      );
    }

    const isEqual = prevProps.framework === nextProps.framework
      && prevProps.onChange === nextProps.onChange
      && prevProps.wrapper === nextProps.wrapper
      && prevProps.form === nextProps.form;
    console.log('Is re-rendering?', !isEqual);
    return isEqual;
  });

  FormGenerator.displayName = 'FormGenerator';

  return FormGenerator;
};

export { GenerateGenerator };
