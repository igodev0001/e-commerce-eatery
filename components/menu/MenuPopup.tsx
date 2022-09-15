//======================================================
import Modal from "../modal/Modal";
import MenuList from "./MenuList";
import { useUiContext } from "../../context/ui-context";
import LinkButton from "../Button/LinkButton";
//======================================================
import styles from "../../styles/Menu.module.scss";

export default function MenuPopup() {
  const { isMenuOpen } = useUiContext();

  return (
    <Modal st={isMenuOpen}>
      <div className={styles.wrapper}>
        <MenuList />
        <LinkButton
          href="google.com"
          name="View Full Menu"
          style="transparent"
        />
      </div>
    </Modal>
  );
}
