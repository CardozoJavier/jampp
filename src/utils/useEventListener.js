import { useRef, useEffect } from 'react';

/**
 * Hook to handle click events on window
 */
const useEventListener = (eventName, eventHandler, element = window) => {
  const savedHandler = useRef();

  useEffect(() => {
    savedHandler.current = eventHandler;
  }, [eventHandler]);
  
  useEffect(
    () => {
      const isSupported = element && element.addEventListener;
      if (!isSupported) return;
      
      const eventListener = event => savedHandler.current(event);
      element.addEventListener(eventName, eventListener);
      
      return () => {
        element.removeEventListener(eventName, eventListener);
      };
    },
    [eventName, element]
  );
};

export default useEventListener;
