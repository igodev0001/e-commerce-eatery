import MenuItem from "./MenuItem";
//===================================================
import styles from "../../styles/Menu.module.scss";
//===================================================

interface Props {
  categories: { id: number; image: string; name: string }[];
}
export default function MenuList({ categories }: Props) {
  return (
    <div className={styles.menuList}>
      {categories.map((item) => (
        <MenuItem key={item.id} img={item.image} title={item.name} />
      ))}
    </div>
  );
}
