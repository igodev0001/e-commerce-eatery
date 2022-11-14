//==========================================

//===========================================
import styles from "./Footer.module.scss";
import BottomSection from "./sections/BottomSection";
import MiddleSection from "./sections/MiddleSection";
import TopSection from "./sections/TopSection";
//======================================================

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.wrapper}>
        <TopSection />
        <MiddleSection />
        <div className={styles.seperator}>
          <hr />
        </div>
        <BottomSection />
      </div>
    </footer>
  );
}
