import React from "react";
//===========================================
import styles from "../../styles/Button.module.scss";
//===========================================

interface ButtonProps {
  children: React.ReactNode;
  action: () => void;
}

export default function Button({ children, action }: ButtonProps) {
  return (
    <button onClick={action} className={`${styles.button} ${styles.yellow}`}>
      {children}
    </button>
  );
}
