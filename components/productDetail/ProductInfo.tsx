import Image from "next/image";
import { Product } from "../../lib/types";
//======================================================
import styles from "./ProductDetail.module.scss";
//======================================================

interface Props {
  product: Product;
}
export default function ProductInfo({ product }: Props) {
  return (
    <div className={styles.productInfo}>
      <div className={styles.image}>
        <Image
          src={product.image}
          alt={product.name}
          width="780"
          height="430"
        />
      </div>
      <div className={styles.info}>
        <div className={styles.title}>
          <h1>{product.name}</h1>
        </div>
        <div className={styles.price}>
          <span>${product.price}</span>
        </div>
        <div className={styles.desc}>
          <p>{product.desc}</p>
        </div>
      </div>
    </div>
  );
}
