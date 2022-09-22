import Link from "next/link";
import React from "react";
import FeedWide from "../feed/FeedWide";
import Dl_Component from "./Dl_Component";

import styles from "../../styles/DownloadApp.module.scss";
import useFetch from "../../hooks/useFetch";

interface Feed {
  id: number;
  title: string;
  desc: string;
  legal: string;
  image: string;
  linkName: string;
  href: string;
}

export default function Dl() {
  const feeds = useFetch("download_app");
  return (
    <div className={styles.container}>
      <h1>McDonald&apos;s App</h1>

      {feeds.data.map((item: Feed) => (
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

      <Dl_Component />
      <div className={styles.desc}>
        <h2>Deals and Much More</h2>
        <p>
          With the McDonald’s app, you’ll get access to{" "}
          <Link href="/deals">exclusive deals</Link> . Use the app to order
          ahead and pass the line with Mobile Order & Pay plus join{" "}
          <Link href="/my_mcdonalds">MyMcDonald’s Rewards</Link> to earn points
          on every order to redeem for free McDonald&apos;s.
        </p>
      </div>
    </div>
  );
}
