import styles from "../../styles/FeedInfo.module.scss";
import LinkButton from "../Button/LinkButton";

interface Props {
  title: string;
  desc: string;
  legal: string;
}

export default function FeedInfo({ title, desc, legal }: Props) {
  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      <p>{desc}</p>
      <span>{legal}</span>
      <LinkButton href="dfdfs" name="sdfs" />
    </div>
  );
}
