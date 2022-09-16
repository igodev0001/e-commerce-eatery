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
  image: string;
  linkName: string;
  href: string;
}

export default function FeedWide({
  title,
  desc,
  legal,
  linkName,
  href,
  image,
}: Props) {
  return (
    <section className={styles.container}>
      <div className={styles.image}>
        <Image src={image} alt="mccustom" width="900px" height="400px" />
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
