import { PrismaClient } from "@prisma/client";
import MyMcDonalds from "../components/MyMcDonalds/MyMcDonalds";
import { Feeds } from "../lib/types";
//======================================================

export default function My_mcdonalds({ feed }: Feeds) {
  return <MyMcDonalds feed={feed} />;
}

export async function getStaticProps() {
  const prisma = new PrismaClient();

  const feed = await prisma.feed.findMany({
    where: {
      usedFor: "my_mcdonalds",
    },
  });
  await prisma.$disconnect();

  return {
    props: {
      feed,
    },
  };
}
