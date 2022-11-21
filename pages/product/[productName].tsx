import { PrismaClient } from "@prisma/client";
import { GetServerSideProps } from "next";
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

interface IParams extends ParsedUrlQuery {
  productName: string;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
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
