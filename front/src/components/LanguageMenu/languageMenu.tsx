import React, { useState } from "react";
import styles from "./styles.module.scss";
import GlobeIcon from "../../static/icon/globe-icon";
import cn from "classnames";
import OutsideClick from "../../hooks/OutsideClick";

interface Options {
  id: string;
  label: string;
}

interface Props {
  changeLanguage: (language: string) => void;
  options: Array<Options>
}

export default function LanguageMenu(props: Props) {
  const { changeLanguage, options } = props;
  const [selLanguage, setSelLanguage] = useState(options[0]);
  const [openMenu, setOpenMenu] = useState(false);

  const changeOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  const closeMenu = () => {
    setOpenMenu(false);
  };

  const handleChangeLanguage = (index: number) => {
    setSelLanguage(options[index]);
    changeLanguage(options[index].id);
    changeOpenMenu();
  };

  return (
    <OutsideClick callback={closeMenu}>
      <div className={styles.LanguageMenu}>
        <button
          type="button"
          className={cn(styles.LanguageMenu__Button, {
            [styles.LanguageMenu__Button_open]: openMenu,
          })}
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
