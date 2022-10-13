//======================================================
import { Button_Simple } from "../../lib/types";
import styles from "./Button.module.scss";
//======================================================

export default function Button({ children, action }: Button_Simple) {
  return (
    <button onClick={action} className={`${styles.button} ${styles.yellow}`}>
      {children}
    </button>
  );
}
