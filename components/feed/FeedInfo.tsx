import LinkButton from "../Button/LinkButton";
//======================================================
import { Feed } from "../../lib/types";
import styles from "./FeedInfo.module.scss";
//======================================================

export default function FeedInfo({ feed }: Feed) {
  return (
    <div className={styles.container}>
      <h2>{feed.title}</h2>
      <div className={styles.desc}>
        <p>{feed.desc}</p>
        <span>{feed.legal}</span>
      </div>
      {feed.linkName && feed.href && (
        <LinkButton href={feed.href} name={feed.linkName} style="yellow" />
      )}
    </div>
  );
}
