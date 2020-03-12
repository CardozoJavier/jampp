import { useRef } from 'react';
/**
 * Generate an unique ID that isn't change on re-renders.
 */
let uniqueId = Math.random();
const getUniqueId = () => String(uniqueId++);

const useComponentId = () => {
  const idRef = useRef(getUniqueId());
  return idRef.current;
}

export default useComponentId;
