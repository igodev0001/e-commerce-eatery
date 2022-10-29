import ExclusiveDeals from "../components/exclusiveDeals/ExclusiveDeals";
import { Feeds } from "../lib/types";
import { PrismaClient } from "@prisma/client";
//======================================================

export default function Deals({ feed }: Feeds) {
  return <ExclusiveDeals feed={feed} />;
}

export async function getStaticProps() {
  const prisma = new PrismaClient();

  const feed = await prisma.feed.findMany({
    where: {
      usedFor: "deals",
    },
  });
  await prisma.$disconnect();

  return {
    props: {
      feed,
    },
  };
}
