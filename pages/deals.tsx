import useFetch from "../hooks/useFetch";
import ExclusiveDeals from "../components/exclusiveDeals/ExclusiveDeals";

export default function Deals() {
  const { data } = useFetch("deals");

  return data && <ExclusiveDeals feed={data} />;
}
