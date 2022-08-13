import Image, { StaticImageData } from "next/image";
import React from "react";
import styles from "../../styles/FeedWide.module.scss";

import FeedInfo from "./FeedInfo";

interface Props {
  title: string;
  desc: string;
  legal: string;
  linkName: string;
  href: string;
  banner: StaticImageData;
}

export default function FeedWide({
  title,
  desc,
  legal,
  linkName,
  href,
  banner,
}: Props) {
  return (
    <section className={styles.container}>
      <div className={styles.image}>
        <Image src={banner} alt="mccustom" layout="responsive" />
      </div>
      <FeedInfo
        title={title}
        desc={desc}
        legal={legal}
        linkName={linkName}
        href={href}
      />
    </section>
  );
}
