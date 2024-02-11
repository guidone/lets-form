import { createElement, forwardRef, lazy, useRef } from 'react';


export function lazyPreload(factory) {
  const ReactLazyComponent = lazy(factory);
  let PreloadedComponent;
  let factoryPromise;

  const Component = forwardRef(function LazyWithPreload(props, ref) {
    // Once one of these is chosen, we must ensure that it continues to be
    // used for all subsequent renders, otherwise it can cause the
    // underlying component to be unmounted and remounted.
    const ComponentToRender = useRef(
      PreloadedComponent ?? ReactLazyComponent
    );
    return createElement(
      ComponentToRender.current,
      Object.assign(ref ? { ref } : {}, props)
    );
  });

  const LazyWithPreload = Component;

  LazyWithPreload.preload = () => {
    if (!factoryPromise) {
      factoryPromise = factory().then((module) => {
        PreloadedComponent = module.default;
        return PreloadedComponent;
      });
    }

    return factoryPromise;
  };

  return LazyWithPreload;
}
