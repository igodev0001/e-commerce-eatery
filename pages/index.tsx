import { PrismaClient } from "@prisma/client";

//=====================================================
import FeedWide from "../components/feed/FeedWide";
import useCategory from "../hooks/useCategory";
//=====================================================

interface Props {
  feed: {
    id: number;
    title: string;
    desc: string;
    legal?: string;
    image: string;
    linkName: string;
    href: string;
  }[];
}
[];

export default function Home({ feed }: Props) {
  useCategory();
  return (
    <div>
      {feed.map((item) => (
        <FeedWide
          key={item.id}
          title={item.title}
          desc={item.desc}
          legal={item.legal}
          image={item.image}
          linkName={item.linkName}
          href={item.href}
        />
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const prisma = new PrismaClient();

  const feed = await prisma.feed.findMany();

  return {
    props: {
      feed,
    },
  };
}
