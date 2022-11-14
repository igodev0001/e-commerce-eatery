import { useQueryClient } from "@tanstack/react-query";
import RelatedGrid from "./RelatedGrid";
import styles from "./RelatedProducts.module.scss";
import { Category } from "../../lib/types";
//======================================================
interface Props {
  categoryId: number;
  pId: number;
}

export default function RelatedProducts({ categoryId, pId }: Props) {
  const query = useQueryClient();
  const categories = query.getQueryData(["categories"]) as Category[];

  const relatedCategory = categories?.filter((item) => item.id === categoryId);

  const relatedItems = relatedCategory[0].products
    ?.filter((item) => item.id !== pId)
    .filter((item, index) => index < 4);

  console.log(relatedItems);
  return (
    <div className={styles.container}>
      <h2>Related Products</h2>
      <RelatedGrid products={relatedItems} />
    </div>
  );
}
