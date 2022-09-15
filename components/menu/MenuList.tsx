import MenuItem from "./MenuItem";
//===================================================
import styles from "../../styles/Menu.module.scss";
//===================================================

const category = [
  {
    title: "Beverages",
    img: "https://s7d1.scene7.com/is/image/mcdonalds/drinks_300x300:menu-category-desktop",
  },
  {
    title: "Beverages",
    img: "https://s7d1.scene7.com/is/image/mcdonalds/drinks_300x300:menu-category-desktop",
  },
  {
    title: "Beverages",
    img: "https://s7d1.scene7.com/is/image/mcdonalds/drinks_300x300:menu-category-desktop",
  },
  {
    title: "Beverages",
    img: "https://s7d1.scene7.com/is/image/mcdonalds/drinks_300x300:menu-category-desktop",
  },
  {
    title: "Beverages",
    img: "https://s7d1.scene7.com/is/image/mcdonalds/drinks_300x300:menu-category-desktop",
  },
  {
    title: "Beverages",
    img: "https://s7d1.scene7.com/is/image/mcdonalds/drinks_300x300:menu-category-desktop",
  },
  {
    title: "Beverages",
    img: "https://s7d1.scene7.com/is/image/mcdonalds/drinks_300x300:menu-category-desktop",
  },
  {
    title: "Beverages",
    img: "https://s7d1.scene7.com/is/image/mcdonalds/drinks_300x300:menu-category-desktop",
  },
  {
    title: "Beverages",
    img: "https://s7d1.scene7.com/is/image/mcdonalds/drinks_300x300:menu-category-desktop",
  },
  {
    title: "Beverages",
    img: "https://s7d1.scene7.com/is/image/mcdonalds/drinks_300x300:menu-category-desktop",
  },
  {
    title: "Beverages",
    img: "https://s7d1.scene7.com/is/image/mcdonalds/drinks_300x300:menu-category-desktop",
  },
];

export default function MenuList() {
  return (
    <div className={styles.menuList}>
      {category.map((item, index) => (
        <MenuItem key={index} img={item.img} title={item.title} />
      ))}
    </div>
  );
}
