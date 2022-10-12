import Image from "next/image";
//======================================================
import FeedInfo from "./FeedInfo";
//======================================================
import styles from "./FeedWide.module.scss";
//======================================================

interface Props {
  title: string;
  desc: string;
  legal?: string;
  image: string;
  linkName?: string;
  href?: string;
  size: string;
  width?: string;
  height?: string;
}

export default function FeedWide({
  title,
  desc,
  legal,
  linkName,
  href,
  image,
  size,
  width,
  height,
}: Props) {
  return (
    <section className={styles.container}>
      <div className={styles.image}>
        <Image
          src={image}
          alt="mccustom"
          width={width ? width : "748px"}
          height={height ? height : "333px"}
        />
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
