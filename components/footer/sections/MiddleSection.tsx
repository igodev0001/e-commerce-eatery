import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaSpotify,
  FaTumblr,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import styles from "./Sections.module.scss";
import googlePlay from "../../../public/images/googlePlay.png";
import appStore from "../../../public/images/appStore.png";

export default function MiddleSection() {
  return (
    <div className={styles.middle}>
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
  );
}
