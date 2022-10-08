import useFetch from "../../../hooks/useFetch";
import styles from "./FullMenu.module.scss";
import SideMenu from "./SideMenu";
export default function FullMenu() {
  const { data } = useFetch("category");
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        {data && <SideMenu category={data} />}
      </div>
    </div>
  );
}
