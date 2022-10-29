//======================================================
import Modal from "../../modal/Modal";
import MenuList from "./MenuList";
import LinkButton from "../../Button/LinkButton";
import useCategory from "../../../hooks/useCategory";
//======================================================
import styles from "./PopupMenu.module.scss";
//======================================================

interface Props {
  isMenuOpen: boolean;
  closeMenu: () => void;
}

export default function MenuPopup({ isMenuOpen, closeMenu }: Props) {
  const { data } = useCategory();

  return (
    <Modal open={isMenuOpen} closeMenu={closeMenu}>
      <div className={styles.wrapper}>
        <MenuList categories={data} />
        <LinkButton
          href="/full_menu"
          name="View Full Menu"
          style="transparent"
        />
      </div>
    </Modal>
  );
}
