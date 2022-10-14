//======================================================
import Image from "next/image";
import styles from "./Ingredients.module.scss";
import { Ingredient } from "../../lib/types";

//======================================================
interface Props {
  ingredient: Ingredient;
}

export default function IngredientsItem({ ingredient }: Props) {
  return (
    <li className={styles.item}>
      <div className={styles.img}>
        <Image
          src={ingredient.image}
          alt={ingredient.name}
          width="144"
          height="144"
        />
      </div>
      <div className={styles.name}>{ingredient.name}</div>
    </li>
  );
}
