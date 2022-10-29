import React, { useEffect } from "react";
import useWindowSize from "../../../hooks/useWindowSize";
import Modal from "../../modal/Modal";
import styles from "./BurgerMenu.module.scss";

interface Props {
  show: boolean;
  closeMenu: () => void;
}

export default function BurgerMenu({ show, closeMenu }: Props) {
  const { width } = useWindowSize();

  useEffect(() => {
    if (width > 1023) {
      closeMenu();
    }
  }, [width, closeMenu]);

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
