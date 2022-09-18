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
        <li className={path === "/reward" ? `${styles.active}` : ""}>
          <span>MyMcDonald Rewards</span>
        </li>
        <li className={path === "/exclusive_deals" ? `${styles.active}` : ""}>
          <span>Exclusive Deals</span>
        </li>
        <li className={path === "/about_our_food" ? `${styles.active}` : ""}>
          <span>About Our Food</span>
        </li>
        <li className={path === "/locate" ? `${styles.active}` : ""}>
          <span>Locate</span>
        </li>
      </ul>
    </nav>
  );
}
