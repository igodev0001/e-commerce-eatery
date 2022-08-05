import Image from "next/image";
//===========================================
import LogoImage from "../../public/images/McDonalds-Logo.png";
//===========================================
import styles from "./Logo.module.scss";
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
      <Image src={LogoImage} alt="logo" />
    </div>
  );
}
