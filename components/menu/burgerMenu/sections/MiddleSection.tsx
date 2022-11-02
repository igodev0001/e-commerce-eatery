import Link from "next/link";
import React from "react";
import styles from "./Sections.module.scss";

export default function MiddleSection() {
  return (
    <nav className={styles.middle}>
      <ul>
        <li>Our Menu</li>
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
