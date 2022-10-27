import { PrismaClient } from "@prisma/client";
// import fs from "fs/promises";
//=====================================================
import FeedWide from "../components/feed/FeedWide";
//=====================================================
import { Feeds } from "../lib/types";
//======================================================

export default function Home({ feed }: Feeds) {
  return (
    <div>
      {feed.map((item) => (
        <FeedWide key={item.id} feed={item} />
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const prisma = new PrismaClient();

  const feed = await prisma.feed.findMany({
    where: {
      usedFor: "homePage",
    },
  });

  //=========================================================================
  // Read data from local database and write it on text file.
  // then import data from text file into cloud database
  //=========================================================================

  // const products = await prisma.product.findMany({
  //   include: {
  //     ingredients: true,
  //   },
  // });
  // const listOfItems: { pId: number; ingredId: number }[] = [];

  // products.map(
  //   (item) =>
  //     item.ingredients &&
  //     item.ingredients.map((ingred) =>
  //       listOfItems.push({ pId: item.id, ingredId: ingred.id })
  //     )
  // );

  // fs.writeFile("/Users/nima/listOfItems.txt", JSON.stringify(listOfItems));

  // const product = await fs.readFile("/Users/nima/Product.txt", {
  //   encoding: "utf-8",
  // });

  // await prisma.product.createMany({
  //   data: JSON.parse(product),
  // });
  //=========================================================================

  await prisma.$disconnect();

  return {
    props: { feed },
  };
}
