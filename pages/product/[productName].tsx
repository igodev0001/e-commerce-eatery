import { PrismaClient } from "@prisma/client";
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
//======================================================
import ProductDetail from "../../components/productDetail/ProductDetail";
import { Product } from "../../lib/types";
//======================================================

interface Props {
  product: Product;
}

export default function ProductDetailedPage({ product }: Props) {
  return <ProductDetail product={product} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prisma = new PrismaClient();

  const products = await prisma.product.findMany({});
  const paths = products.map((item) => ({
    params: {
      productName: item.name.toString().split(" ").join("-"),
    },
  }));
  await prisma.$disconnect();

  return {
    paths,
    fallback: false,
  };
};

interface IParams extends ParsedUrlQuery {
  productName: string;
}

export const getStaticProps: GetServerSideProps = async (context) => {
  const { productName } = context.params as IParams;
  const prisma = new PrismaClient();
  const product = await prisma.product.findFirst({
    where: {
      name: productName.toString().split("-").join(" "),
    },
    include: {
      category: true,
      ingredients: true,
    },
  });
  await prisma.$disconnect();

  return {
    props: {
      product,
    },
  };
};
