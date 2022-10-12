import MenuItem from "./MenuItem";
//===================================================
import styles from "./PopupMenu.module.scss";
//===================================================

interface Props {
  categories: { id: number; image: string; name: string }[];
}
export default function MenuList({ categories }: Props) {
  return (
    <ul className={styles.menuList}>
      {categories.map(
        (item) =>
          item.name !== "Favorites" && (
            <MenuItem key={item.id} img={item.image} title={item.name} />
          )
      )}
    </ul>
  );
}
