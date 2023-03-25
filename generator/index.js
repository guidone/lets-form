import React, { useCallback, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';

//import { DevTool } from '@hookform/devtools';
import _ from 'lodash';

import { ValidationErrors } from '../components';

//import PropTypes from 'prop-types';

//import { typeFramework  } from '../types/frameworks';


//import { Forms } from './forms';
//import { Fields } from './fields';

// TODO remove is not standalone
//import { enumFramework } from '../../types';

const enumFramework = ['react', 'react-rsuite5', 'react-material-ui'];


window.React1 = React;


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


const MissingComponent = () => {
  return <div>This component is not available for this framework</div>
}

const GenerateGenerator = ({ Forms, Fields }) => {

  const renderFields = ({ fields,
    control,
    framework,
    onChange,
    getValues,
    Wrapper,
    debug,
    disabled,
    readOnly,
    plaintext,
    errors,
    showErrors
  }) => {
    return (fields || []).map((field, index) => {
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
        ...enumFramework
      ]);

      // special case of group
      if (field.component === 'group') {
        const component = (
          <Component
            key={field.name}
            name={field.name}
            label={field.label}
            hint={field.hint}
            disabled={field.disabled}
            {...additionalFields}
          >
            <>
              {renderFields({
                Wrapper,
                onChange,
                fields: field.fields,
                control,
                framework,
                getValues,
                disabled,
                readOnly,
                plaintext,
                errors,
                showErrors
              })}
            </>
          </Component>
        );
        return Wrapper ? <Wrapper field={field} index={index}>{component}</Wrapper> : component;
      } else if (field.component === 'two-columns') {
        const component = (
          <Component
            key={field.name}
            name={field.name}
            {...additionalFields}
          >
          {column => {
            if (column === 'left' && _.isArray(field.leftFields) && !_.isEmpty(field.leftFields)) {
              return (
                <>
                  {renderFields({
                    Wrapper,
                    onChange,
                    fields: field.leftFields,
                    control,
                    framework,
                    getValues,
                    disabled,
                    readOnly,
                    plaintext,
                    errors,
                    showErrors
                  })}
                </>
              )
            } else if (column === 'right' && _.isArray(field.rightFields) && !_.isEmpty(field.rightFields)) {
              return (
                <>
                  {renderFields({
                    Wrapper,
                    onChange,
                    fields: field.rightFields,
                    control,
                    framework,
                    getValues,
                    disabled,
                    readOnly,
                    plaintext,
                    errors,
                    showErrors
                  })}
                </>
              )
            }
          }}
          </Component>
        );
        return Wrapper ? <Wrapper field={field} index={index}>{component}</Wrapper> : component;
      } else if (field.component === 'three-columns') {
        const component = (
          <Component
            key={field.name}
            name={field.name}
            {...additionalFields}
          >
          {column => {
            if (column === 'left' && _.isArray(field.leftFields) && !_.isEmpty(field.leftFields)) {
              return (
                <>
                  {renderFields({
                    Wrapper,
                    onChange,
                    fields: field.leftFields,
                    control,
                    framework,
                    getValues,
                    disabled,
                    readOnly,
                    plaintext,
                    errors,
                    showErrors
                  })}
                </>
              )
            } else if (column === 'center' && _.isArray(field.centerFields) && !_.isEmpty(field.centerFields)) {
              return (
                <>
                  {renderFields({
                    Wrapper,
                    onChange,
                    fields: field.centerFields,
                    control,
                    framework,
                    getValues,
                    disabled,
                    readOnly,
                    plaintext,
                    errors,
                    showErrors
                  })}
                </>
              )
            } else if (column === 'right' && _.isArray(field.rightFields) && !_.isEmpty(field.rightFields)) {
              return (
                <>
                  {renderFields({
                    Wrapper,
                    onChange,
                    fields: field.rightFields,
                    control,
                    framework,
                    getValues,
                    disabled,
                    readOnly,
                    plaintext,
                    errors,
                    showErrors
                  })}
                </>
              )
            }
          }}
          </Component>
        );
        return Wrapper ? <Wrapper field={field} index={index}>{component}</Wrapper> : component;
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
                console.log('cambiato dentro', opts)
                onChange({ ...getValues(), [field.name]: value }, opts);
              }}
            />;

            return Wrapper ? <Wrapper field={field} cacca={true} index={index}>{component}</Wrapper> : component;
            }
          }
        />
      );
    });
  }



  const FormGenerator = React.memo(({
    framework,
    form,
    onChange = () => {},
    onSubmit = () => {},
    onReset = () => {},
    onError = () => {},
    wrapper,
    defaultValues = {},
    onlyFields = false,
    debug = false,
    disabled = false,
    readOnly = false,
    plaintext = false,
    hideToolbar = false,
    children
  }) => {
    if (debug) {
      console.log('Generating form -> ', form);
    }
    const { handleSubmit, formState: { errors }, reset, watch, control, setValues, getValues, register } = useForm({
      defaultValues,
      mode: form.validationMode
    });
    const [validationErrors, setValidationErrors] = useState();

    const { fields, showErrors } = form;
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
        console.log('reset')
        setValidationErrors(null);
        reset(defaultValues);
      },
      [defaultValues, reset]
    );

    if (debug) {
      console.log('validation', errors)
    }

    const Form = Forms[framework];
    const Wrapper = wrapper;

    return (
      <div className="form-generator">
        {validationErrors && showErrors === 'groupedTop' && (
          <ValidationErrors errors={validationErrors}/>
        )}
        <Form
          onSubmit={handleSubmit(onHandleSubmit, onHandleError)}
          onlyFields={onlyFields}
          hideToolbar={hideToolbar}
          onReset={handleReset}
          {..._.omit(form, 'id', 'fields', 'version')}
        >
          {renderFields({
            Wrapper,
            onChange,
            fields,
            control,
            framework,
            getValues,
            debug,
            errors, // TODO perhaps validationErrors?
            disabled: disabled || form.disabled,
            readOnly: readOnly || form.readOnly,
            plaintext: plaintext || form.plaintext,
            showErrors
          })}
          {children}
          {validationErrors && (showErrors === 'groupedBottom' || _.isEmpty(showErrors)) && (
            <ValidationErrors errors={validationErrors}/>
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
