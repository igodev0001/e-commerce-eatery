import { useEffect, useState } from "react";
import { useRouter } from "next/router";
//===========================================
import Logo from "../logo/Logo";
import NavBar from "../navBar/NavBar";
import MenuPopup from "../menu/popup_menu/MenuPopup";
//===========================================
import styles from "./Header.module.scss";
import BurgerMenuIcon from "../Icons/BurgerMenuIcon";
import BurgerMenu from "../menu/burgerMenu/BurgerMenu";
//===========================================

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (router.pathname) {
      setIsMenuOpen(false);
    }
  }, [router.pathname]);

  function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  function burgerHandler() {
    setIsBurgerOpen((prev) => !prev);
  }

  function closeBurger() {
    setIsBurgerOpen(false);
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Logo size="l" />
        {!isBurgerOpen && <BurgerMenuIcon burgerHandler={burgerHandler} />}
        <NavBar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <MenuPopup isMenuOpen={isMenuOpen} closeMenu={closeMenu} />
        <BurgerMenu show={isBurgerOpen} closeMenu={closeBurger} />
      </div>
    </div>
  );
}
