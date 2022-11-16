import { PrismaClient } from "@prisma/client";
import FullMenu from "../../components/menu/full_menu/FullMenu";
import { Product, Category } from "../../lib/types";
//======================================================
interface Props {
  products: Product[];
  categories: Category[];
}

export default function Index({ products, categories }: Props) {
  return <FullMenu products={products} categories={categories} />;
}

export async function getStaticProps() {
  const prisma = new PrismaClient();

  const products = await prisma.product.findMany({});
  const categories = await prisma.category.findMany({
    include: {
      products: true,
    },
  });
  await prisma.$disconnect();

  return {
    props: {
      products,
      categories,
    },
  };
}
