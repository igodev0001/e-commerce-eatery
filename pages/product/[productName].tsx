import { useRouter } from "next/router";
import ProductDetail from "../../components/productDetail/ProductDetail";
import useFetch from "../../hooks/useFetch";
import { useQueryClient } from "@tanstack/react-query";
import { Product } from "../../lib/types";
//======================================================

export default function ProductDetailedPage() {
  const router = useRouter();
  const { productName } = router.query;

  const query = useQueryClient();

  const products = query.getQueryData(["products"]) as Product[];

  const product = products.filter((item) => item.name === productName);

  console.log(product);

  // return product && <ProductDetail />;
  return <div>Hi</div>;
}
