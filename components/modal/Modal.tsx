import React, { Fragment, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
//======================================================
import BackDrop from "./BackDrop";
import Overlay from "./OverLay";
//======================================================

interface Props {
  st: boolean;
  children: React.ReactNode;
}

function Modal({ st, children }: Props) {
  // const [isBrowser, setIsBrowser] = useState(false);

  // useEffect(() => {
  //   setIsBrowser(st);
  // }, [st]);

  if (st) {
    const portalElement = document.getElementById("modal-root") as HTMLElement;
    return (
      <Fragment>
        {ReactDOM.createPortal(<BackDrop />, portalElement)}
        {ReactDOM.createPortal(<Overlay>{children}</Overlay>, portalElement)}
      </Fragment>
    );
  } else {
    return null;
  }
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Modal;
