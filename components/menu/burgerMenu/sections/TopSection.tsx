import React from "react";

import styles from "./Sections.module.scss";

export default function TopSection() {
  return (
    <nav className={styles.top}>
      <span>Language</span>
      <span>Sign Up for Email</span>
      <span>Careers</span>
    </nav>
  );
}
