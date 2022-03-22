import React from "react";
import styles from "./styles.module.scss";

const options = ["dsadsa", "dsadsa", "dsadsa", "dsadsa", "dsadsa"];

export default function SelectSuggest() {
  return (
    <div className={styles.SelectSuggest}>
      <input
        placeholder="Search"
        type="text"
        className={styles.SelectSuggest__Input}
      />
      <div className={styles.SelectSuggest__Options}>
        {options.map((item) => (
          <option className={styles.SelectSuggest__Options_item}>{item}</option>
        ))}
      </div>
    </div>
  );
}
