import styles from "./FullMenu.module.scss";
import SideMenuItem from "./SideMenuItem";

interface Props {
  categoryList: {
    id: number;
    name: string;
    image: string;
  }[];
}

export default function SideMenuList({ categoryList }: Props) {
  return (
    <ul className={styles.list}>
      {categoryList.map((item) => (
        <SideMenuItem key={item.id} categoryItem={item} />
      ))}
    </ul>
  );
}
