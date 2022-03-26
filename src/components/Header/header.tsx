import React from "react";
import styles from "./styles.module.scss";

import LanguageMenu from "../LanguageMenu";

interface Props {
  children: React.ReactNode;
}

export default function Header(props: Props) {
  const { children } = props;
  return (
    <div className={styles.Header}>
      <div>{children}</div>
      <LanguageMenu />
    </div>
  );
}
