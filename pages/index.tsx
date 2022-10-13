import { PrismaClient } from "@prisma/client";

//=====================================================
import FeedWide from "../components/feed/FeedWide";
//=====================================================

import { Feeds } from "../lib/types";

// interface Props {
//   feed: {
//     id: number;
//     title: string;
//     desc: string;
//     legal?: string;
//     image: string;
//     linkName: string;
//     href: string;
//     size: string;
//   }[];
// }
// [];

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

  return {
    props: {
      feed,
    },
  };
}
