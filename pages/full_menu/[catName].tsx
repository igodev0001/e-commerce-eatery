import { useRouter } from "next/router";
//======================================================
import FullMenu from "../../components/menu/full_menu/FullMenu";
import useFetch from "../../hooks/useFetch";
//======================================================
import { Product } from "../../lib/types";
//======================================================

export default function CatName() {
  const { data } = useFetch("products");

  const router = useRouter();
  const { catName } = router.query;

  const dynamicData = data?.filter(
    (item: Product) => item.category.name.toLowerCase() === catName
  );

  return dynamicData && <FullMenu products={dynamicData} />;
}
