import React, { useState } from "react";
import styles from "./styles.module.scss";
import GlobeIcon from "../../static/icon/globe-icon";
import cn from "classnames";
import OutsideClick from "../../hooks/OutsideClick";

const options = [
  { id: "ru", label: "Русский" },
  { id: "en", label: "English" },
];

export default function LanguageMenu() {
  const [selLanguage, setSelLanguage] = useState(options[0]);
  const [openMenu, setOpentMenu] = useState(false);

  const changeOpenMenu = () => {
    setOpentMenu(!openMenu);
  };

  const closeMenu = () => {
    setOpentMenu(false);
  };

  const handleChangeLanguage = (index: number) => {
    console.log("ds");
    setSelLanguage(options[index]);
    changeOpenMenu();
  };

  return (
    <OutsideClick callback={closeMenu}>
      <div className={styles.LanguageMenu}>
        <button
          type="button"
          className={styles.LanguageMenu__Button}
          onClick={changeOpenMenu}
        >
          <GlobeIcon className={styles.LanguageMenu__Icon} />
          <div className={styles.LanguageMenu__Text}>{selLanguage.label}</div>
        </button>
        <div
          className={cn(styles.LanguageMenu__Menu, {
            [styles.LanguageMenu__Menu_open]: openMenu,
          })}
        >
          {options.map((item, index) => (
            <option
              key={item.id}
              className={styles.LanguageMenu__Menu_item}
              onClick={() => handleChangeLanguage(index)}
            >
              {item.label}
            </option>
          ))}
        </div>
      </div>
    </OutsideClick>
  );
}
