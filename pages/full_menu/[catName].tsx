import { PrismaClient } from "@prisma/client";
import { ParsedUrlQuery } from "querystring";
import { GetStaticPaths, GetStaticProps } from "next";
//======================================================
import FullMenu from "../../components/menu/full_menu/FullMenu";
//======================================================
import { Category, Product } from "../../lib/types";
//======================================================
interface Props {
  products: Product[];
  categories: Category[];
}

export default function CatName({ products, categories }: Props) {
  return <FullMenu products={products} categories={categories} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prisma = new PrismaClient();

  const categories = await prisma.category.findMany({});
  const paths = categories.map((item) => ({
    params: {
      catName: item.name.toString().split(" ").join("-"),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};
interface IParams extends ParsedUrlQuery {
  catName: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { catName } = context.params as IParams;

  const prisma = new PrismaClient();
  const categories = await prisma.category.findMany({});

  const catId = categories.find(
    (item) => item.name === catName.toString().split("-").join(" ")
  )?.id;
  const products = await prisma.product.findMany({
    where: {
      category_id: catId,
    },
    include: {
      category: true,
    },
  });

  return {
    props: {
      products: products,
      categories,
    },
  };
};
