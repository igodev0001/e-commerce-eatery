import React from "react";
import DownloadApp from "../components/download_app/DownloadApp";
import useFetch from "../hooks/useFetch";

export default function Download_app() {
  const { data } = useFetch("download_app");

  return <DownloadApp feed={data} />;
}
