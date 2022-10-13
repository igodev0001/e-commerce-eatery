import Image from "next/image";
//======================================================
import Banner1 from "../../public/images/myMcBanner1.jpeg";
import Banner2 from "../../public/images/myMcBanner2.jpeg";
import Banner3 from "../../public/images/myMcBanner3.jpeg";
//======================================================
import styles from "./MyMcDonaldsBanner.module.scss";
//======================================================

export default function MyMcDonaldsBanner() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.image}>
          <Image src={Banner1} alt="Earn Points" />
        </div>
        <h2>Easily Earn Points</h2>
        <div className={styles.desc}>
          <p>
            Select the &apos;Earn Points&apos; tab in the McDonald&apos;s app
            found on the bottom menu bar. Access the 4-digit Drive Thru Code or
            code to scan at the counter or kiosk. When you place your order in
            the app, you&apos;ll automatically earn your points.
          </p>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.image}>
          <Image src={Banner2} alt="Pay & Earn" />
        </div>
        <h2>Pay & Earn All in One Step</h2>
        <div className={styles.desc}>
          <p>
            Link your card details to the app so you can conveniently pay and
            earn points at the same time—including an extra 1500 Bonus Points on
            your first payment using your linked card. Then, simply tell us your
            Drive Thru code before placing your order at the speaker or scan the
            code in-restaurant.
          </p>
          <span>
            *Bonus points may take up to 10 days to appear in your account.
            Rewards program available only at participating McDonald&apos;s.
            Excludes delivery. McDonald&apos;s app download and registration
            required.
          </span>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.image}>
          <Image src={Banner3} alt="Redeem Free" />
        </div>
        <h2>Redeem Free McDonald&apos;s</h2>
        <div className={styles.desc}>
          <p>
            Go to the Rewards & Deals tab. There you can select the menu item
            you want to redeem. Choose &apos;Use at Restaurant&apos; to get the
            Drive Thru code, or select &apos;Use Restaurant Code&apos; when
            you&apos;re inside to reveal the code to use at the counter or
            kiosk.
          </p>
        </div>
      </div>
    </div>
  );
}
