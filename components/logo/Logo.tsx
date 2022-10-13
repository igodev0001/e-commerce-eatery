import Image from "next/image";
import Link from "next/link";
//===========================================
import LogoImage from "../../public/images/McDonalds-Logo.png";
//===========================================
import { LogoSize } from "../../lib/types";
import styles from "./Logo.module.scss";
//===========================================

export default function Logo({ size }: LogoSize) {
  let dynamicSize;
  if (size === "l") {
    dynamicSize = "largeSize";
  } else if (size === "m") {
    dynamicSize = "mediumSize";
  } else {
    dynamicSize = "smallSize";
  }

  return (
    <div className={`${styles.container}  ${styles[dynamicSize]}`}>
      {size === "l" ? (
        <Link href="/">
          <a>
            <Image src={LogoImage} alt="logo" />
          </a>
        </Link>
      ) : (
        <Image src={LogoImage} alt="logo" />
      )}
    </div>
  );
}
