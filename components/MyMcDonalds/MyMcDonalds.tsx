import styles from "../../styles/MyMcDonalds.module.scss";
import FeedHalfContainer from "../feed/FeedHalfContainer";
import FeedWide from "../feed/FeedWide";

interface Props {
  feed: {
    id: number;
    title: string;
    desc: string;
    legal?: string;
    image: string;
    linkName?: string;
    href?: string;
    size: string;
  }[];
}

export default function MyMcDonalds({ feed }: Props) {
  const wideFeed = feed.filter((item) => item.size === "wide");
  const halfFeedLink = feed.filter((item) => item.size === "half" && item.href);

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
          <FeedWide
            key={item.id}
            title={item.title}
            desc={item.desc}
            legal={item.legal}
            image={item.image}
            linkName={item.linkName}
            href={item.href}
            size={item.size}
          />
        ))}

        <FeedHalfContainer feed={halfFeedLink} />
      </div>
    </div>
  );
}
