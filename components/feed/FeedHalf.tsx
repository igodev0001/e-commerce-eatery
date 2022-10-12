import Image from "next/image";
//======================================================
import FeedInfo from "./FeedInfo";
//======================================================
import styles from "./FeedHalf.module.scss";
//======================================================
interface Props {
  title: string;
  desc: string;
  legal?: string;
  image: string;
  linkName?: string;
  href?: string;
  size: string;
}

export default function FeedHalf({
  title,
  desc,
  legal,
  linkName,
  href,
  image,
  size,
}: Props) {
  return (
    <section className={styles.container}>
      <div className={styles.image}>
        <Image src={image} alt="mccustom" width="573px" height="383px" />
      </div>
      <FeedInfo
        title={title}
        desc={desc}
        legal={legal}
        linkName={linkName}
        href={href}
        size={size}
      />
    </section>
  );
}
