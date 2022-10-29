import NavActions from "./NavActions";
import NavLinks from "./NavLinks";
//======================================================
import styles from "./NavBar.module.scss";
import BurgerMenu from "../Icons/BurgerMenu";
//======================================================

interface Props {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}
export default function NavBar({ isMenuOpen, toggleMenu }: Props) {
  return (
    <div className={styles.container}>
      <BurgerMenu />
      <NavActions />
      <NavLinks isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </div>
  );
}
