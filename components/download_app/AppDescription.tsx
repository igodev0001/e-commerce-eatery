import Link from "next/link";
import styles from "../../styles/DownloadApp.module.scss";
export default function AppDescription() {
  return (
    <div className={styles.desc}>
      <h2>Deals and Much More</h2>
      <p>
        With the McDonald’s app, you’ll get access to{" "}
        <Link href="/deals">exclusive deals</Link> . Use the app to order ahead
        and pass the line with Mobile Order & Pay plus join{" "}
        <Link href="/my_mcdonalds">MyMcDonald’s Rewards</Link> to earn points on
        every order to redeem for free McDonald&apos;s.
      </p>
    </div>
  );
}
