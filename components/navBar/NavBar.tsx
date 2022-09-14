import Button from "../Button/Button";
import ButtonDropD from "../Button/ButtonDropD";
import SearchBar from "../searchBar/SearchBar";
//===========================================
import styles from "../../styles/NavBar.module.scss";
import { useState } from "react";
import Modal from "../modal/Modal";
//===========================================

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isLangOpen, setIsLangOpen] = useState<boolean>(false);

  console.log(isMenuOpen);

  function menuHandler(): void {
    setIsMenuOpen(!isMenuOpen);
  }
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
              fontSize="bold"
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
      <Modal st={isMenuOpen}>
        <div>hi hi</div>
      </Modal>
    </div>
  );
}
