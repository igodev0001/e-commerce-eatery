import ReactDOM from "react-dom";
import PropTypes from "prop-types";
//======================================================
import Overlay from "./OverLay";
//======================================================

interface Props {
  open: boolean;
  children: React.ReactNode;
}

function Modal({ open, children }: Props) {
  if (open) {
    const portalElement = document.getElementById("modal-root") as HTMLElement;
    return ReactDOM.createPortal(<Overlay>{children}</Overlay>, portalElement);
  } else {
    return null;
  }
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Modal;
