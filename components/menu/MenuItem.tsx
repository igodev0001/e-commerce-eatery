import Image from "next/image";
import styles from "../../styles/Menu.module.scss";

interface Props {
  img: string;
  title: string;
}

export default function MenuItems({ img, title }: Props) {
  return (
    <div className={styles.menuItem}>
      <Image src={img} alt={title} width="78px" height="78px" />
      <span>{title}</span>
    </div>
  );
}
3;
