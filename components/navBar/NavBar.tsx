import NavActions from "./NavActions";
import NavLinks from "./NavLinks";
//======================================================
import styles from "./NavBar.module.scss";
//======================================================

interface Props {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}
export default function NavBar({ isMenuOpen, toggleMenu }: Props) {
  return (
    <div className={styles.container}>
      <NavActions />
      <NavLinks isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </div>
  );
}
