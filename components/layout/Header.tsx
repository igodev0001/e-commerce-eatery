import React from "react";
import Image from "next/image";
import Link from "next/link";

import Logo from "../../public/images/McDonalds-Logo.png";

import styles from "./Header.module.scss";

const { container, logo, nav, nav_links, nav_menu, wrapper } = styles;

export default function Header() {
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
            <div>
              <input type="search" placeholder="search" />
              <p>location</p>
              <button>Order Now</button>
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
