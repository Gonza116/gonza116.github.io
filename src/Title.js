import "./Title.css";
import { useTranslation } from "react-i18next";

const Title = () => {
  const { t } = useTranslation();
  return (
    <div className="HeaderContainer">
      <div className="Header">
        <p className="OverTitle">{t("OverTitle")}</p>
        <h1 className="Title">Gonzalo García Granés</h1>
        <p className="UnderTitle">{t("UnderTitle")}</p>
      </div>
    </div>
  );
};

export default Title;
