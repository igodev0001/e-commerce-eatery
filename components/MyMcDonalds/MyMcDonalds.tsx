import styles from "./MyMcDonalds.module.scss";
import FeedHalfContainer from "../feed/FeedHalfContainer";
import FeedWide from "../feed/FeedWide";
import MyMcDonaldsBanner from "./MyMcDonalsBanner";
import { Feeds } from "../../lib/types";

export default function MyMcDonalds({ feed }: Feeds) {
  const wideFeed = feed.filter((item) => item.size === "wide");
  const halfFeedLink = feed.filter((item) => item.size === "half" && item.href);
  const pointsFeed = feed.filter((item) => item.size === "half" && !item.href);

  return (
    <div className={styles.container}>
      <h1>MyMcDonald&apos;s Rewards</h1>
      <p>
        With the McDonald&apos;s app, you can earn points on every order to
        redeem for free McDonald&apos;s. Plus, get access to exclusive daily
        deals, easily re-order faves and select convenient pickup options with
        Mobile Order & Pay.
      </p>

      <div className={styles.feed}>
        {wideFeed.map((item) => (
          <FeedWide key={item.id} feed={item} />
        ))}

        <FeedHalfContainer feed={halfFeedLink} />
        <div className={styles.parag}>
          <h2>How to Earn Points and Redeem Faves</h2>
          <p>
            Order like a pro––all it takes is one code or one scan to earn
            MyMcDonald&apos;s Rewards points, quickly pay and redeem your
            favorites.
          </p>
        </div>
        <MyMcDonaldsBanner />
        <div className={styles.parag}>
          <h2>More Points Unlock More Rewards</h2>
          <p>
            It&apos;s easy to track your McDonald&apos;s points and see how far
            you are from unlocking the next tier of free McDonald&apos;s.
          </p>
        </div>
        <FeedHalfContainer feed={pointsFeed} />
      </div>
    </div>
  );
}
