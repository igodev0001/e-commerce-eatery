import RelatedItem from "./RelatedItem";
import styles from "./RelatedProducts.module.scss";
import { Products } from "../../lib/types";
//======================================================

export default function RelatedGrid({ products }: Products) {
  return (
    <ul className={styles.grid}>
      {products &&
        products.map((item) => <RelatedItem key={item.id} product={item} />)}
    </ul>
  );
}
