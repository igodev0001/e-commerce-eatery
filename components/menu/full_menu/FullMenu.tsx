// import useFetch from "../../../hooks/useFetch";
import Link from "next/link";
import { useRouter } from "next/router";
import useCategory from "../../../hooks/useCategory";
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

  const FavoriteProducts = products?.filter((item) => item.favorite);

  return (
    <div className={styles.container}>
      <div className={styles.topDiv}>
        {data && <SideMenu category={data} />}
        {router.pathname === "/full_menu" ? (
          <MenuGrid
            products={FavoriteProducts}
            title="Featured Favorites"
            column="3"
          />
        ) : (
          <MenuGrid
            products={products}
            title={products[0]?.category.name}
            column="3"
          />
        )}
      </div>

      {router.pathname === "/full_menu" && (
        <div className={styles.botDiv}>
          {data &&
            router.pathname === "/full_menu" &&
            data.map(
              (cat: {
                id: number;
                name: string;
                image: string;
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
              }) =>
                cat.name !== "Favorites" && (
                  <MenuGrid
                    key={cat.id}
                    column="4"
                    products={cat.products}
                    title={cat.name}
                  />
                )
            )}
        </div>
      )}
      <div className={styles.parag}>
        <p>
          Ready to order? Get the{" "}
          <Link href="/download_app">McDonald&apos;sApp</Link> to place an order
          for Drive Thru and Curbside pickup, for your favorite McDonald&apos;s
          food and beverages, or order McDelivery! Our full McDonald&apos;s menu
          features everything from{" "}
          <Link href="/full_menu/breakfast">breakfast menu</Link> items,
          burgers, and more! The McDonald&apos;s lunch and dinner menu lists
          popular favorites including the Big Mac® and our World Famous Fries®.
          The full menu at McDonald&apos;s has something to feed your cravings!
        </p>
        <span>*Weight before cooking 4 oz.</span>
      </div>
    </div>
  );
}
