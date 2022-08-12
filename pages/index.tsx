import type { NextPage } from "next";
import FeedWide from "../components/feed/FeedWide";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <FeedWide />
    </div>
  );
};

export default Home;
