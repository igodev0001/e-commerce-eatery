import { useQueryClient } from "@tanstack/react-query";
import RelatedGrid from "./RelatedGrid";
import styles from "./RelatedProducts.module.scss";
import { Product } from "../../lib/types";
//======================================================
interface Props {
  categoryId: number;
  pId: number;
}

export default function RelatedProducts({ categoryId, pId }: Props) {
  const query = useQueryClient();
  const allProducts = query.getQueryData(["products"]) as Product[];

  const relatedItems = allProducts
    ?.filter((item) => item.category_id === categoryId && item.id !== pId)
    .filter((item, index) => index < 4);

  console.log(relatedItems);
  return (
    <div className={styles.container}>
      <h2>Related Products</h2>
      <RelatedGrid products={relatedItems} />
    </div>
  );
}
