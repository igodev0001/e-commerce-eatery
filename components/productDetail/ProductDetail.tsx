import ProductInfo from "./ProductInfo";
//======================================================
import styles from "./ProductDetail.module.scss";
//======================================================

export default function ProductDetail() {
  return (
    <div className={styles.container}>
      <ProductInfo />
      <div>ingredients</div>
      <div>nutritional info</div>
      <div>related product</div>
      <div>important note</div>
    </div>
  );
}
