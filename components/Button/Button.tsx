import React from "react";
//===========================================
import styles from "./Button.module.scss";
//===========================================

interface ButtonProps {
  children: React.ReactNode;
  action: () => void;
}

export default function Button({ children, action }: ButtonProps) {
  return (
    <button onClick={action} className={styles.button}>
      {children}
    </button>
  );
}
