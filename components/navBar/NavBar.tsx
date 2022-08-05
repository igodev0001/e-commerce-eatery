import Button from "../button/Button";
import SearchBar from "../searchBar/SearchBar";
//===========================================
import styles from "./NavBar.module.scss";
//===========================================

export default function NavBar() {
  function OrderHandler(): void {
    console.log("hello");
  }

  return (
    <div className={styles.container}>
      <nav className={styles.nav_links}>
        <div>
          <p>Language</p>
          <p>Sign up for email</p>
          <p>Careers</p>
        </div>
        <div className={styles.actions}>
          <SearchBar />
          <Button action={OrderHandler}>Order Now</Button>
        </div>
      </nav>
      <nav className={styles.nav_menu}>
        <p>Our Menu</p>
        <p>Download App</p>
        <p>MyMcDonald Rewards</p>
        <p>Exclusive Deals</p>
        <p>About Our Food</p>
        <p>Locate</p>
      </nav>
    </div>
  );
}
