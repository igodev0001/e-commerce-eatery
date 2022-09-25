import { PrismaClient } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import DownloadApp from "../components/download_app/DownloadApp";

interface Props {
  feed: {
    id: number;
    title: string;
    desc: string;
    legal: string;
    image: string;
    linkName: string;
    href: string;
    size: string;
  }[];
}

export default function Download_app({ feed }: Props) {
  // const { data } = useFetch("download_app");
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

  return {
    props: {
      feed,
    },
  };
}
