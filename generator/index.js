/* eslint-disable no-new-func */
import React, { useCallback, useState, useEffect, Suspense, forwardRef, useImperativeHandle, useRef } from 'react';
import { useForm, Controller } from 'react-hook-form';
import classNames from 'classnames';
import _ from 'lodash';

import { ValidationErrors } from '../components';
import { FRAMEWORKS } from '../costants';
import { reduceFields, applyTransformers, i18n } from '../helpers';
import { ProxyFetch } from './helpers/proxy-fetch';
import { useStylesheet } from '../hooks';
import { lfLog, lfError } from '../helpers/lf-log';

import FormContext from '../form-context';
import * as Connectors from '../helpers/connectors';
import { PlaintextForm } from '../components/plaintext-form';

import { enrichWithLabels } from './helpers/enrich-with-labels';
import { translateValidation } from './helpers/translate-validations';
import { collectTransformers } from './helpers/collect-transformers';
import { errorToString } from './helpers/error-to-string';
import { mergeComponents } from './helpers/merge-components';
import { MissingComponent } from './helpers/missing-component';
import { traverseChildren } from './helpers/dsl';
import { useFormValidation } from './helpers/form-validation';
import { upgradeFields, upgradeForm } from './helpers/upgrade-fields';

import './index.scss';

const DEBUG_RENDER = true;
const DEFAULT_FORM = { version: 2, fields: [] };

const mergeReRenders = (currentReRenders, newReRenders) => {
  if (newReRenders) {
    Object.keys(newReRenders)
      .forEach(key => currentReRenders[key] = currentReRenders[key] ?
        currentReRenders[key] + newReRenders[key] : newReRenders[key]);
  };
};

const GenerateGenerator = ({ Forms, Fields }) => {

  const renderFields = ({
    fields,
    control,
    framework,
    onChange,
    onEnter,
    getValues,
    setValue,
    register,
    Wrapper,
    GroupWrapper,
    BottomView,
    PlaceholderWrapper,
    debug,
    disabled,
    readOnly,
    plaintext,
    errors,
    showErrors,
    level = 1,
    locale,
    onJavascriptError,
    Components,
    prependView,
    rerenders
  }) => {


    const renderedFields = (fields || [])
      .filter(field => Wrapper || field.component !== 'hidden') // skip hidden type field (not in design mode)
      .filter(field => Wrapper || field.hidden !== true) // skip fields with "hidden" attribute (not in design mode)
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
          'id', 'name', 'label', /*'hint',*/ 'disabled', 'readOnly', 'plaintext', /*'size', 'placeholder',*/ 'component',
          ...FRAMEWORKS
        ]);

        const renderFieldsParams = {
          Wrapper,
          GroupWrapper,
          PlaceholderWrapper,
          BottomView,
          onChange,
          onEnter,
          control,
          framework,
          getValues,
          setValue,
          readOnly,
          plaintext,
          errors,
          showErrors,
          level: level + 1,
          locale,
          onJavascriptError,
          Components,
          rerenders
        };

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
                  ...renderFieldsParams,
                  fields: field.fields,
                  disabled: field.disabled ? true : disabled, // pass disabled status to inner components
                  prependView: PlaceholderWrapper && (
                    <PlaceholderWrapper
                      key={`wrapper_top_field`}
                      parentField={field}
                      parentFieldTarget="fields"
                      nextField={field.fields && field.fields.length ? field.fields[0] : null}
                    />
                  )
                })}
                {BottomView && <BottomView context="group" key={`bottom_view_${field.name}`} field={field} target="fields" />}
              </>
            </Component>
          );
          return GroupWrapper ?
            <GroupWrapper
              key={`wrapper_${field.name}`}
              field={field}
              level={level}
              index={index}
              className="group"
            >{component}</GroupWrapper> : component;
        } else if (field.component === 'columns') {
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
              {column => {
                return (
                <>
                  {renderFields({
                    ...renderFieldsParams,
                    fields: field.fields && _.isArray(field.fields[column]) ? field.fields[column] : [],
                    disabled: field.disabled ? true : disabled, // pass disabled status to inner components
                    prependView: PlaceholderWrapper && (
                      <PlaceholderWrapper
                        key={`wrapper_top_field`}
                        parentField={field}
                        parentFieldTarget="fields"
                        parentFieldSubTarget={column}
                        nextField={field.fields && field.fields.length ? field.fields[0] : null}
                      />
                    )
                  })}
                  {BottomView && (
                    <BottomView
                      context="columns"
                      key={`bottom_view_${field.name}`}
                      field={field}
                      target="fields"
                      subtarget={column}
                    />
                  )}
                </>
              );}}
            </Component>
          );
          return GroupWrapper ?
            <GroupWrapper
              key={`wrapper_${field.name}`}
              field={field}
              level={level}
              index={index}
              className="columns"
            >{component}</GroupWrapper> : component;
        } else if (field.component === 'tabs') {
          return (
            <Controller
              key={`field_${field.name}`}
              name={field.name}
              control={control}
              render={({ field: fieldInfo }) => {
                const values = getValues();
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
                    value={values[field.name] ?? undefined}
                    onChange={(value, _opts) => {
                      setValue(field.name, value);
                      onChange({ ...getValues(), [field.name]: value }, field.name);
                    }}
                    {...additionalFields}
                    {...field[framework]}
                  >
                    {tab => {
                      return (
                      <>
                        {renderFields({
                          ...renderFieldsParams,
                          fields: field.fields && _.isArray(field.fields[tab]) ? field.fields[tab] : [],
                          disabled: field.disabled ? true : disabled, // pass disabled status to inner components
                          prependView: PlaceholderWrapper && (
                            <PlaceholderWrapper
                              key={`wrapper_top_field`}
                              parentField={field}
                              parentFieldTarget="fields"
                              parentFieldSubTarget={tab}
                              nextField={field.fields && field.fields.length ? field.fields[0] : null}
                            />
                          )
                        })}
                        {BottomView && (
                          <BottomView
                            context="tabs"
                            key={`bottom_view_${field.name}`}
                            field={field}
                            target="fields"
                            subtarget={tab}
                          />
                        )}
                      </>
                    );}}
                  </Component>
                );
                return GroupWrapper ?
                  <GroupWrapper
                    key={`wrapper_${field.name}`}
                    field={field}
                    level={level}
                    index={index}
                    className="tabs"
                  >{component}</GroupWrapper> : component;
              }}
            />
          );
        } else if (field.component === 'steps') {
          return (
            <Controller
              key={`field_${field.name}`}
              name={field.name}
              control={control}
              render={({ field: fieldInfo }) => {
                const values = getValues();
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
                    value={values[field.name] ?? undefined}
                    onChange={(value, _opts) => {
                      setValue(field.name, value);
                      onChange({ ...getValues(), [field.name]: value }, field.name);
                    }}
                    {...additionalFields}
                    {...field[framework]}
                  >
                    {step => {
                      return (
                      <>
                        {renderFields({
                          ...renderFieldsParams,
                          fields: field.fields && _.isArray(field.fields[step]) ? field.fields[step] : [],
                          disabled: field.disabled ? true : disabled, // pass disabled status to inner components
                          prependView: PlaceholderWrapper && (
                            <PlaceholderWrapper
                              key={`wrapper_top_field`}
                              parentField={field}
                              parentFieldTarget="fields"
                              parentFieldSubTarget={step}
                              nextField={field.fields && field.fields.length ? field.fields[0] : null}
                            />
                          )
                        })}
                        {BottomView && (
                          <BottomView
                            context="tabs"
                            key={`bottom_view_${field.name}`}
                            field={field}
                            target="fields"
                            subtarget={step}
                          />
                        )}
                      </>
                    );}}
                  </Component>
                );
                return GroupWrapper ?
                  <GroupWrapper
                    key={`wrapper_${field.name}`}
                    field={field}
                    level={level}
                    index={index}
                    className="tabs"
                  >{component}</GroupWrapper> : component;
              }}
            />
          );

        } else if (field.component === 'array' && GroupWrapper) {
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
                  ...renderFieldsParams,
                  fields: field.fields,
                  disabled: field.disabled ? true : disabled, // pass disabled status to inner components
                  prependView: PlaceholderWrapper && (
                    <PlaceholderWrapper
                      key={`wrapper_top_field`}
                      parentField={field}
                      parentFieldTarget="fields"
                      nextField={field.fields && field.fields.length ? field.fields[0] : null}
                    />
                  )
                })}
                {BottomView && <BottomView context="array" key={`bottom_view_${field.name}`} field={field} target="fields" />}
              </>
            </Component>
          );

          return (
            <GroupWrapper
              key={`wrapper_${field.name}`}
              field={field}
              level={level}
              index={index}
              className="array"
            >{component}</GroupWrapper>);
        }

        // generate the validation rule, takes into account react-hook-form
        // validation format and i18n strings
        /*const rules = translateValidation(
          {
            required: field.required,
            ...field.validation
          },
          locale,
          onJavascriptError
        );*/

        console.log('+++++++++++ actual errors', errors)

        return (
          <Controller
            key={`field_${field.name}`}
            name={field.name}
            //rules={rules}
            control={control}
            render={({ field: fieldInfo }) => {
              const component = <Component
                // not sure about this, not passing the ref
                name={fieldInfo.name}
                value={fieldInfo.value}
                onBlur={fieldInfo.onBlur}
                key={`field_${field.name}${rerenders[field.name] ? '_' + rerenders[field.name] : ''}`}
                lfComponent={field.component}
                lfFramework={framework}
                lfLocale={locale}
                lfOnEnter={onEnter}
                label={field.label}
                disabled={disabled || field.disabled}
                readOnly={readOnly || field.readOnly}
                plaintext={plaintext}
                required={field.required}
                error={errors && errors[field.name] && errors[field.name].errorMessage ?
                  (showErrors === 'inline' ? errors[field.name].errorMessage : true)
                  : undefined
                }
                {...additionalFields}
                {...field[framework]}
                onChange={value => {
                  setValue(field.name, value);
                  onChange({ ...getValues(), [field.name]: value }, field.name);
                }}
              />;

              return Wrapper ? <Wrapper key={`wrapper_${field.name}`} field={field} level={level} index={index}>{component}</Wrapper> : component;
              }
            }
          />
        );
      });

    return prependView ? [prependView, ...renderedFields] : renderedFields;
  }

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
    ...rest
  }, ref) => {
    const { showErrors, connectors } = form;
    const [formName, setFormName] = useState(form.name ?? _.uniqueId('form_'));
    useStylesheet(formName, form.css)
    const [transformers, setTransformers] = useState(null);
    const [preloading, setPreloading] = useState(prealoadComponents);
    const [stateDisabled, setDisabled] = useState(false);
    // force re-render of the form
    const [version, setVersion] = useState(1);
    // keep track of components to be re-rendered, update it without re-render the component
    const rerenders = useRef({});
    const locale = !localeProp || localeProp === 'auto' ? navigator.language : localeProp;

    const mutableState = useRef({
      currentContext: {
        locales: form.locales,
        locale: locale,
        ...formContext
      }
    });

    const { handleSubmit, formState: { errors, isValid }, reset, control, getValues, setValue, trigger, register } = useForm({
      defaultValues,
      mode: form.validationMode
    });
    useImperativeHandle(ref, () => ({
      validate: async () => trigger()
    }));
    // const [validationErrors, setValidationErrors] = useState();




    // store form fields, apply immediately transformers (collected from all fields)
    const [formFields, setFormFields] = useState(null);
    const MergedComponents = mergeComponents(Fields, components);

    const disabled = stateDisabled || disabledProp;
    // it's the combination of the fields from the form schema and those specified
    // with the DSL, from now on every func should reference this (not form.fields)
    // also upgrade fields if older version of the form
    const actualFields = upgradeFields(
      [
        ...(form.fields ?? []),
        ...traverseChildren(children, { components: MergedComponents, framework })
      ],
      form.version
    );

    const { validate, onHandleError, validationErrors, setValidationErrors } = useFormValidation({
      onError,
      fields: actualFields,
      locale
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
            actualFields,
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

    // update internal state if form changes
    useEffect(
      () => {
        const f = async () => {
          // update the mutable state
          mutableState.current.currentContext = {
            ...mutableState.current.currentContext,
            ...formContext
          };

          const newTransformers = collectTransformers(actualFields, form.transformer || form.script, onJavascriptError);

          // initial fields values
          let newFields = actualFields;

          // collect all transformers to be executed
          const transformersToRun = Object.keys(newTransformers.onChange || {})
            .filter(fieldName => !_.isEmpty(newTransformers.onChange[fieldName]))
            .reduce(
              (acc, fieldName) => [...acc, newTransformers.onChange[fieldName]],
              !_.isEmpty(newTransformers.onRender) ? [newTransformers.onRender] : []
            );

          // execute all onChange transformers at the bootstrap of the form
          for(let idx = 0; idx < transformersToRun.length; idx++) {
            for await(const transformResult of applyTransformers(
              formName,
              framework,
              newFields,
              transformersToRun[idx],
              defaultValues,
              onJavascriptError,
              mutableState.current.currentContext
            )) {
              const { fields: newFormFields, rerenders: newReRenders, changes } = transformResult;
              mergeReRenders(rerenders.current, newReRenders);
              if (newFormFields !== newFields) {
                newFields = newFormFields
                setFormFields(newFormFields);
              }
              if (changes) {
                Object.keys(changes).forEach(key => setValue(key, changes[key]));
              }
            }
          }

          setFormName(form.name ?? _.uniqueId('form_'));
          setTransformers(newTransformers);

          // if transformed fields different than current one, then save
          if (newFields !== formFields) {
            setFormFields(newFields);
          }
        }
        f();
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [form, framework, children, formContext] // don't put defaultValues here
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

    /*const onHandleError = useCallback(
      data => {

        console.log('+++++  validation errors', data)


        setValidationErrors(data);
        onError(data);
      },
      [onError]
    );*/



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
            mutableState.current.currentContext
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

        onChange(values);
      },
      [onChange, formFields, formName, transformers, framework, onJavascriptError]
    );

    const handleEnter = useCallback(
      () => {
        handleSubmit(onHandleSubmit, onHandleError)();
        onEnter();
      },
      [handleSubmit, onEnter, onHandleError, onHandleSubmit]
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
          fields={actualFields}
          locale={locale}
          framework={framework}
          currentValues={getValues()}
        />
      );
    }
    // get errors from state or from hook, perhaps state is not needed
    let formErrors = !_.isEmpty(errors) ? errors : validationErrors;

    if (debug) {
      console.log(`[LetsForm] Render form (${form.name})`);
    }

    return (
      <FormContext.Provider value={mutableState.current.currentContext}>
        <div
          className={classNames('lf-lets-form', { 'lf-lets-form-edit-mode': demo }, className)}
        >
          {formErrors && showErrors === 'groupedTop' && (
            <ValidationErrors
              className="top"
              locale={locale}
              errors={enrichWithLabels(formErrors, formFields)}
            />
          )}
          <Suspense fallback={Loader ? <Loader /> : <div>Loading...</div>}>
            <Form
              key={`lf_${version}`}
              onSubmit={handleSubmit(onHandleSubmit, onHandleError)}
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
                errors: validationErrors,
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
                  errors={enrichWithLabels(formErrors, formFields)}
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
