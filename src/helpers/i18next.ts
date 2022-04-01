import i18n from "i18next";
import { initReactI18next } from "react-i18next";

export const LANGUAGES = [
  { id: "en", label: "English" },
  { id: "ru", label: "Русский" },
];

const resources = {
  en: {
    translation: {
      common: {
        search: "Search",
      },
    },
  },
  ru: {
    translation: {
      common: {
        search: "Поиск",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
});

export default i18n;
