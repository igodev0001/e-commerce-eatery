import { MdExpandMore } from "react-icons/md";
//===========================================
import { ButtonDrop } from "../../lib/types";
import styles from "./Button.module.scss";
//======================================================

export default function ButtonDropD({
  children,
  action,
  isOpen,
  fontSize,
}: ButtonDrop) {
  const arrowDirection = isOpen ? "arrowUp" : "";
  const fontWeight = isOpen ? "bold" : "normal";
  return (
    <button
      onClick={action}
      className={`${styles.dropDown} ${styles[fontSize]} ${styles[fontWeight]}`}
    >
      {children}
      <MdExpandMore
        size={20}
        className={`${styles.arrow} ${styles[arrowDirection]} `}
      />
    </button>
  );
}
