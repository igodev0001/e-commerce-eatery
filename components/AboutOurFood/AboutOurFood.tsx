import Image from "next/image";
//========================================================
import FeedHalfContainer from "../feed/FeedHalfContainer";
//========================================================
import { Feeds } from "../../lib/types";
import styles from "./About.module.scss";
//========================================================

export default function AboutOurFood({ feed }: Feeds) {
  const halfFeedLink = feed.filter((item) => item.size === "half" && item.href);

  return (
    <div className={styles.container}>
      <h1>About Our Food</h1>
      <Image
        src="https://s7d1.scene7.com/is/image/mcdonalds/About_Our_Food_Hero_1260x560_Desktop:hero-desktop?op_usm=1.7,1,15,0&resmode=sharp2"
        alt="about_our_food"
        width="1170"
        height="520.88"
      />
      <div className={styles.feed}>
        <div className={styles.parag}>
          <h2>We’re Passionate About Our Food</h2>

          <p>
            From adding more balanced options to our Happy Meal®, to serving up
            fresh beef Quarter Pounder® burgers that are cooked when you order,
            we’re always finding ways to show our commitment to our customers
            and our food.
          </p>
        </div>

        <FeedHalfContainer feed={halfFeedLink} />
      </div>
    </div>
  );
}
