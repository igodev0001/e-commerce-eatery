import styles from "./FullMenu.module.scss";
import MenuGrid from "./MenuGrid";
interface Category {
  id: number;
  name: string;
  image: string;
}
interface Props {
  title: string;
  products: {
    id: number;
    name: string;
    desc: string;
    price: number;
    price_small: number;
    price_medium: number;
    price_big: number;
    image: string;
    category_id: number;
    category: Category;
    favorite: boolean;
  }[];
}
export default function FavoritesMenu({ products, title }: Props) {
  return (
    <div className={styles.favorites}>
      <h1>McDonald&apos;s Menu</h1>
      <MenuGrid column="3" products={products} title={title} />
    </div>
  );
}
