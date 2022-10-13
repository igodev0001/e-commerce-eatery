import { useState } from "react";
//========================================================
import InputLocate from "./InputLocate";
import Map from "../map/Map";
//========================================================
import styles from "./Locate.module.scss";
//========================================================

export default function Locate() {
  const [location, setLocation] = useState("LosAngeles");

  function handleLocation(place: string) {
    setLocation(place);
  }
  return (
    <div className={styles.container}>
      <InputLocate handleLocation={handleLocation} />
      <Map location={location} />
    </div>
  );
}
