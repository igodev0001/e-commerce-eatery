import type { NextPage } from "next";
//=====================================================
import FeedWide from "../components/feed/FeedWide";
import useCategoriy from "../hooks/useCategoriy";
//=====================================================

const Home: NextPage = () => {
  useCategoriy();

  return (
    <div>
      <FeedWide
        title="Let’s Celebrate Restaurant Crew and Managers"
        desc="Join us by sharing a story about your favorite experience with one of the crew members or managers.*"
        legal="*Most McDonald’s restaurants are operated by independent franchisees who are solely responsible for setting the employment policies and practices, including pay and benefits, for the people working in their restaurants. McDonald’s USA has no control over employment matters at any franchisee’s restaurant(s)."
        linkName="Submit Your Story"
        href="https://www.thankyoucrew.com/"
        banner="https://firebasestorage.googleapis.com/v0/b/e-commerce-mcdonalds.appspot.com/o/banner1.jpeg?alt=media&token=0052abf1-e050-4402-835d-b51725caf37e"
      />
      <FeedWide
        title="Free Fries Now. Free McDonald’s Later.*"
        desc="Get free large Fries when you download the McDonald’s app and join MyMcDonald’s Rewards. Then, unlock free McDonald’s faves only in the app with 1500 bonus points after your first purchase."
        legal="*Offer valid 1x thru the last day of the month for first time app users at participating McDonald's until 10/31/22. May take up to 48 hours to appear in your deals. Free Loyalty Reward Points valid 1x thru 12/31/22 for first time MyMcDonald’s Rewards users. Program available only at participating McDonald’s. Excludes delivery. McD app download and registration required."
        linkName="Download the App"
        href="https://www.google.com"
        banner="https://firebasestorage.googleapis.com/v0/b/e-commerce-mcdonalds.appspot.com/o/banner2.jpeg?alt=media&token=c35f867f-0275-47d3-867d-0a7f67ed6f0c"
      />
      <FeedWide
        title="$5 Crispy Chicken Sandwich Meal"
        desc="Thru 9/4, get any Crispy, Spicy or Deluxe Chicken Sandwich with medium World Famous Fries and Soft Drink for only $5. And hold on to that bag—those crispy crumbs left behind are a tasty grand finale."
        legal="*Valid 1/x a week. App download and registration required. At participating McDonald’s. "
        linkName="Order in the App"
        href="https://www.google.com"
        banner="https://firebasestorage.googleapis.com/v0/b/e-commerce-mcdonalds.appspot.com/o/banner3.jpeg?alt=media&token=dc18ec20-b4b7-48c9-86e9-376e200da5ef"
      />
      <FeedWide
        title="Your Story Deserves a Hollywood Ending"
        desc="Latinos have stories to tell, yet they make up less than 1% of the ones told in Hollywood. As a champion of the Hispanic community McDonald’s wants to help change that. With Spotlight Dorado, McDonald’s is giving aspiring Latino filmmakers a chance to participate in a short film competition. Aspiring filmmakers will bring their vision to life having their story produced into a short film with invaluable mentorship from renowned industry leaders and a chance to showcase their film in film festivals around the country."
        linkName="Learn More About Spotlight Dorado"
        href="https://spotlightdorado.com/"
        banner="https://firebasestorage.googleapis.com/v0/b/e-commerce-mcdonalds.appspot.com/o/banner4.jpg?alt=media&token=d401e0ab-1a10-4522-9bed-1159af51d3cf"
      />
      <FeedWide
        title="Order McDelivery® Now*"
        desc="Get all your McDonald’s favorites delivered right to your doorstep with McDelivery® on Uber Eats, DoorDash or Grubhub."
        legal="*At participating McDonald’s. Prices may be higher than at restaurants. Delivery/service fees apply"
        linkName="Order McDelivery Now"
        href="https://www.google.com"
        banner="https://firebasestorage.googleapis.com/v0/b/e-commerce-mcdonalds.appspot.com/o/banner5.jpg?alt=media&token=580d21d9-7f48-47ee-9e74-b8402fb2f374"
      />
      <FeedWide
        title="Deals for Days"
        desc="Get exclusive deals on your McDonald’s favorites in the app with contactless Mobile Order & Pay* and convenient Drive Thru or Curbside pickup."
        legal="*Mobile Order & Pay at participating McDonald’s."
        linkName="Get App Deals"
        href="https://www.google.com"
        banner="https://firebasestorage.googleapis.com/v0/b/e-commerce-mcdonalds.appspot.com/o/banner6.jpg?alt=media&token=9d45b174-5cbf-4460-9847-459109577ffc"
      />
    </div>
  );
};

export default Home;
