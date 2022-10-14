import ProductInfo from "./ProductInfo";
//======================================================
import { Product } from "../../lib/types";
import styles from "./ProductDetail.module.scss";
import Ingredients from "../ingredients/Ingredients";
//======================================================

interface Props {
  product: Product;
}

export default function ProductDetail({ product }: Props) {
  return (
    <div className={styles.container}>
      <ProductInfo product={product} />
      <Ingredients ingredients={product.ingredients} name={product.name} />
      <div>nutritional info</div>
      <div>related product</div>
      <div>important note</div>
    </div>
  );
}
