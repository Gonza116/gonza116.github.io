import i18n from "../i18n";
import { EventListES, EventListEN } from "../constants/eventList";
import "./LanguageSelector.css";
import { useTranslation } from "react-i18next";

const LanguageSelector = ({ setEventList }) => {
  const { t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    if (lng === "es") {
      setEventList(EventListES);
    } else {
      setEventList(EventListEN);
    }
  };
  console.log(i18n.language === "es");
  return (
    <div className="container--toggle">
      {i18n.language === "es" ? (
        <button
          className="toggle"
          onClick={() => {
            changeLanguage("en");
          }}
        >
          {t("english-reverse")}
        </button>
      ) : (
        <button
          className="toggle"
          onClick={() => {
            changeLanguage("es");
          }}
        >
          {t("spanish-reverse")}
        </button>
      )}
      <label htmlFor="toggle" className="toggle--label">
        <span className="toggle--label-background"></span>
      </label>
    </div>
  );
  // Enable again if there's more than 2 languages
  // <select
  //   className="language-select"
  //   onChange={(e) => {
  //     changeLanguage(e.target.value);
  //   }}
  // >
  //   <option value="en">🇬🇧</option>
  //   <option value="es">🇪🇸</option>
  // </select>
  // );
};

export default LanguageSelector;
