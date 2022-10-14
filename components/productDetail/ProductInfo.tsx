import Image from "next/image";
//======================================================
import styles from "./ProductDetail.module.scss";
//======================================================

export default function ProductInfo() {
  return (
    <div className={styles.productInfo}>
      <div className={styles.image}>{/* <Image src={} alt={} /> */}</div>
      <div className={styles.info}>
        <div className={styles.title}></div>
        <div className={styles.price}></div>
        <div className={styles.desc}></div>
      </div>
    </div>
  );
}
