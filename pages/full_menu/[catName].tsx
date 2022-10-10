import { useRouter } from "next/router";
import FullMenu from "../../components/menu/full_menu/FullMenu";
import useFetch from "../../hooks/useFetch";
export default function CatName() {
  const { data } = useFetch("products");

  const router = useRouter();
  const { catName } = router.query;
  interface Category {
    id: number;
    name: string;
    image: string;
  }

  const dynamicData = data?.filter(
    (item: {
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
    }) => item.category.name.toLowerCase() === catName
  );

  return <FullMenu products={dynamicData} />;
}
