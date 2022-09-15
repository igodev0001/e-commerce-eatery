import Image from "next/image";
//======================================================
import FeedInfo from "./FeedInfo";
//======================================================
import styles from "../../styles/FeedWide.module.scss";
//======================================================

interface Props {
  title: string;
  desc: string;
  legal?: string;
  linkName: string;
  href: string;
  banner: string;
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
        <Image src={banner} alt="mccustom" width="900px" height="400px" />
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
