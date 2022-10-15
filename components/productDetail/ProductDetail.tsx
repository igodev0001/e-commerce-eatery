import ProductInfo from "./ProductInfo";
//======================================================
import { Product } from "../../lib/types";
import styles from "./ProductDetail.module.scss";
import Ingredients from "../ingredients/Ingredients";
import RelatedProducts from "../relatedProducts/RelatedProducts";
//======================================================

interface Props {
  product: Product;
}

export default function ProductDetail({ product }: Props) {
  return (
    <div className={styles.container}>
      <ProductInfo product={product} />
      {product.ingredients?.length > 0 && (
        <Ingredients ingredients={product.ingredients} name={product.name} />
      )}
      <div>nutritional info</div>
      <RelatedProducts categoryId={product.category_id} pId={product.id} />
      <div>important note</div>
    </div>
  );
}
