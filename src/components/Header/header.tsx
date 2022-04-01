import React from "react";
import styles from "./styles.module.scss";

import LanguageMenu from "../LanguageMenu";
import { LANGUAGES } from "../../helpers/i18next";
import { useTranslation } from "react-i18next";

interface Props {
  children: React.ReactNode;
}

export default function Header(props: Props) {
  const { children } = props;
  const { i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };
  return (
    <div className={styles.Header}>
      <div className={styles.Header__Children}>{children}</div>
      <div className={styles.Header__Services}>
        <LanguageMenu changeLanguage={changeLanguage} options={LANGUAGES} />
      </div>
    </div>
  );
}
