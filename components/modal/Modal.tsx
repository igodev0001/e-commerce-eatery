import ReactDOM from "react-dom";
import PropTypes from "prop-types";
//======================================================
import Overlay from "./OverLay";
import Backdrop from "./Backdrop";
import { Fragment } from "react";
//======================================================

interface Props {
  open: boolean;
  closeMenu: () => void;
  children: React.ReactNode;
}

function Modal({ open, children, closeMenu }: Props) {
  if (open) {
    const portalElement = document.getElementById("modal-root") as HTMLElement;
    return (
      <Fragment>
        {ReactDOM.createPortal(<Overlay>{children}</Overlay>, portalElement)}
        {ReactDOM.createPortal(
          <Backdrop closeMenu={closeMenu}></Backdrop>,
          portalElement
        )}
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
