import Image from "next/image";
import styles from "../../styles/FeedWide.module.scss";

import FeedInfo from "./FeedInfo";
export default function FeedWide() {
  return (
    <section className={styles.container}>
      <div className={styles.image}>
        <Image
          src="https://img.gocar.be/v7/_cloud_eurotax_/brands-vehicle/honda-1.jpg"
          alt="mccustom"
          width="300px"
          height="200px"
        />
      </div>
      <FeedInfo
        title="Free Fries Now. Free McDonalds Later.*"
        desc="Get free large Fries when you download the McDonalds app and join MyMcDonalds Rewards. Then, unlock free McDonalds faves only in the app with 1500 bonus points after your first purchase."
        legal="*Offer valid 1x thru the last day of the month for first time app users at participating McDonalds until 10/31/22. May take up to 48 hours to appear in your deals. Free Loyalty Reward Points valid 1x thru 12/31/22 for first time MyMcDonalds Rewards users. Program available only at participating McDonalds. Excludes delivery. McD app download and registration required."
      />
    </section>
  );
}
