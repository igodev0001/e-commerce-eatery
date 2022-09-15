import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaTumblr,
  FaSpotify,
} from "react-icons/fa";
//==========================================
import googlePlay from "../../public/images/googlePlay.png";
import appStore from "../../public/images/appStore.png";
import Logo from "../logo/Logo";
//===========================================
import styles from "../../styles/Footer.module.scss";
//======================================================

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.wrapper}>
        <nav className={styles.top}>
          <div>
            <h4>About Us</h4>
            <ul>
              <li>About Us</li>
              <li>Our History</li>
              <li>Leadership Team</li>
              <li>Values In Action</li>
            </ul>
          </div>
          <div>
            <h4>Services</h4>
            <ul>
              <li>Services</li>
              <li>Wi-Fi</li>
              <li>Gift Cards</li>
              <li>PlayPlaces & Parties</li>
            </ul>
          </div>
          <div>
            <h4>Community</h4>
            <ul>
              <li>Community</li>
              <li>HACER® Scholarships for Hispanic Students</li>
              <li>Ronald McDonald House Charities</li>
              <li>McDonald’s Asian Pacific American</li>
            </ul>
          </div>
          <div>
            <h4>Contact Us</h4>
            <ul>
              <li>Contact Us</li>
              <li>Gift Card FAQs</li>
              <li>Donations</li>
              <li>Employment</li>
            </ul>
          </div>
        </nav>

        <div className={styles.bottom}>
          <div className={styles.social_media}>
            <div className={styles.left}>
              <div>
                <FaFacebookF />
              </div>
              <div>
                <FaTwitter />
              </div>

              <div>
                <FaYoutube />
              </div>
              <div>
                <FaInstagram />
              </div>
              <div>
                <FaTumblr />
              </div>
              <div>
                <FaSpotify />
              </div>
            </div>
            <div className={styles.right}>
              <div>
                <Image src={appStore} alt="google play" />
              </div>
              <div>
                <Image src={googlePlay} alt="googles play" />
              </div>
            </div>
          </div>
          <div className={styles.seperator}>
            <hr />
          </div>
          <div className={styles.legal_terms}>
            <div className={styles.terms}>
              <span>Privacy </span>
              <span>California Privacy Notice</span>
              <span>Terms & Conditions</span>
              <span>Digital Accessibility</span>
            </div>
            <div className={styles.logo}>
              <Logo size="s" />
            </div>
            <div className={styles.rights}>
              {"© 2017 - 2022 McDonald's. All Rights Reserved"}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
