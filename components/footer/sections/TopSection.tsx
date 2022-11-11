import useWindowSize from "../../../hooks/useWindowSize";
import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import styles from "./Sections.module.scss";

export default function TopSection() {
  const { width } = useWindowSize();
  const [isShow, setIsShow] = useState({
    about: false,
    services: false,
    community: false,
    contact: false,
  }) as any;

  function menuHandle(event: React.MouseEvent<HTMLButtonElement>) {
    const name: string = event.currentTarget.name;
    setIsShow({ ...isShow, [name]: !isShow[name] });
    console.log(isShow[name]);
  }

  return (
    <nav className={styles.top}>
      <div className={styles.item}>
        <div className={styles.title}>
          <h4>About Us</h4>
          <button onClick={menuHandle} name="about">
            <span>{isShow.about ? <AiOutlineMinus /> : <AiOutlinePlus />}</span>
          </button>
        </div>
        {(width > 1023 || isShow.about) && (
          <ul className={`${styles.footerList}`}>
            <li>About Us</li>
            <li>Our History</li>
            <li>Leadership Team</li>
            <li>Values In Action</li>
          </ul>
        )}
      </div>
      <div className={styles.item}>
        <div className={styles.title}>
          <h4>Services</h4>
          <button onClick={menuHandle} name="services">
            <span>
              {isShow.services ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </span>
          </button>
        </div>
        {(width > 1023 || isShow.services) && (
          <ul className={`${styles.footerList}`}>
            <li>Services</li>
            <li>Wi-Fi</li>
            <li>Gift Cards</li>
            <li>PlayPlaces & Parties</li>
          </ul>
        )}
      </div>
      <div className={styles.item}>
        <div className={styles.title}>
          <h4>Community</h4>
          <button onClick={menuHandle} name="community">
            <span>
              {isShow.community ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </span>
          </button>
        </div>
        {(width > 1023 || isShow.community) && (
          <ul className={`${styles.footerList}`}>
            <li>Community</li>
            <li>HACER® Scholarships for Hispanic Students</li>
            <li>Ronald McDonald House Charities</li>
            <li>McDonald’s Asian Pacific American</li>
          </ul>
        )}
      </div>
      <div className={styles.item}>
        <div className={styles.title}>
          <h4>Contact Us</h4>
          <button onClick={menuHandle} name="contact">
            <span>
              {isShow.contact ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </span>
          </button>
        </div>
        {(width > 1023 || isShow.contact) && (
          <ul className={`${styles.footerList}`}>
            <li>Contact Us</li>
            <li>Gift Card FAQs</li>
            <li>Donations</li>
            <li>Employment</li>
          </ul>
        )}
      </div>
    </nav>
  );
}
