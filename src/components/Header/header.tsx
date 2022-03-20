import React from "react";
import styles from "./styles.module.scss";

interface Props {
  children: React.ReactNode;
}


export default function Header(props: Props) {
  const { children } = props;
  return <div className={styles.Header}>{children}</div>;
}
