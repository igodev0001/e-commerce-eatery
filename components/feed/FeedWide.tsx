import Image from "next/image";
//======================================================
import FeedInfo from "./FeedInfo";
//======================================================
import { FeedWideProp } from "../../lib/types";
import styles from "./FeedWide.module.scss";
//======================================================

export default function FeedWide({ feed, height, width }: FeedWideProp) {
  const image = feed && feed.image;
  return (
    <section className={styles.container}>
      <div className={styles.image}>
        <Image
          src={image}
          alt="mccustom"
          width={width ? width : "748px"}
          height={height ? height : "333px"}
        />
      </div>
      <FeedInfo feed={feed} />
    </section>
  );
}
