import MenuItem from "./MenuItem";
//===================================================
import { Categories } from "../../../lib/types";
import styles from "./PopupMenu.module.scss";
//===================================================

export default function MenuList({ categories }: Categories) {
  return (
    <ul className={styles.menuList}>
      {categories.map(
        (item) =>
          item.name !== "Favorites" && (
            <MenuItem key={item.id} category={item} />
          )
      )}
    </ul>
  );
}
