import Image from "next/image";
import Link from "next/link";

//===========================================
import LogoImage from "../../public/images/McDonalds-Logo.png";
//===========================================
import styles from "../../styles/Logo.module.scss";
//===========================================

interface Props {
  size: string;
}

export default function Logo({ size }: Props) {
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
          <Image src={LogoImage} alt="logo" />
        </Link>
      ) : (
        <Image src={LogoImage} alt="logo" />
      )}
    </div>
  );
}
