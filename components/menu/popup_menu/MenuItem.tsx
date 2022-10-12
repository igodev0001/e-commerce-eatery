import Image from "next/image";
import Link from "next/link";
//======================================================
import styles from "../../../styles/Menu.module.scss";
//======================================================

interface Props {
  img: string;
  title: string;
}

export default function MenuItems({ img, title }: Props) {
  return (
    <Link href={`/full_menu/${title.toLowerCase()}`}>
      <li className={styles.menuItem}>
        <Image src={img} alt={title} width="78px" height="78px" />
        <span>{title}</span>
      </li>
    </Link>
  );
}
