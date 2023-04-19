/* eslint-disable no-new-func */
import React, { useCallback, useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import classNames from 'classnames';
import _ from 'lodash';

import { ValidationErrors } from '../components';
import { FRAMEWORKS } from '../costants';
import { Warning  } from '../assets/icons';
import { reduceFields, applyTransformers, isI18n  } from '../helpers';
//import PropTypes from 'prop-types';

import FormContext from '../form-context';

import './index.scss';

const DEBUG_RENDER = true;

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



const translateValidation = (validation, locale) => {
  if (!_.isEmpty(validation.message)) {
    let errorMessage;
    if (_.isString(validation.message)) {
      errorMessage = validation.message;
    } else if (isI18n(validation.message)) {
      if (validation.message[locale]) {
        errorMessage = validation.message[locale];
      } else if (validation.message['en-US']) {
        // otherwise default to english
        errorMessage = validation.message['en-US'];
      } else if (Object.keys(validation.message) !== 0) {
        // otherwise get the first available translation
        errorMessage = validation.message[Object.keys(validation.message)[0]];
      } else {
        errorMessage = 'Field is required';
      }
    }

    let result = {};
    if (validation.required) {
      result.required = errorMessage
    }
    // min / max validation
    ['min', 'max', 'minLength', 'maxLength'].forEach(key => {
      if (validation[key] != null) {
        result[key] = {
          value: validation[key],
          message: errorMessage
        }
      }
    });
    // validation with regex
    if (validation.pattern) {
      result.pattern = {
        value: new RegExp(validation.pattern),
        message: errorMessage
      };
    }

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

const collectTransformers = form => {
  const mainTransformer = !_.isEmpty(form.transformer) ?
    makeTransformer(form.transformer) : null;

  const collected = reduceFields(
    form.fields,
    (field, acc) => {
      if (field.transformer) {
        const transformer = makeTransformer(field.transformer);
        if (transformer != null) {
          return [...acc, transformer];
        } else {
          console.error('[LetForm] Wrong transformer', field.transformer);
        }
      }
      return acc;
    },
    []
  );

  return mainTransformer != null ? [mainTransformer, ...(collected || [])] : collected;
};


const makeTransformer = (str) => {
  if (_.isEmpty(str)) {
    return null;
  }
  try {
    return new Function(
      'api',
      'const { setValue, disable, enable, values, show, hide } = api;\n' +
      str +
      '\nreturn api.fields();' // leave /n or a comment can void anything
    );
  } catch(e) {
    console.error(`LetsForm] Invalid JavaScript code for rules`, e);
    console.error(`LetsForm] Transformer: `, str);
    return null;
  }
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
    level = 1,
    locale
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
              lfLocale={locale}
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
                  level: level + 1,
                  locale
                })}
                {BottomView && <BottomView key={`bottom_view_${field.name}`} field={field} target="fields" />}
              </>
            </Component>
          );
          return GroupWrapper ? <GroupWrapper key={`wrapper_${field.name}`} field={field} level={level} index={index}>{component}</GroupWrapper> : component;
        } else if (field.component === 'two-columns') {
          const component = (
            <Component
              key={field.name}
              lfComponent={field.component}
              lfFramework={framework}
              lfLocale={locale}
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
                      level: level + 1,
                      locale
                    })}
                    {BottomView && <BottomView key={`bottom_view_${field.name}`} field={field} target="leftFields" />}
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
                      level: level + 1,
                      locale
                    })}
                    {BottomView && <BottomView key={`bottom_view_${field.name}`} field={field} target="rightFields" />}
                  </>
                )
              }
            }}
            </Component>
          );
          return GroupWrapper ? <GroupWrapper key={`wrapper_${field.name}`} level={level} field={field} index={index}>{component}</GroupWrapper> : component;
        } else if (field.component === 'three-columns') {
          const component = (
            <Component
              key={`three-columns-${field.name}`}
              name={field.name}
              lfComponent={field.component}
              lfFramework={framework}
              lfLocale={locale}
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
                      level: level + 1,
                      locale
                    })}
                    {BottomView && <BottomView key={`bottom_view_${field.name}`} field={field} target="leftFields" />}
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
                      level: level + 1,
                      locale
                    })}
                    {BottomView && <BottomView key={`bottom_view_${field.name}`} field={field} target="centerFields" />}
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
                      level: level + 1,
                      locale
                    })}
                    {BottomView && <BottomView key={`bottom_view_${field.name}`} field={field} target="rightFields" />}
                  </>
                )
              }
            }}
            </Component>
          );
          return GroupWrapper ? <GroupWrapper key={`wrapper_${field.name}`} field={field} level={level} index={index}>{component}</GroupWrapper> : component;
        }


        const rules = translateValidation(
          {
            required: field.required,
            ...field.validation
          },
          locale
        );

        console.log('rule validation', rules)

        return (
          <Controller
            key={`field_${field.name}`}
            name={field.name}
            rules={rules}
            control={control}
            render={({ field: fieldInfo }) => {
              const component = <Component
                //{...fieldInfo}
                // not sure about this, not passing the ref
                name={fieldInfo.name}
                value={fieldInfo.value}
                //onChange={fieldInfo.onChange}
                onBlur={fieldInfo.onBlur}
                key={`field_${field.name}`}
                lfComponent={field.component}
                lfFramework={framework}
                lfLocale={locale}
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

              return Wrapper ? <Wrapper key={`wrapper_${field.name}`} field={field} level={level} index={index}>{component}</Wrapper> : component;
              }
            }
          />
        );
      });

    return renderedFields;
  }



  const FormGenerator = React.memo(({
    framework,
    form,
    onChange = () => {},
    onSubmit = () => {},
    onReset = () => {},
    onError = () => {},
    locale,
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
    className,

    //rules
  }) => {
    if (debug) {
      console.log(`[LetsForm] Render form (${form.name})`);
    }
    const { showErrors } = form;
    const [transformers, setTransformers] = useState(collectTransformers(form));

    const { handleSubmit, formState: { errors }, reset, control, getValues } = useForm({
      defaultValues,
      mode: form.validationMode
    });
    const [validationErrors, setValidationErrors] = useState();
    // store form fields, apply immediately transformers (collected from all fields)
    const [formFields, setFormFields] = useState(
      applyTransformers(form.fields, transformers, defaultValues)
    );

    // update internal state if form changes
    useEffect(
      () => {
        const newTransformers = collectTransformers(form);
        console.log('collected newTransformers', newTransformers)
        //        //const collectedRules = collectRules(form);
        //const newTransformer = !_.isEmpty(form.transformer) ? makeTransformer(form.transformer) : null;
        const newFormFields = applyTransformers(form.fields, newTransformers, defaultValues);
        setFormFields(newFormFields);
        setTransformers(newTransformers);
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [form] // don't put defaultValues here
    );

    const onHandleSubmit = useCallback(
      data => {
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
        console.log('changed values, transformers?', transformers)
        const newFormFields = applyTransformers(formFields, transformers, values);
        if (newFormFields !== formFields) {
          setFormFields(newFormFields);
        }
        onChange(values);
      },
      [onChange, formFields, transformers]
    );

    if (debug) {
      console.log('[LetsForm] Validation', errors)
    }

    const Form = Forms[framework];
    const Wrapper = wrapper;
    const GroupWrapper = groupWrapper;
    const BottomView = bottomView;

    return (
      <FormContext.Provider value={{
        locales: form.locales,
        locale: locale
        // ..more
      }}>
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
              showErrors,
              locale
            })}
            {children}
            {validationErrors && (showErrors === 'groupedBottom' || _.isEmpty(showErrors)) && (
              <ValidationErrors className="bottom" errors={enrichWithLabels(validationErrors, formFields)}/>
            )}
          </Form>
        </div>
      </FormContext.Provider>
    );
  }, function (prevProps, nextProps) {
    if (DEBUG_RENDER) {
      console.log(`[LetsForm] Form generator ${nextProps.form.name ? '(' + nextProps.form.name + `)` : ''} re-render: `
        + ' framework=' + (prevProps.framework === nextProps.framework)
        + ' onChange=' + (prevProps.onChange === nextProps.onChange)
        + ' wrapper=' + (prevProps.wrapper === nextProps.wrapper)
        + ' form=' + (prevProps.form === nextProps.form)
        + ' locale=' + (prevProps.locale === nextProps.locale)
      );
    }

    const isEqual = prevProps.framework === nextProps.framework
      && prevProps.onChange === nextProps.onChange
      && prevProps.wrapper === nextProps.wrapper
      && prevProps.form === nextProps.form
      && prevProps.locale === nextProps.locale;
    console.log('Is re-rendering?', !isEqual);
    return isEqual;
  });

  FormGenerator.displayName = 'FormGenerator';

  return FormGenerator;
};

export { GenerateGenerator };
