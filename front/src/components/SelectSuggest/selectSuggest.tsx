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

  const handleCloseMenu = () => {
    setOpenMenu(false);
  };

  const handleOpenMenu = () => {
    setOpenMenu(true);
  }

  const onChange = (currentValue: string) => {
    setValue(currentValue);
  };

  const handleClickOnOption = (item: string) => {
    handleCloseMenu();
    onChange(item);
  };



  return (
    <OutsideClick callback={handleCloseMenu}>
      <div className={styles.SelectSuggest}>
        <input
          placeholder={t("common.search")}
          type="text"
          onFocus={handleOpenMenu}
          className={cn(styles.SelectSuggest__Input, {
            [styles.SelectSuggest__Input_active] : openMenu 
          })}
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
