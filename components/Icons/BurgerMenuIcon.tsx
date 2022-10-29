import { GiHamburgerMenu } from "react-icons/gi";
import styles from "./Icons.module.scss";

interface Props {
  burgerHandler: () => void;
}

export default function BurgerMenuIcon({ burgerHandler }: Props) {
  return (
    <button className={styles.burgerMenu} onClick={burgerHandler}>
      <GiHamburgerMenu />
    </button>
  );
}
