import React from "react";
import styles from "./styles.module.scss";

export default function SelectSuggest() {
    return <input placeholder="Search" type='text' className={styles.SelectSuggest__Input} />;
}
