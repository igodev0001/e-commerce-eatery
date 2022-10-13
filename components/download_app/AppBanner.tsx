import Image from "next/image";
//========================================================
import appStore from "../../public/images/appStore.png";
import googlePlay from "../../public/images/googlePlay.png";
//========================================================
import styles from "./DownloadApp.module.scss";
//========================================================

export default function AppBanner() {
  return (
    <div className={styles.banner}>
      <div className={styles.img}>
        <Image
          src="https://www.mcdonalds.com/content/dam/sites/usa/nfl/images/AppPromo_DownloadApp_475x360.jpg"
          alt="download"
          width="497px"
          height="384px"
        />
      </div>
      <div className={styles.info}>
        <h2>Deliciousness At Your Fingertips</h2>
        <span>Download the app for exclusive deals and easy ordering.</span>
        <div className={styles.icon}>
          <div>
            <Image src={appStore} alt="appStore" />
          </div>
          <div>
            <Image src={googlePlay} alt="googlePlay" />
          </div>
        </div>
      </div>
    </div>
  );
}
