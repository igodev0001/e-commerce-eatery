import styles from "../../styles/FeedHalfContainer.module.scss";
import FeedHalf from "./FeedHalf";

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
export default function FeedHalfContainer({ feed }: Props) {
  return (
    <div className={styles.container}>
      {feed.map((item) => (
        <FeedHalf
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
    </div>
  );
}
