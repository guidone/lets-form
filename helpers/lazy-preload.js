import React, { createElement, forwardRef, lazy, useRef } from 'react';

import { wrapOnChange } from './wrap-on-change';

export function lazyPreload(factory) {
  const ReactLazyComponent = lazy(factory);
  let PreloadedComponent;
  let factoryPromise;

  const Component = forwardRef(function LazyWithPreload(props, ref) {
    // Once one of these is chosen, we must ensure that it continues to be
    // used for all subsequent renders, otherwise it can cause the
    // underlying component to be unmounted and remounted.
    const ComponentToRender = useRef(
      PreloadedComponent ?? wrapOnChange(ReactLazyComponent)
    );
    return createElement(
      ComponentToRender.current,
      Object.assign(ref ? { ref } : {}, props)
    );
  });

  const LazyWithPreload = Component;

  LazyWithPreload.preload = () => {
    if (!factoryPromise) {
      factoryPromise = factory().then(
        (module) => {
          PreloadedComponent = wrapOnChange(module.default);
          return PreloadedComponent;
        },
        e => {
          console.log('Error preloading', e)
        }
      );
    }

    return factoryPromise;
  };

  return LazyWithPreload;
};
