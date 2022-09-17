//===========================================
import Logo from "../logo/Logo";
import NavBar from "../navBar/NavBar";
//===========================================
import styles from "../../styles/Header.module.scss";
import useCategory from "../../hooks/useCategory";
//===========================================

export default function Header() {
  useCategory();

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Logo size="l" />

        <NavBar />
      </div>
    </div>
  );
}
