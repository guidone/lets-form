/* eslint-disable no-new-func */
import React, { useCallback, useState, useEffect, Suspense } from 'react';
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

import './index.scss';

const DEBUG_RENDER = true;
const DEFAULT_FORM = { version: 1, fields: [] };


const GenerateGenerator = ({ Forms, Fields }) => {

  const renderFields = ({
    fields,
    control,
    framework,
    onChange,
    onEnter,
    getValues,
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
    prependView
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
                  PlaceholderWrapper,
                  BottomView,
                  onChange,
                  onEnter,
                  fields: field.fields,
                  control,
                  framework,
                  getValues,
                  disabled: field.disabled ? true : disabled, // pass disabled status to inner components
                  readOnly,
                  plaintext,
                  errors,
                  showErrors,
                  level: level + 1,
                  locale,
                  onJavascriptError,
                  Components,
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
                    onChange={(value, opts) => {
                      // TODO use callback
                      fieldInfo.onChange(value);
                      onChange({ ...getValues(), [field.name]: value }, field.name);
                    }}
                    {...additionalFields}
                    {...field[framework]}
                  >
                    {tab => {
                      return (
                      <>
                        {renderFields({
                          Wrapper,
                          GroupWrapper,
                          PlaceholderWrapper,
                          BottomView,
                          onChange,
                          onEnter,
                          fields: field.fields && _.isArray(field.fields[tab]) ? field.fields[tab] : [],
                          control,
                          framework,
                          getValues,
                          disabled: field.disabled ? true : disabled, // pass disabled status to inner components
                          readOnly,
                          plaintext,
                          errors,
                          showErrors,
                          level: level + 1,
                          locale,
                          onJavascriptError,
                          Components,
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
                    onChange={(value, opts) => {
                      // TODO use callback
                      fieldInfo.onChange(value);
                      onChange({ ...getValues(), [field.name]: value }, field.name);
                    }}
                    {...additionalFields}
                    {...field[framework]}
                  >
                    {step => {
                      return (
                      <>
                        {renderFields({
                          Wrapper,
                          GroupWrapper,
                          PlaceholderWrapper,
                          BottomView,
                          onChange,
                          onEnter,
                          fields: field.fields && _.isArray(field.fields[step]) ? field.fields[step] : [],
                          control,
                          framework,
                          getValues,
                          disabled: field.disabled ? true : disabled, // pass disabled status to inner components
                          readOnly,
                          plaintext,
                          errors,
                          showErrors,
                          level: level + 1,
                          locale,
                          onJavascriptError,
                          Components,
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
                  Wrapper,
                  GroupWrapper,
                  PlaceholderWrapper,
                  BottomView,
                  onChange,
                  onEnter,
                  fields: field.fields,
                  control,
                  framework,
                  getValues,
                  disabled: field.disabled ? true : disabled, // pass disabled status to inner components
                  readOnly,
                  plaintext,
                  errors,
                  showErrors,
                  level: level + 1,
                  locale,
                  onJavascriptError,
                  Components,
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
                      PlaceholderWrapper,
                      BottomView,
                      onChange,
                      onEnter,
                      fields: field.leftFields,
                      control,
                      framework,
                      getValues,
                      disabled: field.disabled ? true : disabled, // pass disabled status to inner components
                      readOnly,
                      plaintext,
                      errors,
                      showErrors,
                      level: level + 1,
                      locale,
                      onJavascriptError,
                      Components,
                      prependView: PlaceholderWrapper && (
                        <PlaceholderWrapper
                          key={`wrapper_top_field`}
                          parentField={field}
                          parentFieldTarget="leftFields"
                          nextField={field.leftFields && field.leftFields.length ? field.leftFields[0] : null}
                        />
                      )
                    })}
                    {BottomView && <BottomView context="two-columns" key={`bottom_view_${field.name}`} field={field} target="leftFields" />}
                  </>
                )
              } else if (column === 'right') {
                return (
                  <>
                    {renderFields({
                      Wrapper,
                      GroupWrapper,
                      PlaceholderWrapper,
                      BottomView,
                      onChange,
                      onEnter,
                      fields: field.rightFields,
                      control,
                      framework,
                      getValues,
                      disabled: field.disabled ? true : disabled, // pass disabled status to inner components
                      readOnly,
                      plaintext,
                      errors,
                      showErrors,
                      level: level + 1,
                      locale,
                      onJavascriptError,
                      Components,
                      prependView: PlaceholderWrapper && (
                        <PlaceholderWrapper
                          key={`wrapper_top_field`}
                          parentField={field}
                          parentFieldTarget="rightFields"
                          nextField={field.rightFields && field.rightFields.length ? field.rightFields[0] : null}
                        />
                      )
                    })}
                    {BottomView && <BottomView context="two-columns" key={`bottom_view_${field.name}`} field={field} target="rightFields" />}
                  </>
                )
              }
            }}
            </Component>
          );
          return GroupWrapper ?
            <GroupWrapper
              key={`wrapper_${field.name}`}
              className="two-columns"
              level={level}
              field={field}
              index={index}
            >{component}</GroupWrapper> : component;
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
                      PlaceholderWrapper,
                      BottomView,
                      onChange,
                      onEnter,
                      fields: field.leftFields,
                      control,
                      framework,
                      getValues,
                      disabled: field.disabled ? true : disabled, // pass disabled status to inner components
                      readOnly,
                      plaintext,
                      errors,
                      showErrors,
                      level: level + 1,
                      locale,
                      onJavascriptError,
                      Components,
                      prependView: PlaceholderWrapper && (
                        <PlaceholderWrapper
                          key={`wrapper_top_field`}
                          parentField={field}
                          parentFieldTarget="leftFields"
                          nextField={field.leftFields && field.leftFields.length ? field.leftFields[0] : null}
                        />
                      )
                    })}
                    {BottomView && <BottomView context="three-columns" key={`bottom_view_${field.name}`} field={field} target="leftFields" />}
                  </>
                )
              } else if (column === 'center') {
                return (
                  <>
                    {renderFields({
                      Wrapper,
                      GroupWrapper,
                      PlaceholderWrapper,
                      BottomView,
                      onChange,
                      onEnter,
                      fields: field.centerFields,
                      control,
                      framework,
                      getValues,
                      disabled: field.disabled ? true : disabled, // pass disabled status to inner components
                      readOnly,
                      plaintext,
                      errors,
                      showErrors,
                      level: level + 1,
                      locale,
                      onJavascriptError,
                      Components,
                      prependView: PlaceholderWrapper && (
                        <PlaceholderWrapper
                          key={`wrapper_top_field`}
                          parentField={field}
                          parentFieldTarget="centerFields"
                          nextField={field.centerFields && field.centerFields.length ? field.centerFields[0] : null}
                        />
                      )
                    })}
                    {BottomView && <BottomView context="three-columns" key={`bottom_view_${field.name}`} field={field} target="centerFields" />}
                  </>
                )
              } else if (column === 'right') {
                return (
                  <>
                    {renderFields({
                      Wrapper,
                      GroupWrapper,
                      PlaceholderWrapper,
                      BottomView,
                      onChange,
                      onEnter,
                      fields: field.rightFields,
                      control,
                      framework,
                      getValues,
                      disabled: field.disabled ? true : disabled, // pass disabled status to inner components
                      readOnly,
                      plaintext,
                      errors,
                      showErrors,
                      level: level + 1,
                      locale,
                      onJavascriptError,
                      Components,
                      prependView: PlaceholderWrapper && (
                        <PlaceholderWrapper
                          key={`wrapper_top_field`}
                          parentField={field}
                          parentFieldTarget="rightFields"
                          nextField={field.rightFields && field.rightFields.length ? field.rightFields[0] : null}
                        />
                      )
                    })}
                    {BottomView && <BottomView context="three-columns" key={`bottom_view_${field.name}`} field={field} target="rightFields" />}
                  </>
                )
              }
            }}
            </Component>
          );
          return GroupWrapper ?
            <GroupWrapper
              key={`wrapper_${field.name}`}
              className="three-columns"
              field={field}
              level={level}
              index={index}
            >{component}</GroupWrapper> : component;
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
                lfOnEnter={onEnter}
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

    return prependView ? [prependView, ...renderedFields] : renderedFields;
  }

  const FormGenerator = React.memo(({
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
    locale,
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
    // hide submit button
    hideSubmit,
    // show demo flag
    demo = false,
    extra,
    disableOnSubmit = true,
    resetAfterSubmit = true
  }) => {
    const { showErrors, connectors } = form;
    const [formName, setFormName] = useState(form.name ?? _.uniqueId('form_'));
    useStylesheet(formName, form.css)
    const [transformers, setTransformers] = useState(null);
    const [preloading, setPreloading] = useState(prealoadComponents);
    const [stateDisabled, setDisabled] = useState(false);
    //const [traversedFields, setTraversedFields] = useState([]);
    const [version, setVersion] = useState(1);

    const disabled = stateDisabled || disabledProp;

    const { handleSubmit, formState: { errors, isValid }, reset, control, getValues } = useForm({
      defaultValues,
      mode: form.validationMode
    });
    const [validationErrors, setValidationErrors] = useState();
    // store form fields, apply immediately transformers (collected from all fields)
    const [formFields, setFormFields] = useState(null);
    const MergedComponents = mergeComponents(Fields, components);

    // it's the combination of the fields from the form schema and those specified
    // with the DSL, from now on every func should reference this (not form.fields)
    const actualFields = [
      ...(form.fields ?? []),
      ...traverseChildren(children, { components: MergedComponents, framework })
    ];

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
          const newTransformers = collectTransformers(actualFields, form.transformer || form.script, onJavascriptError);

          // initial fields values
          let newFields = actualFields;
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
      [form, framework, children] // don't put defaultValues here
    );

    const onHandleSubmit = useCallback(
      async data => {
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
        // execute main transformer
        let newFields = formFields;
        if (!_.isEmpty(transformers.onRender)) {
          for await(const f of applyTransformers(
            formName,
            framework,
            newFields,
            transformers.onRender,
            values,
            onJavascriptError
          )) {
            newFields = f;
            if (f !== formFields) {
              setFormFields(f);
            }
          }
        }
        // if the changed field has a transformer
        if (transformers.onChange != null && !_.isEmpty(transformers.onChange[fieldName])) {
          // execute the async generator transformer
          for await(const f of applyTransformers(
            formName,
            framework,
            newFields,
            transformers.onChange[fieldName],
            values,
            onJavascriptError
          )) {
            newFields = f;
            if (f !== formFields) {
              setFormFields(f);
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
          form={form}
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
      <FormContext.Provider value={{
        locales: form.locales,
        locale: locale
        // ..more
      }}>
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
              disabled={disabled}
              disabledSubmit={form.disableSubmitOnError && !isValid}
              readOnly={readOnly}
              plaintext={plaintext}
              locale={locale}
              {..._.omit(form, 'id', 'fields', 'version')}
              labelSubmit={i18n(form.labelSubmit, locale) || 'Submit'}
              labelCancel={i18n(form.labelCancel, locale) || 'Cancel'}
              hideCancel={hideCancel}
              hideSubmit={hideSubmit}
              custom={custom}
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
                debug,
                errors,
                disabled: disabled || form.disabled,
                readOnly: readOnly || form.readOnly,
                plaintext: plaintext || form.plaintext,
                showErrors,
                locale,
                onJavascriptError,
                Components: MergedComponents
              })}
              {extra}
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
  }, function (prevProps, nextProps) {
    if (DEBUG_RENDER) {
      console.log(`[LetsForm] Form generator ${nextProps.form.name ? '(' + nextProps.form.name + `)` : ''} re-render: `
        + ' framework=' + (prevProps.framework === nextProps.framework)
        + ' onChange=' + (prevProps.onChange === nextProps.onChange)
        + ' wrapper=' + (prevProps.wrapper === nextProps.wrapper)
        + ' form=' + (prevProps.form === nextProps.form)
        + ' locale=' + (prevProps.locale === nextProps.locale)
        + ' plaintext=' + (prevProps.plaintext === nextProps.plaintext)
        + ' disabled=' + (prevProps.disabled === nextProps.disabled)
      );
    }

    const isEqual = prevProps.framework === nextProps.framework
      && prevProps.onChange === nextProps.onChange
      && prevProps.wrapper === nextProps.wrapper
      && prevProps.form === nextProps.form
      && prevProps.locale === nextProps.locale
      && prevProps.plaintext === nextProps.plaintext
      && prevProps.disabled === nextProps.disabled;
    console.log('Is re-rendering?', !isEqual);
    return isEqual;
  });

  FormGenerator.displayName = 'FormGenerator';
  return FormGenerator;
};

export { GenerateGenerator };
export * from './helpers/dsl';
