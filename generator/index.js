/* eslint-disable no-new-func */
import React, { useCallback, useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import classNames from 'classnames';
import _ from 'lodash';

import { ValidationErrors } from '../components';
import { FRAMEWORKS } from '../costants';
import { Warning  } from '../assets/icons';
import { reduceFields, applyTransformers, isI18n, i18n } from '../helpers';
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
      errorMessage = i18n(validation.message, locale) ?? 'Field is required';
    } else {
      errorMessage = 'Field is required';
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
        The component <span className="tag-component">{lfComponent}</span> (<em>"{_.isString(label) ? label : 'unknown'}"</em>)
        is not available for this framework (<b>{lfFramework}</b>)
      </div>
    </div>
  );
}

const collectTransformers = (form, onJavascriptError) => {
  let transformers = {};

  // collect all fieldlist needed to compile the transformer
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

  // compile transformer of the form
  try {
    if (!_.isEmpty(form.transformer)) {
      transformers.onRender = [makeTransformer(form.transformer, fieldList)];
    }
  } catch(e) {
    const error = new Error('Error compiling main transformer: ' + e.message, { cause: e });
    error.sourceCode = form.transformer;
    error.errorType = 'compile';
    onJavascriptError(error);
  }

  // collect transformers for each field and put it onChange
  transformers = reduceFields(
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
        // push into the onChange list of txs
        if (transformer != null) {
          if (acc.onChange == null) {
            acc.onChange = {};
          }
          acc.onChange[field.name] = [transformer];
        }
      }
      return acc;
    },
    transformers
  );

  return transformers;
};

const AsyncGeneratorFunction = async function* () {}.constructor;

//const yieldReplacer = /((setValue|hide|show|enable|disable|show|hide|arraySetValue)\(.*?\)[;]{0,1})/;

const makeTransformer = (str, fieldList) => {
  if (_.isEmpty(str)) {
    return null;
  }

  const yieldedStr = str.replaceAll(
    /((setValue|hide|show|enable|disable|show|hide|arraySetValue)\(.*?\)[;]{0,1})/g,
    '$& yield Promise.resolve(api.fields());\n'
  );

  try {
    let spreadVars = '';
    if (!_.isEmpty(fieldList)) {
      spreadVars = 'const { ' + fieldList.join(', ') + ' } = values;\n';
    }
    const tx = new AsyncGeneratorFunction(
      'api',
      `const { setValue, enable, disable, values, show, hide, css, element, style, arraySetValue } = api;\n` +
      spreadVars +
      yieldedStr +
      '\nyield Promise.resolve(api.fields());' // leave /n or a comment can void anything
    );
    return tx;
  } catch(e) {
    console.error(`LetsForm] Invalid JavaScript code for rules`, e);
    console.error(`LetsForm] Transformer: `, str);
    throw e;
  }
};

/**
 * Merge additional components to the main library
 * @param {*} main
 * @param {*} additional
 * @returns
 */
const mergeComponents = (main, additional) => {
  // if not empty, then merge, overwriting is ok
  if (!_.isEmpty(additional) && Object.keys(additional).length !== 0) {
    Object.keys(additional).forEach(componentName => {
      if (main[componentName] == null) {
        main[componentName] = additional[componentName];
      } else {
        main[componentName] = {
          ...main[componentName],
          ...additional[componentName]
        };
      }
    });
  }

  return main;
};


const GenerateGenerator = ({ Forms, Fields }) => {

  const renderFields = ({
    fields,
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
    onJavascriptError,
    Components
  }) => {
    const renderedFields = (fields || [])
      .filter(field => Wrapper || field.hidden !== true)
      .map((field, index) => {
        let Component;
        if (Components[field.component] && Components[field.component][framework]) {
          Component = Components[field.component][framework];
        } else if (Components[field.component] && Components[field.component]['*']) {
          Component = Components[field.component]['*'];
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
                  onJavascriptError,
                  Components
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
                      onJavascriptError,
                      Components
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
                      onJavascriptError,
                      Components
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
                      onJavascriptError,
                      Components
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
                      onJavascriptError,
                      Components
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
                      onJavascriptError,
                      Components
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
                // not sure about this, not passing the ref
                name={fieldInfo.name}
                value={fieldInfo.value}
                onBlur={fieldInfo.onBlur}
                key={`field_${field.name}`}
                lfComponent={field.component}
                lfFramework={framework}
                lfLocale={locale}
                label={field.label}
                hint={field.hint}
                disabled={disabled || field.disabled}
                readOnly={readOnly || field.readOnly}
                plaintext={plaintext}
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
                  onChange({ ...getValues(), [field.name]: value }, field.name);
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
    components,
    className
  }) => {
    if (debug) {
      console.log(`[LetsForm] Render form (${form.name})`);
    }
    const { showErrors } = form;
    const [formName, setFormName] = useState(form.name ?? _.uniqueId('form_'))
    const [transformers, setTransformers] = useState(null);

    const { handleSubmit, formState: { errors }, reset, control, getValues } = useForm({
      defaultValues,
      mode: form.validationMode
    });
    const [validationErrors, setValidationErrors] = useState();
    // store form fields, apply immediately transformers (collected from all fields)
    const [formFields, setFormFields] = useState(null);

    // update internal state if form changes
    useEffect(
      () => {
        const f = async () => {
          const newTransformers = collectTransformers(form, onJavascriptError);

          // initial fields values
          let newFields = form.fields;
          // apply onRender transformers
          if (!_.isEmpty(newTransformers.onRender)) {
            for await(const newFormFields of applyTransformers(
              formName,
              framework,
              newFields,
              newTransformers.onRender,
              defaultValues,
              onJavascriptError
            )) {
              newFields = newFormFields;
              setFormFields(newFormFields);
            }
          }
          // collect list of fields with an onChange transformer
          const onChangeFields = Object.keys(newTransformers.onChange || {})
            .filter(fieldName => !_.isEmpty(newTransformers.onChange[fieldName]))

          // execute all onChange transformers at the bootstrap of the form
          for(let idx = 0; idx < onChangeFields.length; idx++) {
            for await(const newFormFields of applyTransformers(
              formName,
              framework,
              newFields,
              newTransformers.onChange[onChangeFields[idx]],
              defaultValues,
              onJavascriptError
            )) {
              newFields = newFormFields;
              setFormFields(newFormFields);
            }
          }

          // if transformed fields different than current one, then save
          if (newFields !== formFields) {
            setFormFields(newFields);
          }

          setFormName(form.name ?? _.uniqueId('form_'));
          setTransformers(newTransformers);
        }
        f();
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
      async (values, fieldName) => {

        // if the changed field has a transformer
        if (transformers.onChange != null && !_.isEmpty(transformers.onChange[fieldName])) {
          // execute the async generator transformer
          for await(const f of applyTransformers(
            formName,
            framework,
            formFields,
            transformers.onChange[fieldName],
            values,
            onJavascriptError
          )) {
            if (f !== formFields) {
              setFormFields(f);
            }
          }
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
            locale={locale}
            {..._.omit(form, 'id', 'fields', 'version')}
            labelSubmit={i18n(form.labelSubmit, locale) || 'Submit'}
            labelCancel={i18n(form.labelCancel, locale) || 'Cancel'}
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
              onJavascriptError,
              Components: mergeComponents(Fields, components)
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
