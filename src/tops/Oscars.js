import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../Navbar";
import "./Oscars.css"
import OscarCategory from "./oscars/OscarCategory";
import html2canvas from "html2canvas";

import HorizontalBallot from "./oscars/HorizontalBallot";
import { twentyFour } from "../constants/oscars";

const Oscars = () => {

    const [selectedNominees, setSelectedNominees] = useState({})
    const horizontalRef = useRef(null)

    const categories = twentyFour

    const createHorizontalImage = async () => {
        const canvas = await html2canvas(horizontalRef.current, {
            allowTaint: true,
            useCORS: true,
            width: 1600,
            height: 900
        }),
            data = canvas.toDataURL('image/jpg'),
            link = document.createElement('a');

        link.href = data;
        link.download = 'downloaded-image.jpg';

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <>
            <Navbar />
            <div className="oscars-election-container">
                {categories.map(category => <OscarCategory
                    category={category}
                    selectedNominees={selectedNominees}
                    setSelectedNominees={setSelectedNominees}
                />
                )}

                <button onClick={createHorizontalImage}>Generate</button>

            </div>

            {/* <div className="hidden-elements"> */}
                <HorizontalBallot 
                    divRef={horizontalRef}
                    selectedNominees={selectedNominees}
                    categories={categories}
                />
            {/* </div> */}


        </>
    )
}

export default Oscars;