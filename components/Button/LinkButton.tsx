import Link from "next/link";
import styles from "../../styles/Button.module.scss";

interface Props {
  href: string;
  name: string;
}

export default function LinkButton({ href, name }: Props) {
  return (
    <div className={styles.default}>
      <Link href={href}>{name}</Link>
    </div>
  );
}
