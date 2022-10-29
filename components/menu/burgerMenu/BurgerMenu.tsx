import React from "react";
import Modal from "../../modal/Modal";
import styles from "./BurgerMenu.module.scss";

interface Props {
  show: boolean;
  closeMenu: () => void;
}

export default function BurgerMenu({ show, closeMenu }: Props) {
  return (
    <Modal open={show} closeMenu={closeMenu}>
      <div className={styles.wrapper}>
        <div>rock</div>
        <div>rock</div>
        <div>rock</div>
        <div>rock</div>
        <div>rock</div>
      </div>
    </Modal>
  );
}
