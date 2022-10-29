import { PrismaClient } from "@prisma/client";
import AboutOurFood from "../components/AboutOurFood/AboutOurFood";
import { Feeds } from "../lib/types";
//======================================================

export default function About_our_food({ feed }: Feeds) {
  return <AboutOurFood feed={feed} />;
}

export async function getStaticProps() {
  const prisma = new PrismaClient();

  const feed = await prisma.feed.findMany({
    where: {
      usedFor: "about_our_food",
    },
  });
  await prisma.$disconnect();

  return {
    props: {
      feed,
    },
  };
}
