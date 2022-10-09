import { useEffect, useState } from "react";

const CityDebounce = (value, delay) => {
  const [debounceText, setDebounceText] = useState(null);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceText(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debounceText;
};

export default CityDebounce;
