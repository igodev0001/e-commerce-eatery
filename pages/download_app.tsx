import { PrismaClient } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
//======================================================
import DownloadApp from "../components/download_app/DownloadApp";
//======================================================
import { Feeds } from "../lib/types";
//======================================================

export default function Download_app({ feed }: Feeds) {
  const { data } = useQuery(
    ["download_app"],
    () => axios.get("/api/download_app").then((res) => res.data),
    { initialData: feed }
  );

  return <DownloadApp feed={data} />;
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
