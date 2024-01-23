import { useState } from "react"
import { useTranslation } from "react-i18next";

const OscarCategory = ({ category, selectedNominees, setSelectedNominees }) => {

	const { t } = useTranslation();


    const [hoveringImage, setHoveringImage] = useState()
    const categoryNominee = selectedNominees[category.name]


    const handleSelect = (name, nominee) => {
        console.log(name, selectedNominees, nominee)
        setSelectedNominees({ ...selectedNominees, [name]: nominee })
    }

    return (<div className="oscars-category">
        <h2>{t(category.name)}</h2>
        <div className="oscars-category-container">
            <div
                className="oscars-category-photo"
                style={{
                    backgroundImage: `url(${(categoryNominee && !hoveringImage) ? categoryNominee.image : hoveringImage})`
                }}
            />
            <div className="oscars-nominees-list">
                {category.nominees.map(nominee => <div
                    className={"oscars-nominee" + (selectedNominees[category.name]?.winner === nominee.winner ? ' selected' : '')}
                    onMouseOver={() => setHoveringImage(nominee.image)}
                    onMouseOut={() => setHoveringImage()}
                >
                    <input
                        type="radio"
                        id={category.name + nominee.winner}
                        name={category.name}
                        value={category.name + nominee.winner}
                        onChange={() => handleSelect(category.name, nominee)}
                        checked={selectedNominees[category.name]?.winner === nominee.winner}
                    />
                    <label for={category.name + nominee.winner}>{nominee.winner} {nominee.film && <span><i>{t('for')}</i> <b>{nominee.film}</b> </span>} {nominee.reciever && <span><i>({nominee.originalTitle && <span><b>{nominee.originalTitle}</b>, </span>}{nominee.reciever})</i></span>} </label>

                    <br />
                </div>)}
            </div>
        </div>

    </div>)
}

export default OscarCategory