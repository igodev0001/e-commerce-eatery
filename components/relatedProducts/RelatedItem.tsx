import Image from "next/image";
import Link from "next/link";
import { Product } from "../../lib/types";
import styles from "./RelatedProducts.module.scss";
//======================================================
interface Props {
  product: Product;
}
export default function RelatedItem({ product }: Props) {
  const route = product.name.split(" ").join("-");

  return (
    <Link href={`/product/${route}`}>
      <li className={styles.item}>
        <div className={styles.img}>
          <Image
            src={product.image}
            alt={product.name}
            width="250"
            height="150"
          />
        </div>
        <div className={styles.name}>{product.name}</div>
      </li>
    </Link>
  );
}
