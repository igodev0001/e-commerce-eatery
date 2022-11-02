import Image from "next/image";
import Link from "next/link";
//======================================================
import { Category } from "../../../lib/types";
import styles from "./PopupMenu.module.scss";
//======================================================

interface Props {
  category: Category;
  form: string;
}

export default function MenuItems({ category, form }: Props) {
  const route = category.name.toLowerCase().split(" ").join("-");
  const itemClass = form === "popUp" ? "itemPopUp" : "itemBurger";

  return (
    <Link href={`/full_menu/${route}`}>
      <li className={styles[itemClass]}>
        <Image
          src={category.image}
          alt={category.name}
          width={form === "popUp" ? "78px" : "60px"}
          height={form === "popUp" ? "78px" : "60px"}
        />
        <span>{category.name}</span>
      </li>
    </Link>
  );
}
