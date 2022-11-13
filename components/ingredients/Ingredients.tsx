//======================================================
import IngredientsGrid from "./IngredientsGrid";
import MobileStepperSwip from "./MobileStepperSwip";
//======================================================
import styles from "./Ingredients.module.scss";
import { Ingredient } from "../../lib/types";
//======================================================

interface Props {
  ingredients: Ingredient[];
  name: string;
}
export default function Ingredients({ ingredients, name }: Props) {
  return (
    <div className={styles.container}>
      <h2>{`Ingredients in the ${name}`}</h2>
      <IngredientsGrid ingredients={ingredients} />
      <MobileStepperSwip ingredients={ingredients} />
    </div>
  );
}
