import styles from "./FullMenu.module.scss";
import GridItem from "./GridItem";

interface Props {
  column: string;
  products: {
    id: number;
    name: string;
    image: string;
  }[];
}

export default function MenuGrid({ column, products }: Props) {
  const columnNumber = column === "3" ? "gridThree" : "";
  return (
    <div className={`${styles.grid} ${styles[columnNumber]}`}>
      <h2>title</h2>
      {products &&
        products.map((item) => <GridItem key={item.id} product={item} />)}
    </div>
  );
}
