import React from "react";
import styles from "./styles.module.scss";

import Header from "../../components/Header";
import SelectSuggest from "../../components/SelectSuggest";

function Main() {
  const reqOnServer = () => {
    fetch('/getBeer', {
      method: 'GET'
    })
    .then(res => res.json())
    .then(result => {
      console.log(result)
    })
  }

  return (
    <>
    <Header>
      <div className={styles.Main__SearchPanel}>
        <SelectSuggest />
      </div>
    </Header>
    <button type="button" onClick={reqOnServer}>test</button>
    </>
  );
}

export default Main;
