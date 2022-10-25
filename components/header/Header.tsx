import { useEffect, useState } from "react";
import { useRouter } from "next/router";
//===========================================
import Logo from "../logo/Logo";
import NavBar from "../navBar/NavBar";
import MenuPopup from "../menu/popup_menu/MenuPopup";
//===========================================
import styles from "./Header.module.scss";
//===========================================

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    if (router.pathname) {
      setIsMenuOpen(false);
    }
  }, [router.pathname]);

  function menuHandler() {
    setIsMenuOpen((prev) => !prev);
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Logo size="l" />
        <NavBar isMenuOpen={isMenuOpen} toggleMenu={menuHandler} />
        <MenuPopup isMenuOpen={isMenuOpen} />
      </div>
    </div>
  );
}
