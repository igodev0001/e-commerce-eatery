import React, { useState } from "react";
//======================================================
import Button from "../Button/Button";
import ButtonDropD from "../Button/ButtonDropD";
import SearchBar from "../searchBar/SearchBar";
//======================================================
import styles from "./NavBar.module.scss";
//======================================================

export default function NavActions() {
  const [isLangOpen, setIsLangOpen] = useState<boolean>(false);

  function langHandler(): void {
    setIsLangOpen(!isLangOpen);
  }

  function OrderHandler(): void {
    console.log("hello");
  }

  return (
    <nav className={styles.actions}>
      <div className={styles.options}>
        <ButtonDropD action={langHandler} isOpen={isLangOpen} fontSize="normal">
          Language
        </ButtonDropD>
        <span>Sign up for email</span>
        <span>Careers</span>
      </div>
      <div className={styles.action}>
        <SearchBar />
        <Button action={OrderHandler}>Order Now</Button>
      </div>
    </nav>
  );
}
