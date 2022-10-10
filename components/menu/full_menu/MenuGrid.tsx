import styles from "./FullMenu.module.scss";
import GridItem from "./GridItem";

interface Category {
  id: number;
  name: string;
  image: string;
}
interface Props {
  column: string;
  title: string;
  products: {
    id: number;
    name: string;
    desc: string;
    price: number;
    price_small: number;
    price_medium: number;
    price_big: number;
    image: string;
    category_id: number;
    category: Category;
    favorite: boolean;
  }[];
}

export default function MenuGrid({ column, products, title }: Props) {
  const gridThree = column === "3" ? "gridThree" : "";
  return (
    <div className={styles.menuGrid}>
      {title === "Featured Favorites" && <h1>McDonald&apos;s Menu</h1>}
      <h2>{title}</h2>
      <ul className={`${styles.grid} ${styles[gridThree]}`}>
        {products &&
          products.map((item) => <GridItem key={item.id} product={item} />)}
      </ul>
    </div>
  );
}
