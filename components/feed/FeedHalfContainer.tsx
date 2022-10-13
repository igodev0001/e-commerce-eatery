import FeedHalf from "./FeedHalf";
//======================================================
import { Feeds } from "../../lib/types";
import styles from "./FeedHalfContainer.module.scss";
//======================================================

export default function FeedHalfContainer({ feed }: Feeds) {
  return (
    <div className={styles.container}>
      {feed.map((item) => (
        <FeedHalf key={item.id} feed={item} />
      ))}
    </div>
  );
}
