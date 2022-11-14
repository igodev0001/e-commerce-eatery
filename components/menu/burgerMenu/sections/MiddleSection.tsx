import Link from "next/link";
import React, { useState } from "react";
import styles from "./Sections.module.scss";
import MenuList from "../../popup_menu/MenuList";
import useCategory from "../../../../hooks/useCategory";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import LinkButton from "../../../Button/LinkButton";

export default function MiddleSection() {
  const [isShow, setIsShow] = useState(false);
  const { data } = useCategory();

  function menuHandle() {
    setIsShow((prev) => !prev);
  }

  return (
    <nav className={styles.middle}>
      <ul className={styles.burgerMenuList}>
        <li>
          <button onClick={menuHandle} className={styles.ourMenu}>
            <span>Our Menu</span>
            <span>{isShow ? <AiOutlineMinus /> : <AiOutlinePlus />}</span>
          </button>

          {isShow && (
            <div className={styles.drawer}>
              <LinkButton
                href="/full_menu"
                name="View Full Menu"
                style="transparent"
              />
              <MenuList categories={data} form="burger" />
            </div>
          )}
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
