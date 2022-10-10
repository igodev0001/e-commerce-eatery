import Image from "next/image";
import styles from "./FullMenu.module.scss";

interface Props {
  product: {
    id: number;
    name: string;
    // desc: string;
    // price: number;
    // price_small: number;
    // price_medium: number;
    // big: number;
    image: string;
  };
}

export default function GridItem({ product }: Props) {
  return (
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
  );
}
