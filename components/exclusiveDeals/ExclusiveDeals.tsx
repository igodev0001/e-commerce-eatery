import FeedHalfContainer from "../feed/FeedHalfContainer";
import FeedWide from "../feed/FeedWide";
//========================================================
import { Feeds } from "../../lib/types";
import styles from "./ExclusiveDeals.module.scss";
//========================================================

export default function ExclusiveDeals({ feed }: Feeds) {
  const wideFeed = feed.filter((item) => item.size === "wide");
  const halfFeedLink = feed.filter((item) => item.size === "half" && item.href);

  return (
    <div className={styles.container}>
      <h1>Exclusive McDonald&apos;s Deals</h1>

      <div className={styles.feed}>
        {wideFeed.map(
          (item, index) => index === 0 && <FeedWide key={item.id} feed={item} />
        )}

        <FeedHalfContainer feed={halfFeedLink} />
        {wideFeed.map(
          (item, index) =>
            index !== 0 && (
              <FeedWide
                key={item.id}
                feed={item}
                width="339.8px"
                height="227.7px"
              />
            )
        )}
      </div>
    </div>
  );
}
