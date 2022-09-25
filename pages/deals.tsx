import useFetch from "../hooks/useFetch";
import ExclusiveDeals from "../components/Deals/ExclusiveDeals";

export default function Deals() {
  const { data } = useFetch("deals");

  return data && <ExclusiveDeals feed={data} />;
}
