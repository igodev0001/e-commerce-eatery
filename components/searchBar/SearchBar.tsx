import { useRef, useState } from "react";
import { MdSearch } from "react-icons/md";
import styles from "../../styles/SearchBar.module.scss";
//===========================================
export default function SearchBar() {
  const [visible, setVisible] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);

  function visibleHandler() {
    setVisible(!visible);
    searchRef.current?.focus();
  }

  const dynamicClass: string = visible ? "visible" : "hidden";

  return (
    <form className={styles.container}>
      <span>
        <MdSearch size={25} onClick={visibleHandler} />
      </span>

      <input
        type="search"
        placeholder="search"
        className={styles[dynamicClass]}
        ref={searchRef}
      />
    </form>
  );
}
