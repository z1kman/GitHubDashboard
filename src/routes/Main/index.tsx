import React from "react";
import styles from "./styles.module.scss";

import Header from "../../components/Header";
import SelectSuggest from "../../components/SelectSuggest";

function Main() {
  return (
    <Header>
      <div className={styles.Main__SearchPanel}>
        <SelectSuggest />
      </div>
    </Header>
  );
}

export default Main;
