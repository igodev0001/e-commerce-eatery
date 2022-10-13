import GridItem from "./GridItem";
//======================================================
import { Products } from "../../../lib/types";
import styles from "./FullMenu.module.scss";
//======================================================

interface Props extends Products {
  column: string;
  title: string;
}

export default function MenuGrid({ products, column, title }: Props) {
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
