import styles from "./ExclusiveDeals.module.scss";
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

export default function ExclusiveDeals({ feed }: Props) {
  const wideFeed = feed.filter((item) => item.size === "wide");
  const halfFeedLink = feed.filter((item) => item.size === "half" && item.href);

  return (
    <div className={styles.container}>
      <h1>Exclusive McDonald&apos;s Deals</h1>

      <div className={styles.feed}>
        {wideFeed.map(
          (item, index) =>
            index === 0 && (
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
            )
        )}

        <FeedHalfContainer feed={halfFeedLink} />
        {wideFeed.map(
          (item, index) =>
            index !== 0 && (
              <FeedWide
                key={item.id}
                title={item.title}
                desc={item.desc}
                legal={item.legal}
                image={item.image}
                linkName={item.linkName}
                href={item.href}
                size={item.size}
                width="339.8px"
                height="227.7px"
              />
            )
        )}
      </div>
    </div>
  );
}
