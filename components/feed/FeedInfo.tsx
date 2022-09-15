import styles from "../../styles/FeedInfo.module.scss";
import LinkButton from "../Button/LinkButton";

interface Props {
  title: string;
  desc: string;
  legal?: string;
  linkName: string;
  href: string;
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
      <LinkButton href={href} name={linkName} />
    </div>
  );
}
