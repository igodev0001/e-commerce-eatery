import ProductInfo from "./ProductInfo";
//======================================================
import { Product } from "../../lib/types";
import styles from "./ProductDetail.module.scss";
//======================================================

interface Props {
  product: Product;
}

export default function ProductDetail({ product }: Props) {
  return (
    <div className={styles.container}>
      <ProductInfo product={product} />
      <div>ingredients</div>
      <div>nutritional info</div>
      <div>related product</div>
      <div>important note</div>
    </div>
  );
}
