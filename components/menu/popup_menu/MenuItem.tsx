import Image from "next/image";
import Link from "next/link";
//======================================================
import { Category } from "../../../lib/types";
import styles from "./PopupMenu.module.scss";
//======================================================

interface Props {
  category: Category;
}

export default function MenuItems({ category }: Props) {
  const route = category.name.toLowerCase().split(" ").join("-");

  return (
    <Link href={`/full_menu/${route}`}>
      <li className={styles.menuItem}>
        <Image
          src={category.image}
          alt={category.name}
          width="78px"
          height="78px"
        />
        <span>{category.name}</span>
      </li>
    </Link>
  );
}
