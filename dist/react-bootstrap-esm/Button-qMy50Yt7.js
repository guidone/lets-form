/* LetsForm react-bootstrap v0.7.10 - ESM */
import { u as useBootstrapPrefix, j as jsxRuntimeExports, a as classNames } from './createWithBsPrefix-FRzYE9sI.js';
import * as React from 'react';
import { u as useButtonProps } from './Button-BKNwnzQN.js';

const Button = /*#__PURE__*/React.forwardRef(({
  as,
  bsPrefix,
  variant = 'primary',
  size,
  active = false,
  disabled = false,
  className,
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, 'btn');
  const [buttonProps, {
    tagName
  }] = useButtonProps({
    tagName: as,
    disabled,
    ...props
  });
  const Component = tagName;
  return /*#__PURE__*/jsxRuntimeExports.jsx(Component, {
    ...buttonProps,
    ...props,
    ref: ref,
    disabled: disabled,
    className: classNames(className, prefix, active && 'active', variant && `${prefix}-${variant}`, size && `${prefix}-${size}`, props.href && disabled && 'disabled')
  });
});
Button.displayName = 'Button';

export { Button as B };