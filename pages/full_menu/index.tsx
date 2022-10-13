import FullMenu from "../../components/menu/full_menu/FullMenu";
import useFetch from "../../hooks/useFetch";
//======================================================

export default function Index() {
  const { data } = useFetch("products");
  return <FullMenu products={data} />;
}
