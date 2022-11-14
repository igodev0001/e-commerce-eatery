import React, { useEffect } from "react";
import useWindowSize from "../../../hooks/useWindowSize";
import Modal from "../../modal/Modal";
import BottomSection from "./sections/BottomSection";
import styles from "./BurgerMenu.module.scss";
import MiddleSection from "./sections/MiddleSection";
import TopSection from "./sections/TopSection";
import { AiOutlineClose } from "react-icons/ai";

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
      <div className={styles.action}>
        <button onClick={closeMenu}>
          <AiOutlineClose />
        </button>
      </div>
      <div className={styles.wrapper}>
        <TopSection />
        <hr />
        <MiddleSection />
        <hr />
        <BottomSection />
        <hr />
      </div>
    </Modal>
  );
}
