import { useEffect, useState } from "react";

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
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
