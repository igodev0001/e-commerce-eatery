// import useFetch from "../../../hooks/useFetch";
import { useRouter } from "next/router";
import useCategory from "../../../hooks/useCategory";
import FavoritesMenu from "./FavoritesMenu";
import styles from "./FullMenu.module.scss";
import MenuGrid from "./MenuGrid";
import SideMenu from "./SideMenu";

interface Category {
  id: number;
  name: string;
  image: string;
}

interface Props {
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

export default function FullMenu({ products }: Props) {
  const router = useRouter();
  const { data } = useCategory();

  const title = router.query.catName
    ? router.query.catName.toString()
    : "Favorites";

  const items =
    router.pathname === "/full_menu"
      ? products?.filter((item) => item.favorite)
      : products?.filter((item) => item.category.name === "Breakfast");

  // const items = products?.filter((item) => item.category.name === "Breakfast");
  return (
    <div className={styles.container}>
      {data && <SideMenu category={data} />}

      {router.pathname === "/full_menu" ? (
        <FavoritesMenu products={items} title={title} />
      ) : (
        <FavoritesMenu products={items} title={title} />
      )}

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
