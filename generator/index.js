/* eslint-disable no-new-func */
import React, { useCallback, useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import classNames from 'classnames';
import _ from 'lodash';

import { ValidationErrors } from '../components';
import { FRAMEWORKS } from '../costants';
import { Warning  } from '../assets/icons';
import { reduceFields, applyTransformers, isI18n, i18n  } from '../helpers';
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
};



const translateValidation = (validation, locale, onJavascriptError) => {
  // if any validation object
  if (validation != null) {
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


    if (!_.isEmpty(_.trim(validation.validate))) {
      try {
        const validator = new Function(
          'value',
          'formValues',
          validation.validate
        );
        // wrap the validator function, if returns strictly false then re-use
        // the provided message, if it's a string return the string, but it will not i18n
        result.validate = (value, formValues) => {
          let v;
          try {
            v = validator(value, formValues);
          } catch(e) {
            console.error(`[LetsForm] Error executing validate function: `, e);
            const error = new Error('Error compiling validate function: ' + e.message, { cause: e });
            error.sourceCode = validation.validate;
            error.errorType = 'runtime';
            onJavascriptError(error);
          }
          if (v === true) {
            return true;
          } else if (v === false) {
            return errorMessage;
          } else if (_.isString(v)) {
            return v;
          } else if (isI18n(v)) {
            return i18n(v, locale);
          }
          return true;
        }
      } catch(e) {
        console.error(`[LetsForm] Invalid validate function: `, e);
        const error = new Error('Error compiling validate function: ' + e.message, { cause: e });
        error.sourceCode = validation.validate;
        error.errorType = 'compile';
        onJavascriptError(error);
      }
    } else {
      result.validate = undefined;
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

const collectTransformers = (form, onJavascriptError) => {
  const fieldList = reduceFields(
    form.fields,
    (field, accumulator) => {
      if (field.component !== 'group' && field.component !== 'two-columns' && field.component !== 'three-columns') {
        return [...accumulator, field.name];
      }
      return accumulator;
    },
    []
  );
  let mainTransformer;

  try {
    mainTransformer = !_.isEmpty(form.transformer) ? makeTransformer(form.transformer, fieldList) : null;
  } catch(e) {
    const error = new Error('Error compiling main transformer: ' + e.message, { cause: e });
    error.sourceCode = form.transformer;
    console.log('salvo il code', error.sourceCode)
    error.errorType = 'compile';
    onJavascriptError(error);
  }

  const collected = reduceFields(
    form.fields,
    (field, acc) => {
      if (field.transformer) {
        let transformer;
        try {
          transformer = makeTransformer(field.transformer, fieldList);
        } catch(e) {
          const error = new Error('Error compiling transformer. ' + e.message, { cause: e });
          error.sourceCode = field.transformer;
          error.errorType = 'compile';
          onJavascriptError(error);
        }
        if (transformer != null) {
          return [...acc, transformer];
        }
      }
      return acc;
    },
    []
  );

  return mainTransformer != null ? [mainTransformer, ...(collected || [])] : collected;
};


const makeTransformer = (str, fieldList) => {
  if (_.isEmpty(str)) {
    return null;
  }
  try {
    let spreadVars = '';
    if (!_.isEmpty(fieldList)) {
      spreadVars = 'const { ' + fieldList.join(', ') + ' } = values;\n';
    }
    return new Function(
      'api',
      `const { setValue, disable, enable, values, show, hide, css, element, style } = api;\n` +
      spreadVars +
      str +
      '\nreturn api.fields();' // leave /n or a comment can void anything
    );
  } catch(e) {
    console.error(`LetsForm] Invalid JavaScript code for rules`, e);
    console.error(`LetsForm] Transformer: `, str);
    throw e;
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
    locale,
    onJavascriptError
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
                  locale,
                  onJavascriptError
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
                      locale,
                      onJavascriptError
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
                      locale,
                      onJavascriptError
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
                      locale,
                      onJavascriptError
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
                      locale,
                      onJavascriptError
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
                      locale,
                      onJavascriptError
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

        // generate the validation rule, takes into account react-hook-form
        // validation format and i18n strings
        const rules = translateValidation(
          {
            required: field.required,
            ...field.validation
          },
          locale,
          onJavascriptError
        );

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
    onJavascriptError = () => {},
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
    className
  }) => {
    if (debug) {
      console.log(`[LetsForm] Render form (${form.name})`);
    }
    const { showErrors } = form;
    const [formName, setFormName] = useState(form.name ?? _.uniqueId('form_'))
    const [transformers, setTransformers] = useState(collectTransformers(form, onJavascriptError));

    const { handleSubmit, formState: { errors }, reset, control, getValues } = useForm({
      defaultValues,
      mode: form.validationMode
    });
    const [validationErrors, setValidationErrors] = useState();
    // store form fields, apply immediately transformers (collected from all fields)
    const [formFields, setFormFields] = useState(
      applyTransformers(formName, framework, form.fields, transformers, defaultValues, onJavascriptError)
    );

    // update internal state if form changes
    useEffect(
      () => {
        const newTransformers = collectTransformers(form, onJavascriptError);
        const newFormFields = applyTransformers(formName, framework, form.fields, newTransformers, defaultValues, onJavascriptError);
        setFormFields(newFormFields);
        setFormName(form.name ?? _.uniqueId('form_'));
        setTransformers(newTransformers);
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [form, framework] // don't put defaultValues here
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
        const newFormFields = applyTransformers(formName, framework, formFields, transformers, values, onJavascriptError);
        if (newFormFields !== formFields) {
          setFormFields(newFormFields);
        }
        onChange(values);
      },
      [onChange, formFields, formName, transformers, framework, onJavascriptError]
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
            <ValidationErrors
              className="top"
              locale={locale}
              errors={enrichWithLabels(validationErrors, formFields)}
            />
          )}
          <Form
            onSubmit={handleSubmit(onHandleSubmit, onHandleError)}
            name={formName}
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
              locale,
              onJavascriptError
            })}
            {children}
            {validationErrors && (showErrors === 'groupedBottom' || _.isEmpty(showErrors)) && (
              <ValidationErrors
                className="bottom"
                locale={locale}
                errors={enrichWithLabels(validationErrors, formFields)}
              />
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
