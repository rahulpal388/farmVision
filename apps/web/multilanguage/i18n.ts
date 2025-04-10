import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { LanguagesArray } from "./language";

i18n
    .use(initReactI18next)
    .init({
        fallbackLng: "en",
        lng: "en",
        interpolation: {
            escapeValue: false, // react already safes from xss
        },
        resources: {
            en: {
                translation: LanguagesArray.en.navBar
            },
            hi: {
                translation: LanguagesArray.hi.navBar
            }
        },
    });

export default i18n;
