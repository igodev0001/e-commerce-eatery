//======================================================
import NavActions from "./NavActions";
import NavLinks from "./NavLinks";
//======================================================
import styles from "../../styles/NavBar.module.scss";
//======================================================

export default function NavBar() {
  return (
    <div className={styles.container}>
      <NavActions />
      <NavLinks />
    </div>
  );
}
