import { useEffect, useState } from 'react';


export const getScreenWidth = () => {
  const [width, setWidth] = useState(1600);

  useEffect(() => {
    if (typeof window !== "undefined") setWidth(window.innerWidth);
  }, []);

  return width;
};
