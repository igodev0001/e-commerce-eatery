import { useRouter } from "next/router";
import ProductDetail from "../../components/productDetail/ProductDetail";
import useFetch from "../../hooks/useFetch";

//======================================================

export default function ProductDetailedPage() {
  const router = useRouter();
  const { productName } = router.query;

  const name = productName?.toString().split("-").join(" ");

  const { data } = useFetch(productName ? `products/${name}` : "products");

  return data && <ProductDetail product={data} />;
}
