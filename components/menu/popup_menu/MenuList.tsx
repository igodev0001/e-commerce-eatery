import MenuItem from "./MenuItem";
//===================================================
import { Category } from "../../../lib/types";
import styles from "./PopupMenu.module.scss";
//===================================================
interface Props {
  categories: Category[];
  form: string;
}
export default function MenuList({ categories, form }: Props) {
  const listClass = form === "popUp" ? "listPopUp" : "listBurger";
  return (
    <ul className={` ${styles[listClass]}`}>
      {categories.map(
        (item) =>
          item.name !== "Favorites" && (
            <MenuItem key={item.id} category={item} />
          )
      )}
    </ul>
  );
}
