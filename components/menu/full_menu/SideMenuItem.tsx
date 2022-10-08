import styles from "./FullMenu.module.scss";
import Image from "next/image";

interface Props {
  categoryItem: {
    id: number;
    name: string;
    image: string;
  };
}

export default function SideMenuItem({ categoryItem }: Props) {
  return (
    <li className={styles.item}>
      <div className={styles.img}>
        <Image
          src={categoryItem.image}
          alt={categoryItem.name}
          width="80"
          height="80"
        />
      </div>
      <div className={styles.title}>{categoryItem.name}</div>
    </li>
  );
}
