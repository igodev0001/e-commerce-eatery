import styles from "./FullMenu.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
  categoryItem: {
    id: number;
    name: string;
    image: string;
  };
}

export default function SideMenuItem({ categoryItem }: Props) {
  const router = useRouter();
  const activeClass =
    router.query.catName === categoryItem.name.toLowerCase() ||
    (router.pathname === "/full_menu" && categoryItem.name === "Favorites")
      ? "activeItem"
      : "";
  return (
    <Link
      href={
        categoryItem.name === "Favorites"
          ? `/full_menu`
          : `/full_menu/${categoryItem.name.toLowerCase()}`
      }
    >
      <li className={`${styles.item} ${styles[activeClass]}`}>
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
    </Link>
  );
}
