import LinkButton from "../Button/LinkButton";
//======================================================
import styles from "../../styles/FeedInfo.module.scss";
//======================================================

interface Props {
  title: string;
  desc: string;
  legal?: string;
  linkName?: string;
  href?: string;
  size: string;
}

export default function FeedInfo({
  title,
  desc,
  legal,
  linkName,
  href,
}: Props) {
  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      <div className={styles.desc}>
        <p>{desc}</p>
        <span>{legal}</span>
      </div>
      {linkName && href && (
        <LinkButton href={href} name={linkName} style="yellow" />
      )}
    </div>
  );
}
