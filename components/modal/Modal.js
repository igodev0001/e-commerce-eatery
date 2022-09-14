import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

function Modal() {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(false);
  }, []);

  if (isBrowser) {
    return ReactDOM.createPortal(
      <div
        style={{
          height: "500px",
          width: "100%",
          zIndex: "100",
          position: "absolute",
          backgroundColor: "red",
        }}
      >
        Hello from modal
      </div>,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
}

export default Modal;
