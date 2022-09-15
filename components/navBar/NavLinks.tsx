import React from "react";
import ButtonDropD from "../Button/ButtonDropD";
import styles from "../../styles/NavBar.module.scss";
import { useUiContext } from "../../context/ui-context";
import { useRouter } from "next/router";

export default function NavLinks() {
  const { isMenuOpen, menuHandler } = useUiContext();
  const router = useRouter();

  const path = router.pathname;

  return (
    <nav className={styles.links}>
      <ul>
        <li>
          <ButtonDropD
            action={menuHandler}
            isOpen={isMenuOpen}
            fontSize="large"
          >
            Our Menu
          </ButtonDropD>
        </li>
        <li className={path === "/download_app" ? `${styles.active}` : ""}>
          <span>Download App</span>
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
