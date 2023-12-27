import "./MusicTops.css";
import YearRow from "./music/YearRow";
import {
	twentyThree,
	twentyTwo,
	twentyOne,
	twenty,
	nineteen,
	eighteen,
	seventeen,
} from "../constants/musicTops";
import Navbar from "../Navbar";

const MusicTops = () => {
	return (
		<>
			<Navbar />
			<div className="tops-containers">
				<YearRow yearClass="twenty-three" albumList={twentyThree} />
				<YearRow yearClass="twenty-two" albumList={twentyTwo} />
				<YearRow yearClass="twenty-one" albumList={twentyOne} />
				<YearRow yearClass="twenty" albumList={twenty} />
				<YearRow yearClass="nineteen" albumList={nineteen} />
				<YearRow yearClass="eighteen" albumList={eighteen} />
				<YearRow yearClass="seventeen" albumList={seventeen} />
			</div>
		</>
	);
};

export default MusicTops;
