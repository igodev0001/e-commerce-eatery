import axios from "axios";
import { useQuery } from "@tanstack/react-query";
//======================================================

export default function useFetch(name: string) {
  return useQuery(name.includes("products/") ? name.split("/") : [name], () =>
    axios.get(`/api/${name}`).then((res) => res.data)
  );
}
