import Link from "next/link";
//======================================================
import { Button_Link } from "../../lib/types";
import styles from "./Button.module.scss";
//======================================================

export default function LinkButton({ href, name, style }: Button_Link) {
  const bgColor = style === "yellow" ? "yellow" : "transparent";
  return (
    <div className={`${styles.button} ${styles[bgColor]}`}>
      <Link href={href}>{name}</Link>
    </div>
  );
}
