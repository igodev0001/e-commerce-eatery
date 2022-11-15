import { PrismaClient } from "@prisma/client";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";

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

export const getStaticPaths: GetStaticPaths = async () => {
  const prisma = new PrismaClient();

  const products = await prisma.product.findMany({});
  const paths = products.map((item) => ({
    params: {
      productName: item.name.toString().split(" ").join("-"),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

interface IParams extends ParsedUrlQuery {
  productName: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { productName } = context.params as IParams;
  const prisma = new PrismaClient();
  const product = await prisma.product.findFirst({
    where: {
      name: productName,
    },
    include: {
      category: true,
    },
  });
  const categories = await prisma.category.findMany({});

  return {
    props: {
      product,
      categories,
    },
  };
};
