import { PrismaClient } from "@prisma/client";
import React from "react";
//======================================================
import DownloadApp from "../components/download_app/DownloadApp";
//======================================================
import { Feeds } from "../lib/types";
//======================================================

export default function Download_app({ feed }: Feeds) {
  return <DownloadApp feed={feed} />;
}

export async function getStaticProps() {
  const prisma = new PrismaClient();

  const feed = await prisma.feed.findMany({
    where: {
      usedFor: "download_app",
    },
  });
  await prisma.$disconnect();

  return {
    props: {
      feed,
    },
  };
}
