import styles from "./FullMenu.module.scss";
import SideMenuList from "./SideMenuList";

interface Props {
  category: {
    id: number;
    name: string;
    image: string;
  }[];
}

export default function SideMenu({ category }: Props) {
  const favorites = category.filter((item) => item.name === "Favorites");
  const catList = category.filter((item) => item.name !== "Favorites");
  return (
    <div className={styles.sideMenu}>
      <SideMenuList categoryList={favorites} />
      <SideMenuList categoryList={catList} />
    </div>
  );
}
