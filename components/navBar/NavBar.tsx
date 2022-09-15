import { useState } from "react";
//======================================================
import Button from "../Button/Button";
import ButtonDropD from "../Button/ButtonDropD";
import SearchBar from "../searchBar/SearchBar";
import { useUiContext } from "../../context/ui-context";
//======================================================
import styles from "../../styles/NavBar.module.scss";
//======================================================

export default function NavBar() {
  const { isMenuOpen, menuHandler } = useUiContext();

  const [isLangOpen, setIsLangOpen] = useState<boolean>(false);

  function langHandler(): void {
    setIsLangOpen(!isLangOpen);
  }

  function OrderHandler(): void {
    console.log("hello");
  }

  return (
    <div className={styles.container}>
      <nav className={styles.nav_links}>
        <div>
          <ButtonDropD
            action={langHandler}
            isOpen={isLangOpen}
            fontSize="normal"
          >
            Language
          </ButtonDropD>
          <p>Sign up for email</p>
          <p>Careers</p>
        </div>
        <div className={styles.actions}>
          <SearchBar />
          <Button action={OrderHandler}>Order Now</Button>
        </div>
      </nav>
      <nav className={styles.nav_menu}>
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
          <li>Download App</li>
          <li>MyMcDonald Rewards</li>
          <li>Exclusive Deals</li>
          <li>About Our Food</li>
          <li>Locate</li>
        </ul>
      </nav>
    </div>
  );
}
