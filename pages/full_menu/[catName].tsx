import { PrismaClient } from "@prisma/client";
import { useRouter } from "next/router";
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
  const router = useRouter();
  const { catName } = router.query;

  const categoryName = catName?.toString().split("-").join(" ");
  const dynamicData =
    catName &&
    products?.filter(
      (item: Product) => item.category.name.toLowerCase() === categoryName
    );

  return (
    dynamicData && <FullMenu products={dynamicData} categories={categories} />
  );
}

export async function getStaticPaths() {
  const prisma = new PrismaClient();

  const categories = await prisma.category.findMany({});
  const paths = categories.map((item) => ({
    params: {
      catName: item.name.toString().toLowerCase().split(" ").join("-"),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}
// interface Params {
//   params: { catName: string }[];
// }
export async function getStaticProps() {
  const prisma = new PrismaClient();
  const products = await prisma.product.findMany({
    include: {
      category: true,
    },
  });
  const categories = await prisma.category.findMany({});

  return {
    props: {
      products,
      categories,
    },
  };
}
