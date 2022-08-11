import Button from "../button/Button";
import SearchBar from "../searchBar/SearchBar";
//===========================================
import { MdExpandMore } from "react-icons/md";
import styles from "../../styles/NavBar.module.scss";
//===========================================

export default function NavBar() {
  function OrderHandler(): void {
    console.log("hello");
  }

  return (
    <div className={styles.container}>
      <nav className={styles.nav_links}>
        <div>
          <span>
            <p>Language</p>
            <MdExpandMore size={18} />
          </span>
          <p>Sign up for email</p>
          <p>Careers</p>
        </div>
        <div className={styles.actions}>
          <SearchBar />
          <Button action={OrderHandler}>Order Now</Button>
        </div>
      </nav>
      <nav className={styles.nav_menu}>
        <span>
          <p>Our Menu</p>
          <MdExpandMore size={20} />
        </span>
        <p>Download App</p>
        <p>MyMcDonald Rewards</p>
        <p>Exclusive Deals</p>
        <p>About Our Food</p>
        <p>Locate</p>
      </nav>
    </div>
  );
}
