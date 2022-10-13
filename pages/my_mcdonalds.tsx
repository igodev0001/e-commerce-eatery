import MyMcDonalds from "../components/MyMcDonalds/MyMcDonalds";
import useFetch from "../hooks/useFetch";
//======================================================

export default function My_mcdonalds() {
  const { data } = useFetch("my_mcdonalds");

  return data && <MyMcDonalds feed={data} />;
}
