import axios from "axios";
import { useQuery } from "react-query";

export default function useCategory() {
  return useQuery("categories", () =>
    axios.get("/api/category").then((res) => res.data)
  );
}
