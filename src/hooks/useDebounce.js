import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handleClear = setTimeout(() => setDebouncedValue(value), delay);

    return () => clearTimeout(handleClear);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);
  return debouncedValue;
};

useDebounce.prototype = {
  value: PropTypes.string,
  delay: PropTypes.number,
};

export default useDebounce;
