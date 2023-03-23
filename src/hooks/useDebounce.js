import { useEffect, useState } from 'react';

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handleclear = setTimeout(() => setDebouncedValue(value), delay);

    return () => clearTimeout(handleclear);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);
  return debouncedValue;
};
export default useDebounce;
