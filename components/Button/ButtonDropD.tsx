import React from "react";
import { MdExpandMore } from "react-icons/md";

//===========================================
import styles from "../../styles/Button.module.scss";
//======================================================

interface ButtonProps {
  children: React.ReactNode;
  action: () => void;
  isOpen?: boolean;
  fontSize: string;
}

export default function ButtonDropD({
  children,
  action,
  isOpen,
  fontSize,
}: ButtonProps) {
  const arrowDirection = isOpen ? "arrowUp" : "";
  return (
    <button
      onClick={action}
      className={`${styles.dropDown} ${styles[fontSize]}`}
    >
      {children}
      <MdExpandMore
        size={20}
        className={`${styles.arrow} ${styles[arrowDirection]}`}
      />
    </button>
  );
}
