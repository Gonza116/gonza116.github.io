import i18n from "../i18n";
import { EventListES, EventListEN } from "../constants/eventList";
import "./LanguageSelector.css";

const LanguageSelector = ({ setEventList }) => {
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    if (lng === "es") {
      setEventList(EventListES);
    } else {
      setEventList(EventListEN);
    }
  };
  return (
    <select
      className="language-select"
      onChange={(e) => {
        changeLanguage(e.target.value);
      }}
    >
      <option value="en">🇬🇧</option>
      <option value="es">🇪🇸</option>
    </select>
  );
};

export default LanguageSelector;
