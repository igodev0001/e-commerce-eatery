import { GiHamburgerMenu } from "react-icons/gi";
import styles from "./Icons.module.scss";

export default function BurgerMenu() {
  return (
    <div className={styles.burgerMenu}>
      <GiHamburgerMenu />
    </div>
  );
}
