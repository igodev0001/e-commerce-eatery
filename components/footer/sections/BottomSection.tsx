import Logo from "../../logo/Logo";
import styles from "./Sections.module.scss";

export default function BottomSection() {
  return (
    <div className={styles.bottom}>
      <div className={styles.terms}>
        <span>Privacy </span>
        <span>California Privacy Notice</span>
        <span>Terms & Conditions</span>
        <span>Digital Accessibility</span>
      </div>
      <div className={styles.logo}>
        <Logo size="s" />
      </div>
      <div className={styles.rights}>
        {"© 2017 - 2022 McDonald's. All Rights Reserved"}
      </div>
    </div>
  );
}
