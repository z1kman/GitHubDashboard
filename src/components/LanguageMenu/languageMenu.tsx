import React, { useState } from "react";
import styles from "./styles.module.scss";
import wordSvg from "../../static/svg/globe.svg";

const options = [
  { id: "ru", label: "Русский" },
  { id: "en", label: "English" },
];

export default function LanguageMenu() {
  const [selLanguage, setSelLanguage] = useState(options[0]);

  const handleChangeLanguage = (index: number) => {
    setSelLanguage(options[index]);
  };

  return (
    <div className={styles.LanguageMenu}>
      <img src={wordSvg} alt="language" className={styles.LanguageMenu__Icon} />
      <div className={styles.LanguageMenu__Text}>{selLanguage.label}</div>
      <div className={styles.LanguageMenu__Option}>
        {options.map((item, index) => (
          <option
            className={styles.LanguageMenu__Option_item}
            onClick={() => handleChangeLanguage(index)}
          >
            {item.label}
          </option>
        ))}
      </div>
    </div>
  );
}
