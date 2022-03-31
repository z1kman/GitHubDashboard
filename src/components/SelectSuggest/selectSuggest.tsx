import React, { useState } from "react";
import cn from "classnames";
import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";
import OutsideClick from "../../hooks/OutsideClick";

const options = ["dsadsa", "dsadsa", "dsadsa", "dsadsa", "dsadsa"];

export default function SelectSuggest() {
  const [openMenu, setOpenMenu] = useState(false);
  const [value, setValue] = useState("");
  const { t } = useTranslation();

  const changeOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  const closeMenu = () => {
    setOpenMenu(false);
  };

  const onChange = (currentValue: string) => {
    setValue(currentValue);
  };

  const handleClickOnOption = (item: string) => {
    closeMenu();
    onChange(item);
  };



  return (
    <OutsideClick callback={closeMenu}>
      <div className={styles.SelectSuggest}>
        <input
          placeholder={t("common.search")}
          type="text"
          onFocus={changeOpenMenu}
          className={styles.SelectSuggest__Input}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        <div
          className={cn(styles.SelectSuggest__Options, {
            [styles.SelectSuggest__Options_open]: openMenu,
          })}
        >
          {options.map((item) => (
            <option
              className={styles.SelectSuggest__Options_item}
              onClick={() => handleClickOnOption(item)}
            >
              {item}
            </option>
          ))}
        </div>
      </div>
    </OutsideClick>
  );
}
