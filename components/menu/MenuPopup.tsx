import { useQueryClient } from "react-query";
//======================================================
import Modal from "../modal/Modal";
import MenuList from "./MenuList";
import LinkButton from "../Button/LinkButton";
import { useMenuContext } from "../../context/menu-context";
//======================================================
import styles from "../../styles/Menu.module.scss";

export default function MenuPopup() {
  const queryClient = useQueryClient();
  const categories = queryClient.getQueryData("categories") as {
    id: number;
    image: string;
    name: string;
  }[];
  const { state } = useMenuContext();
  console.log(state);

  return (
    <Modal st={state.isMenuOpen}>
      <div className={styles.wrapper}>
        <MenuList categories={categories} />
        <LinkButton
          href="google.com"
          name="View Full Menu"
          style="transparent"
        />
      </div>
    </Modal>
  );
}
