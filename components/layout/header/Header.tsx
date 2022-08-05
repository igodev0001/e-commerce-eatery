import React from "react";
import Image from "next/image";
import Link from "next/link";
//=============
import styles from "./Header.module.scss";
//=============
import SearchBar from "../../searchBar/SearchBar";
import Button from "../../Button/Button";
import Logo from "../../../public/images/McDonalds-Logo.png";
import { MdOutlineLocationOn } from "react-icons/md";

const { container, logo, nav, nav_links, nav_menu, wrapper, actions } = styles;

export default function Header() {
  function OrderHandler(): void {
    console.log("hello");
  }

  return (
    <div className={container}>
      <div className={wrapper}>
        <div className={logo}>
          <Image src={Logo} alt="logo" />
        </div>
        <div className={nav}>
          <nav className={nav_links}>
            <div>
              <p>Language</p>
              <p>Sign up for email</p>
              <p>Careers</p>
            </div>
            <div className={actions}>
              <SearchBar />
              <Button action={OrderHandler}>Order Now</Button>
            </div>
          </nav>
          <div className={nav_menu}>
            <p>Our Menu</p>
            <p>Download App</p>
            <p>MyMcDonald Rewards</p>
            <p>Exclusive Deals</p>
            <p>About Our Food</p>
            <p>Locate</p>
          </div>
        </div>
      </div>
    </div>
  );
}
