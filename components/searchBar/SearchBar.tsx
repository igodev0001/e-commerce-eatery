import styles from "./SearchBar.module.scss";
//===========================================
export default function SearchBar() {
  return (
    <form className={styles.container}>
      <input type="search" placeholder="search" />
    </form>
  );
}
