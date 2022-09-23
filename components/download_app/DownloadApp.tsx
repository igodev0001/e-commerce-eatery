import React from "react";
import FeedWide from "../feed/FeedWide";
import AppBanner from "./AppBanner";

import styles from "../../styles/DownloadApp.module.scss";
import AppDescription from "./AppDescription";

interface Props {
  feed: {
    id: number;
    title: string;
    desc: string;
    legal: string;
    image: string;
    linkName: string;
    href: string;
  }[];
}
export default function DownloadApp({ feed }: Props) {
  return (
    <div className={styles.container}>
      <h1>McDonald&apos;s App</h1>

      {feed.map((item) => (
        <FeedWide
          key={item.id}
          title={item.title}
          desc={item.desc}
          legal={item.legal}
          image={item.image}
          linkName={item.linkName}
          href={item.href}
        />
      ))}

      <AppBanner />
      <AppDescription />
    </div>
  );
}
