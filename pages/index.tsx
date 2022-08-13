import type { NextPage } from "next";
import FeedWide from "../components/feed/FeedWide";
import Banner1 from "../public/images/banner.jpeg";
import Banner2 from "../public/images/banner2.jpeg";

const Home: NextPage = () => {
  return (
    <div>
      <FeedWide
        title="Let’s Celebrate Restaurant Crew and Managers"
        desc="Join us by sharing a story about your favorite experience with one of the crew members or managers.*"
        legal="*Most McDonald’s restaurants are operated by independent franchisees who are solely responsible for setting the employment policies and practices, including pay and benefits, for the people working in their restaurants. McDonald’s USA has no control over employment matters at any franchisee’s restaurant(s)."
        linkName="Submit Your Story"
        href="https://www.google.com"
        banner={Banner1}
      />
      <FeedWide
        title="
        Free Fries Now. Free McDonald’s Later.*"
        desc="Get free large Fries when you download the McDonald’s app and join MyMcDonald’s Rewards. Then, unlock free McDonald’s faves only in the app with 1500 bonus points after your first purchase."
        legal="*Offer valid 1x thru the last day of the month for first time app users at participating McDonald's until 10/31/22. May take up to 48 hours to appear in your deals. Free Loyalty Reward Points valid 1x thru 12/31/22 for first time MyMcDonald’s Rewards users. Program available only at participating McDonald’s. Excludes delivery. McD app download and registration required."
        linkName="Download App"
        href="https://www.google.com"
        banner={Banner2}
      />
    </div>
  );
};

export default Home;
