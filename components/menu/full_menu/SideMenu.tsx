import SideMenuList from "./SideMenuList";
//======================================================
import { Categories } from "../../../lib/types";
import styles from "./FullMenu.module.scss";
//======================================================

export default function SideMenu({ categories }: Categories) {
  const favorites = categories.filter((item) => item.name === "Favorites");
  const catList = categories.filter((item) => item.name !== "Favorites");
  return (
    <div className={styles.sideMenu}>
      <SideMenuList categories={favorites} />
      <SideMenuList categories={catList} />
    </div>
  );
}
