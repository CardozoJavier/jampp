import { useRef } from 'react';

let uniqueId = Math.random();
const getUniqueId = () => String(uniqueId++);

const useComponentId = () => {
  const idRef = useRef(getUniqueId());
  return idRef.current;
}

export default useComponentId;
