import FeedWide from "../feed/FeedWide";
import AppBanner from "./AppBanner";
import AppDescription from "./AppDescription";
//========================================================
import { Feeds } from "../../lib/types";
import styles from "./DownloadApp.module.scss";
//========================================================

export default function DownloadApp({ feed }: Feeds) {
  return (
    <div className={styles.container}>
      <h1>McDonald&apos;s App</h1>

      {feed.map((item) => (
        <FeedWide key={item.id} feed={item} />
      ))}

      <AppBanner />
      <AppDescription />
    </div>
  );
}
