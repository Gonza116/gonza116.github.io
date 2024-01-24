import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../Navbar";
import "./Oscars.css"
import OscarCategory from "./oscars/OscarCategory";
import html2canvas from "html2canvas";

import HorizontalBallot from "./oscars/HorizontalBallot";
import { twentyFour } from "../constants/oscars";
import VerticalBallot from "./oscars/VerticalBallot";

const Oscars = () => {

    const { t } = useTranslation()

    const [step, setStep] = useState(0)
    const [selectedNominees, setSelectedNominees] = useState({})
    const horizontalRef = useRef(null)
    const verticalBallot = useRef(null)

    const [userName, setUserName] = useState('')

    const categories = twentyFour


    const createHorizontalImage = async () => {
        const canvas = await html2canvas(horizontalRef.current, {
            allowTaint: true,
            useCORS: true,
            width: 1920,
            height: 1080
        }),
            data = canvas.toDataURL('image/jpg'),
            link = document.createElement('a');

        link.href = data;
        link.download = 'oscars-2024-ballot-horizontal.jpg';

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    const createVerticalImage = async () => {
        const canvas = await html2canvas(verticalBallot.current, {
            allowTaint: true,
            useCORS: true,
            width: 1080,
            height: 1920
        }),
            data = canvas.toDataURL('image/jpg'),
            link = document.createElement('a');

        link.href = data;
        link.download = 'oscars-2024-ballot-vertical.jpg';

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    const skipStep = () => {
        if (step === 0) {
            setUserName('')
        } else {
            const newSelectedNominees = { ...selectedNominees }
            delete newSelectedNominees[categories[step - 1].name]
            setSelectedNominees(newSelectedNominees)
        }
        setStep(step + 1)
    }

    return (
        <>
            <Navbar />
            <div className="oscars-election-container">
                <h2>{userName ? t('oscarBallotTitleName', { name: userName, year: '2024' }) : t('oscarBallotTitleNoName', { year: '2024' })} </h2>

                <div className="oscars-election-content">
                    {step === 0 ? <div className="name-input">
                        <p>{t('enterName')}</p>
                        <input
                            type="text"
                            value={userName}
                            onChange={e => setUserName(e.target.value)}
                            maxLength={22}
                        />
                    </div> : <>
                        {step <= categories.length ?
                            <OscarCategory
                                category={categories[step - 1]}
                                selectedNominees={selectedNominees}
                                setSelectedNominees={setSelectedNominees}
                            />
                            : <div className="final-step">
                                <p>{t('generate')}</p>
                                <div className="generate-buttons-row">
                                    <div className="generate-button" onClick={createHorizontalImage}>
                                        <h3>{t('horizontalTitle')}</h3>
                                        <p>{t('horizontalDescription')}</p>
                                    </div>
                                    <div className="generate-button" onClick={createVerticalImage}>
                                        <h3>{t('verticalTitle')}</h3>
                                        <p>{t('verticalDescription')}</p>
                                    </div>
                                </div>
                                <i>{t('finalNote')}</i>

                            </div>}

                    </>}

                </div>

                <div />

                {step === 0 &&
                    <i>{t('warning')}</i>
                }

                <div>
                    {step <= categories.length ? <div className="buttons-row">
                        {step > 0 && <button className="back" onClick={() => setStep(step - 1)}>{t('back')}</button>}
                        <button className="skip" onClick={skipStep}>{t('skip')}</button>
                        <button className="next" onClick={() => setStep(step + 1)}>{t('next')}</button>
                    </div> : <></>}
                </div>


            </div>

            <div className="hidden-elements">
                <HorizontalBallot
                    divRef={horizontalRef}
                    selectedNominees={selectedNominees}
                    categories={categories}
                    userName={userName}
                />
                <VerticalBallot
                    divRef={verticalBallot}
                    selectedNominees={selectedNominees}
                    categories={categories}
                    userName={userName}
                />
            </div>


        </>
    )
}

export default Oscars;