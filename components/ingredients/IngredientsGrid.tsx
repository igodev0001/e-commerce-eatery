import IngredientsItem from "./IngredientsItem";
//======================================================
import styles from "./Ingredients.module.scss";
import { Ingredient } from "../../lib/types";
//======================================================
interface Props {
  ingredients: Ingredient[];
}
export default function IngredientsGrid({ ingredients }: Props) {
  return (
    <div>
      <ul className={styles.grid}>
        {ingredients.map((item) => (
          <IngredientsItem key={item.id} ingredient={item} />
        ))}
      </ul>
    </div>
  );
}
