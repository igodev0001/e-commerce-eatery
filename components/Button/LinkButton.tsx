import Link from "next/link";
//======================================================
import styles from "../../styles/Button.module.scss";
//======================================================

interface Props {
  href: string;
  name: string;
  style: string;
}

export default function LinkButton({ href, name, style }: Props) {
  const bgColor = style === "yellow" ? "yellow" : "transparent";
  return (
    <div className={`${styles.button} ${styles[bgColor]}`}>
      <Link href={href}>{name}</Link>
    </div>
  );
}
