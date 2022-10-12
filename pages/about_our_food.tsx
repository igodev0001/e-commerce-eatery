import AboutOurFood from "../components/aboutOurFood/AboutOurFood";
import useFetch from "../hooks/useFetch";
export default function About_our_food() {
  const { data } = useFetch("about_our_food");
  return data && <AboutOurFood feed={data} />;
}
