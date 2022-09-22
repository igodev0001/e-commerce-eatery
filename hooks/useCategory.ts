import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export default function useCategory() {
  return useQuery(
    ["categories"],
    () => axios.get("/api/category").then((res) => res.data),
    { staleTime: 1000 * 100 * 60 * 24 }
  );
}
