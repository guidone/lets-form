import React from 'react';
import { Controller } from 'react-hook-form';

import { FRAMEWORKS } from '../../costants';

import { MissingComponent } from './missing-component';



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
              );
            }}
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
                    );
                  }}
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
                    );
                  }}
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
            errors={errors ? errors[field.name] : null}
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


      let error;
      if (field.component === 'array') {
        // pass errors down the the array component only if it's "inline"
        error = errors != null && showErrors === 'inline' ? errors[field.name] : null;
      } else if (errors && errors[field.name] && errors[field.name].errorMessage) {
        // if it's inline pass the error messgae, otherwise just a true in order to
        // highlight the component
        error = (showErrors === 'inline' ? errors[field.name].errorMessage : true);
      }

      let perComponentAdditionalFields = {
        ...additionalFields
      };
      if (field.component === 'array') {
        perComponentAdditionalFields.formShowErrors = showErrors;
      }

      return (
        <Controller
          key={`field_${field.name}`}
          name={field.name}
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
              error={error}
              /*error={errors && errors[field.name] && errors[field.name].errorMessage ?
                (showErrors === 'inline' ? errors[field.name].errorMessage : true)
                : undefined
              }*/
              {...perComponentAdditionalFields}
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
};



export { renderFields };