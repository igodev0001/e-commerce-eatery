import React from "react";
import Modal from "../../modal/Modal";
import styles from "./BurgerMenu.module.scss";

interface Props {
  show: boolean;
}

export default function BurgerMenu({ show }: Props) {
  return (
    <Modal open={show}>
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
