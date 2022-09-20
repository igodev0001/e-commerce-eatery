import ButtonDropD from "../Button/ButtonDropD";
import styles from "../../styles/NavBar.module.scss";
// import { useMenuContext } from "../../context/menu-context";
import { useRouter } from "next/router";
import Link from "next/link";

interface Props {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

export default function NavLinks({ isMenuOpen, toggleMenu }: Props) {
  // const { state, dispatch } = useMenuContext();
  const router = useRouter();

  const path = router.pathname;

  return (
    <nav className={styles.links}>
      <ul>
        <li>
          <ButtonDropD action={toggleMenu} isOpen={isMenuOpen} fontSize="large">
            Our Menu
          </ButtonDropD>
        </li>
        <li className={path === "/download_app" ? `${styles.active}` : ""}>
          <Link href="/download_app">Download App</Link>
        </li>
        <li className={path === "/my_mcdonalds" ? `${styles.active}` : ""}>
          <Link href="/my_mcdonalds">MyMcDonald Rewards</Link>
        </li>
        <li className={path === "/deals" ? `${styles.active}` : ""}>
          <Link href="/deals">Exclusive Deals</Link>
        </li>
        <li className={path === "/about_our_food" ? `${styles.active}` : ""}>
          <Link href="/about_our_food">About Our Food</Link>
        </li>
        <li
          className={path === "/restaurant_locator" ? `${styles.active}` : ""}
        >
          <Link href="/restaurant_locator">Locate</Link>
        </li>
      </ul>
    </nav>
  );
}
