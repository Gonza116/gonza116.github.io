import "./Swirl.css";
import SwirlImage from "./assets/Swirl.svg";

const Swirl = () => {
	return (
		<section className="swirl-container">
			<img src={SwirlImage} alt="Swirl" style={{ width: "15em" }} />
		</section>
	);
};

export default Swirl;
