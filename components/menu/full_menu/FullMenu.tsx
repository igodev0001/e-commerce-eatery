// import useFetch from "../../../hooks/useFetch";
import useCategory from "../../../hooks/useCategory";
import FeatureMenu from "./FeatureMenu";
import styles from "./FullMenu.module.scss";
import MenuGrid from "./MenuGrid";
import SideMenu from "./SideMenu";
export default function FullMenu() {
  const { data } = useCategory();
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        {data && <SideMenu category={data} />}
      </div>
      <div className={styles.rightSide}>
        <FeatureMenu category={data} />
      </div>
      {/* <div>
        {data &&
          data.map(
            (item) =>
              item.name !== "Favorites" && (
                <MenuGrid key={item.id} column="4" products={item.products} />
              )
          )}
      </div> */}
    </div>
  );
}
