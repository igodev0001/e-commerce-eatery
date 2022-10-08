import styles from "./FullMenu.module.scss";
import MenuGrid from "./MenuGrid";

interface Props {
  category: {
    id: number;
    name: string;
    image: string;
  }[];
}
export default function FeatureMenu({ category }: Props) {
  const favorites = category.filter((item) => item.name === "Favorites");
  console.log(favorites);
  return (
    <div className={styles.feature}>
      <h1>McDonald&apos;s Menu</h1>
      <MenuGrid column="3" products={favorites} />
    </div>
  );
}
