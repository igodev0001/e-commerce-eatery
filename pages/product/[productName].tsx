import { useRouter } from "next/router";
import ProductDetail from "../../components/productDetail/ProductDetail";
import useFetch from "../../hooks/useFetch";

//======================================================

export default function ProductDetailedPage() {
  const router = useRouter();
  const { productName } = router.query;

  const { data } = useFetch(`products/${productName}`);

  return data && <ProductDetail product={data} />;
}
