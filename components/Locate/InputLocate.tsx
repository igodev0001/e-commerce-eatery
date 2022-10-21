import React, { ChangeEvent, useState } from "react";
import { TextField } from "@mui/material";
import { MdSearch, MdGpsFixed } from "react-icons/md";
//========================================================
import Button from "../Button/Button";
//========================================================
import styles from "./Locate.module.scss";
//========================================================

interface Props {
  handleLocation: (place: string) => void;
}

export default function InputLocate({ handleLocation }: Props) {
  const [input, setInput] = useState("");

  function submitLocation() {
    handleLocation(input);
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  }
  return (
    <div className={styles.input}>
      <div className={styles.field}>
        <TextField
          id="outlined-basic"
          label="Zip or City & State"
          variant="standard"
          style={{ width: "100%" }}
          size="medium"
          onChange={handleChange}
          value={input}
        />
        <Button action={submitLocation}>
          <MdSearch />
        </Button>
      </div>

      <div className={styles.locate_me}>
        <button>
          <MdGpsFixed />
          Locate Me
        </button>
      </div>
    </div>
  );
}
