import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
//======================================================
import { Category } from "../../../lib/types";
import styles from "./FullMenu.module.scss";
//======================================================

interface Props {
  category: Category;
}

export default function SideMenuItem({ category }: Props) {
  const router = useRouter();
  const activeClass =
    router.query.catName === category.name.toLowerCase() ||
    (router.pathname === "/full_menu" && category.name === "Favorites")
      ? "activeItem"
      : "";
  const route = category.name.toLowerCase().split(" ").join("-");

  return (
    <Link
      href={
        category.name === "Favorites" ? `/full_menu` : `/full_menu/${route}`
      }
    >
      <li className={`${styles.item} ${styles[activeClass]}`}>
        <div className={styles.img}>
          <Image
            src={category.image}
            alt={category.name}
            width="80"
            height="80"
          />
        </div>
        <div className={styles.title}>{category.name}</div>
      </li>
    </Link>
  );
}
