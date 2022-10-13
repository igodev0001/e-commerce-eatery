import Image from "next/image";
//======================================================
import FeedInfo from "./FeedInfo";
//======================================================
import { Feed } from "../../lib/types";
import styles from "./FeedHalf.module.scss";
//======================================================

export default function FeedHalf({ feed }: Feed) {
  return (
    <section className={styles.container}>
      <div className={styles.image}>
        <Image src={feed.image} alt="mccustom" width="573px" height="383px" />
      </div>
      <FeedInfo feed={feed} />
    </section>
  );
}
