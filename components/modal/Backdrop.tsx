// import PropTypes from "prop-types";
//======================================================
import styles from "./Modal.module.scss";
//======================================================

interface Props {
  closeMenu: () => void;
}

export default function Backdrop({ closeMenu }: Props) {
  return <div className={styles.backdrop} onClick={closeMenu} />;
}
