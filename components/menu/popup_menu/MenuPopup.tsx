//======================================================
import Modal from "../../modal/Modal";
import MenuList from "./MenuList";
import LinkButton from "../../button/LinkButton";
//======================================================
import styles from "./PopupMenu.module.scss";
import useCategory from "../../../hooks/useCategory";

interface Props {
  isMenuOpen: boolean;
}

export default function MenuPopup({ isMenuOpen }: Props) {
  const { data } = useCategory();

  return (
    <Modal open={isMenuOpen}>
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
