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
  await prisma.$disconnect();

  return {
    props: {
      feed,
    },
  };
}
