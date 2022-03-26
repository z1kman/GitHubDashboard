import React from "react";
import styles from "./styles.module.scss";

import Header from "../../components/Header";
import SelectSuggest from "../../components/SelectSuggest";

import { useTranslation } from "react-i18next";

function Main() {
  const { t } = useTranslation();
  console.log(t("Welcome to React"));
  return (
    <Header>
      <div className={styles.Main__SearchPanel}>
        <SelectSuggest />
      </div>
    </Header>
  );
}

export default Main;
