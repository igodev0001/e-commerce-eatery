import { useEffect, useState } from "react";

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: NaN,
    height: NaN,
  });

  useEffect(() => {
    function hanldeResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", hanldeResize);
    hanldeResize();

    return () => window.removeEventListener("resize", hanldeResize);
  }, []);

  return windowSize;
}
