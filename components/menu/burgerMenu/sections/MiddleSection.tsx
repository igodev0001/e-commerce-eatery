import Link from "next/link";
import React, { useState } from "react";
import styles from "./Sections.module.scss";
import MenuList from "../../popup_menu/MenuList";
import useCategory from "../../../../hooks/useCategory";

export default function MiddleSection() {
  const [isShow, setIsShow] = useState(false);
  const { data } = useCategory();

  function menuHandle() {
    setIsShow((prev) => !prev);
  }

  return (
    <nav className={styles.middle}>
      <ul>
        <li>
          <button onClick={menuHandle}>Our Menu</button>
          <div>{isShow && <MenuList categories={data} form="burger" />}</div>
        </li>
        <li>
          <Link href="/download_app">Download App</Link>
        </li>
        <li>
          <Link href="/my_mcdonalds">MyMcDonald&apos;s Rewards</Link>
        </li>
        <li>
          <Link href="/deals">Exclusive Deals</Link>
        </li>
        <li>
          <Link href="/about_our_food">About Our Food</Link>
        </li>
        <li>
          <Link href="/restaurant_locator">Locate</Link>
        </li>
      </ul>
    </nav>
  );
}
