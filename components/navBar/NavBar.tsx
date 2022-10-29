import NavActions from "./NavActions";
import NavLinks from "./NavLinks";
//======================================================
import styles from "./NavBar.module.scss";
import { useState } from "react";
import BurgerMenu from "../menu/burgerMenu/BurgerMenu";
//======================================================

interface Props {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}
export default function NavBar({ isMenuOpen, toggleMenu }: Props) {
  const [burgerOpen, setBurgerOpen] = useState(false);

  function burgerHandler() {
    setBurgerOpen((prev) => !prev);
  }

  function closeBurger() {
    setBurgerOpen(false);
  }
  return (
    <div className={styles.container}>
      <NavActions burgerHandler={burgerHandler} />
      <NavLinks isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <BurgerMenu show={burgerOpen} closeMenu={closeBurger} />
    </div>
  );
}
