import styles from "./Sections.module.scss";

export default function TopSection() {
  return (
    <nav className={styles.top}>
      <div>
        <h4>About Us</h4>
        <ul>
          <li>About Us</li>
          <li>Our History</li>
          <li>Leadership Team</li>
          <li>Values In Action</li>
        </ul>
      </div>
      <div>
        <h4>Services</h4>
        <ul>
          <li>Services</li>
          <li>Wi-Fi</li>
          <li>Gift Cards</li>
          <li>PlayPlaces & Parties</li>
        </ul>
      </div>
      <div>
        <h4>Community</h4>
        <ul>
          <li>Community</li>
          <li>HACER® Scholarships for Hispanic Students</li>
          <li>Ronald McDonald House Charities</li>
          <li>McDonald’s Asian Pacific American</li>
        </ul>
      </div>
      <div>
        <h4>Contact Us</h4>
        <ul>
          <li>Contact Us</li>
          <li>Gift Card FAQs</li>
          <li>Donations</li>
          <li>Employment</li>
        </ul>
      </div>
    </nav>
  );
}
