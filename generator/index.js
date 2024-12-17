/* eslint-disable no-new-func */
import React, { useCallback, useState, useEffect, Suspense, forwardRef, useImperativeHandle, useRef } from 'react';
import { useForm } from 'react-hook-form';
import classNames from 'classnames';
import _ from 'lodash';

import { ValidationErrors } from '../components';
import { reduceFields, applyTransformers, i18n } from '../helpers';
import { ProxyFetch } from './helpers/proxy-fetch';
import { useStylesheet } from '../hooks';
import { lfLog, lfError } from '../helpers/lf-log';

import FormContext from '../form-context';
import * as Connectors from '../helpers/connectors';
import { PlaintextForm } from '../components/plaintext-form';

import { mergeComponents } from './helpers/merge-components';
import { useFormValidation } from './helpers/form-validation';
import { upgradeForm } from './helpers/upgrade-fields';
import { useFormFields } from './helpers/form-fields';
import { renderFields } from './helpers/render-fields';

import './index.scss';

const DEBUG_RENDER = true;
const DEFAULT_FORM = { version: 2, fields: [] };

// TODO duplicated, remove
const mergeReRenders = (currentReRenders, newReRenders) => {
  if (newReRenders) {
    Object.keys(newReRenders)
      .forEach(key => currentReRenders[key] = currentReRenders[key] ?
        currentReRenders[key] + newReRenders[key] : newReRenders[key]);
  };
};

const GenerateGenerator = ({ Forms, Fields }) => {

  const BaseFormGeneratorWithRef = ({
    // UI framework to use, mandatory
    framework,
    form = DEFAULT_FORM, // use const, or it will refresh endlessly
    onChange = () => {},
    onSubmit = () => {},
    onSubmitSuccess = () => {},
    onSubmitError = () => {},
    onReset = () => {},
    onError = () => {},
    onEnter = () => {},
    onBlur = () => {},
    onJavascriptError = () => {},
    locale: localeProp,
    wrapper,
    groupWrapper,
    placeholderWrapper,
    bottomView,
    defaultValues = {},
    onlyFields = false,
    debug = false,
    disabled: disabledProp = false,
    readOnly = false,
    // show the form in plaintext mode
    plaintext = false,
    // hide submit and cancel buttons
    hideToolbar = false,
    // React view to show while loading chunks
    loader: Loader,
    // preload components, avoids showing loader while switching between
    // un-rendered components, for example since they're in a hidden tab
    prealoadComponents = true,
    custom,
    children,
    components,
    className,
    // hide cancel button
    hideCancel,
    labelCancel,
    // hide submit button
    labelSubmit,
    hideSubmit,
    // show demo flag
    demo = false,
    footer,
    disableButtons = false,
    disableOnSubmit = true,
    resetAfterSubmit = true,
    context: formContext,
    // validation errors, supplied externally
    errors,
    ...rest
  }, ref) => {
    const { showErrors, connectors } = form;
    const [preloading, setPreloading] = useState(prealoadComponents);
    const [stateDisabled, setDisabled] = useState(false);
    // force re-render of the form
    const [version, setVersion] = useState(1);
    // keep track of components to be re-rendered, update it without re-render the component
    const rerenders = useRef({});
    const locale = !localeProp || localeProp === 'auto' ? navigator.language : localeProp;

    const { handleSubmit, formState: reset, control, getValues, setValue, register } = useForm({
      defaultValues,
      mode: form.validationMode
    });
    useImperativeHandle(ref, () => ({
      validate: async () => validate(getValues())
    }));

    const MergedComponents = mergeComponents(Fields, components);

    const {
      formFields,
      transformers,
      setFormFields,
      formName,
      currentFormContext
    } = useFormFields({
      components: MergedComponents,
      framework,
      form,
      children,
      onJavascriptError,
      defaultValues,
      formContext,
      locale,
      // TODO refactor this
      rerenders,
      setValue
    });
    useStylesheet(formName, form.css);
    const disabled = stateDisabled || disabledProp;


    const { validate, validationErrors, setValidationErrors, isValid, clearValidation } = useFormValidation({
      onError,
      fields: formFields,
      locale,
      onJavascriptError
    });

    if (!framework) {
      lfError('missing "framework" prop');
      return;
    };

    // preload components of the form
    useEffect(
      () => {
        if (prealoadComponents) {
          const components = _.uniq(reduceFields(
            //actualFields,
            formFields,
            (field, acc) => [...acc, field.component],
            []
          ));
          lfLog('Preloading components: ' + components.join(', '));

          let loaders = components
            .map(component => {
              if (MergedComponents[component]
                && MergedComponents[component][framework]
                && _.isFunction(MergedComponents[component][framework].preload)
              ) {
                return MergedComponents[component][framework].preload();
              };
            })
            .filter(Boolean);
          // if preloader exist, also add form
          if (_.isFunction(Forms[framework].preload)) {
            loaders.push(Forms[framework].preload());
          }
          // when everything is loaded (including the form)
          Promise
            .all(loaders)
            .then(() => setPreloading(false))
            .catch(e => {
              lfError('loading component', e);
              throw e;
            });
        }
      },
      []
    );

    const onHandleSubmit = useCallback(
      async data => {
        const validationResult = await validate(data);
        // stop submit if invalid
        if (validationResult) {
          return;
        }
        // call connectors if any
        if (Array.isArray(connectors) && connectors.length !== 0) {
          // call onSubmit immediately
          onSubmit(data);
          // disable if needed
          if (disableOnSubmit) {
            setDisabled(true);
          }
          // loop over connectors
          let idx;
          const responses = [];
          for(idx = 0; idx < connectors.length; idx++) {
            const connector = connectors[idx];
            const proxyFetch = ProxyFetch(connector.options); // wrap fetch
            try {
              const response = await Connectors[connector.name]({
                  data,
                  options: connector.options,
                  fetch: proxyFetch,
                  fields: reduceFields(
                    formFields,
                    (field, acc) => ({ ...acc, [field.name]: field.component }),
                    {}
                  )
              });
              // if error code, stop chain of connectors and don't reset the form, but re-enable it
              if (response.status >= 400) {
                if (disableOnSubmit) {
                  setDisabled(false);
                }
                onSubmitError(response);
                return;
              }
              responses.push(response);
            } catch(e) {
              // if failed call, return the erro, stop the chain and re-enable the form
              if (disableOnSubmit) {
                setDisabled(false);
              }
              onSubmitError(e);
              return;
            }
          }
          // re-enable and reset if needed
          if (disableOnSubmit) {
            setDisabled(false);
          }
          if (resetAfterSubmit) {
            reset(defaultValues);
            setVersion(version => version + 1);
          }
          // finally the callback
          onSubmitSuccess(responses.length === 1 ? responses[0] : responses);
        } else {
          setValidationErrors(null);
          onSubmit(data);
        }
      },
      [onSubmit, onSubmitSuccess, formFields]
    );

    const handleReset = useCallback(
      () => {
        setValidationErrors(null);
        reset(defaultValues);
        // not proud of this
        setVersion(version => version + 1);
        onReset();
      },
      [defaultValues, reset, onReset]
    );

    const handleBlur = useCallback(
      async () => {
        if (form.validationMode === 'onBlur' || form.validationMode === 'all') {
          const validationErrors = await validate(getValues());
          onError(validationErrors);
        }
      },
      [onBlur]
    );

    const handleChange = useCallback(
      async (values, fieldName) => {

        // exit if null
        if (!transformers) {
          return;
        }

        const transformersToRun = !_.isEmpty(transformers.onRender) ? [transformers.onRender] : [];

        // if the changed field has a transformer
        if (transformers.onChange != null && !_.isEmpty(transformers.onChange[fieldName])) {
          transformersToRun.push(transformers.onChange[fieldName]);
        }

        // reset the validation error for that field
        if (!_.isEmpty(fieldName)) {
          clearValidation(fieldName);
        }

        // execute main transformer
        let newFields = formFields;
        for(let idx = 0; idx < transformersToRun.length; idx++) {
          // execute the async generator transformer
          for await(const transformResult of applyTransformers(
            formName,
            framework,
            newFields,
            transformersToRun[idx],
            values,
            onJavascriptError,
            currentFormContext
          )) {
            const { fields: newFormFields, rerenders: newReRenders, changes } = transformResult;
            // merge re-renders request to the current ones, in a useRef, must per persisted like a state
            // but doesnt' have to trigger a new render
            mergeReRenders(rerenders.current, newReRenders);
            // if different instances, then fields descriptions are changed, set it, this will cause a
            // form re-render
            if (newFormFields !== newFields) {
              newFields = newFormFields
              setFormFields(newFormFields);
            }
            // if there are form value changes, apply it, this will cause the specific field to be refreshed
            // and un-mounted / re-mounted if the component is statefull and needs to be reset completely
            // at this point the re-renders request are already collected
            if (changes) {
              Object.keys(changes).forEach(key => setValue(key, changes[key]));
            }
          }
        }

        // if validation on change, then trigger it
        if (form.validationMode === 'onChange' || form.validationMode === 'all') {
          const validationErrors = await validate(getValues());
          onError(validationErrors);
        }

        onChange(values);
      },
      [onChange, formFields, formName, transformers, framework, onJavascriptError]
    );

    const handleEnter = useCallback(
      () => {
        handleSubmit(onHandleSubmit)();
        onEnter();
      },
      [handleSubmit, onEnter, onHandleSubmit]
    );

    if (debug) {
      console.log('[LetsForm] Validation', errors)
    }

    const Form = Forms[framework];
    const Wrapper = wrapper;
    const GroupWrapper = groupWrapper;
    const BottomView = bottomView;
    const PlaceholderWrapper = placeholderWrapper;

    if (preloading) {
      return Loader ? <Loader /> : <div>Loading...</div>;
    }

    if (plaintext) {
      return (
        <PlaintextForm
          fields={formFields}
          locale={locale}
          framework={framework}
          currentValues={getValues()}
        />
      );
    }
    // get errors from state or from props (precedence)
    let formErrors = !_.isEmpty(errors) ? errors : validationErrors;

    if (debug) {
      console.log(`[LetsForm] Render form (${form.name})`);
    }

    return (
      <FormContext.Provider value={currentFormContext}>
        <div
          className={classNames('lf-lets-form', { 'lf-lets-form-edit-mode': demo }, className)}
        >
          {formErrors && showErrors === 'groupedTop' && (
            <ValidationErrors
              className="top"
              locale={locale}
              errors={formErrors}
            />
          )}
          <Suspense fallback={Loader ? <Loader /> : <div>Loading...</div>}>
            <Form
              key={`lf_${version}`}
              onSubmit={handleSubmit(onHandleSubmit)}
              onBlur={handleBlur}
              name={formName}
              defaultValues={defaultValues}
              onlyFields={onlyFields}
              hideToolbar={hideToolbar}
              onReset={handleReset}
              disabled={disabled || disableButtons}
              disabledSubmit={form.disableSubmitOnError && !isValid}
              readOnly={readOnly}
              plaintext={plaintext}
              locale={locale}
              {..._.omit(form, 'id', 'fields', 'version')}
              labelSubmit={i18n(form.labelSubmit ?? labelSubmit, locale) || 'Submit'}
              labelCancel={i18n(form.labelCancel ?? labelCancel, locale) || 'Reset'}
              hideCancel={hideCancel}
              hideSubmit={hideSubmit}
              custom={custom}
              {...rest}
            >
              {renderFields({
                Wrapper,
                GroupWrapper,
                PlaceholderWrapper,
                BottomView,
                onChange: handleChange,
                onEnter: handleEnter,
                fields: formFields, // take from state
                control,
                framework,
                getValues,
                setValue,
                register,
                debug,
                errors: formErrors,
                disabled: disabled || form.disabled,
                readOnly: readOnly || form.readOnly,
                plaintext: plaintext || form.plaintext,
                showErrors,
                locale,
                onJavascriptError,
                Components: MergedComponents,
                rerenders: rerenders.current,
                prependView: PlaceholderWrapper && (
                  <PlaceholderWrapper
                    key={`wrapper_top_form_field`}
                    nextField={formFields && formFields.length ? formFields[0] : null}
                  />
                )
              })}
              {footer}
              {formErrors && (showErrors === 'groupedBottom' || _.isEmpty(showErrors)) && (
                <ValidationErrors
                  className="bottom"
                  locale={locale}
                  errors={formErrors}
                />
              )}
            </Form>
          </Suspense>
          {demo && (
            <div className="label-test-buttons">Test buttons</div>
          )}
        </div>
      </FormContext.Provider>
    );
  };

  const BaseFormGenerator = forwardRef(BaseFormGeneratorWithRef);

  const FormGenerator = React.memo(BaseFormGenerator, function (prevProps, nextProps) {
    if (DEBUG_RENDER) {
      console.log(`[LetsForm] Form generator ${nextProps.form?.name ? '(' + nextProps.form?.name + `)` : ''} re-render: `
        + ' framework=' + (prevProps.framework === nextProps.framework)
        + ' onChange=' + (prevProps.onChange === nextProps.onChange)
        + ' wrapper=' + (prevProps.wrapper === nextProps.wrapper)
        + ' form=' + (prevProps.form === nextProps.form)
        + ' locale=' + (prevProps.locale === nextProps.locale)
        + ' plaintext=' + (prevProps.plaintext === nextProps.plaintext)
        + ' disabled=' + (prevProps.disabled === nextProps.disabled)
        + ' children=' + (prevProps.children === nextProps.children)
        + ' custom=' + (prevProps.custom === nextProps.custom)
        + ' context=' + (prevProps.context === nextProps.context)
      );
    }

    const isEqual = prevProps.framework === nextProps.framework
      && prevProps.onChange === nextProps.onChange
      && prevProps.wrapper === nextProps.wrapper
      && prevProps.form === nextProps.form
      && prevProps.locale === nextProps.locale
      && prevProps.plaintext === nextProps.plaintext
      && prevProps.disabled === nextProps.disabled
      && prevProps.children === nextProps.children
      && prevProps.custom === nextProps.custom
      && prevProps.context === nextProps.context;
    console.log(`Is re-rendering? ${!isEqual}`);
    return isEqual;
  });

  FormGenerator.displayName = 'LetsForm';
  return FormGenerator;
};

export { GenerateGenerator };
export * from './helpers/dsl';
export { upgradeForm };
