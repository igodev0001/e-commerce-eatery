import { PrismaClient } from "@prisma/client";

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

  // fs.writeFile("/Users/nima/product.txt", JSON.stringify(product));

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
