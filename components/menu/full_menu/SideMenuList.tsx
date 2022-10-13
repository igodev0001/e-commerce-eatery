import SideMenuItem from "./SideMenuItem";
//======================================================
import { Categories } from "../../../lib/types";
import styles from "./FullMenu.module.scss";
//======================================================

export default function SideMenuList({ categories }: Categories) {
  return (
    <ul className={styles.list}>
      {categories.map((item) => (
        <SideMenuItem key={item.id} category={item} />
      ))}
    </ul>
  );
}
