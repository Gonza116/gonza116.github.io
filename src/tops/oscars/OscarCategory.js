import { useTranslation } from "react-i18next";

const OscarCategory = ({ category, selectedNominees, setSelectedNominees }) => {

    const { t } = useTranslation();

    const handleSelect = (name, nominee) => {
        setSelectedNominees({ ...selectedNominees, [name]: nominee })
    }

    return (<div className="oscars-category">
        <h3>{t(category.name)}</h3>

        {category.nominees.map(nominee => <div
            className={"oscars-nominee" + (selectedNominees[category.name]?.winner === nominee.winner ? ' selected' : '')}
            onClick={() => handleSelect(category.name, nominee)}
            style={selectedNominees[category.name]?.winner === nominee.winner ? {
                height: '181px',
                backgroundImage: `url(${nominee.image})`
            } : {}}
        >
            <div className="nominee-opacity">
                <div className="nominee-data">
                    <h4
                        style={selectedNominees[category.name]?.winner === nominee.winner ? {
                            fontSize: '20px'
                        } : {}}
                    >
                        {nominee.winner}
                    </h4>
                    {nominee.originalTitle &&
                        <h5
                            style={selectedNominees[category.name]?.winner === nominee.winner ? {
                                fontSize: '14px'
                            } : {}}
                        >
                            <i><b>{nominee.originalTitle}</b></i>
                        </h5>}
                    {nominee?.film && <>
                        <h5
                            style={selectedNominees[category.name]?.winner === nominee.winner ? {
                                fontSize: '14px'
                            } : {}}
                        >
                            {nominee.film}
                        </h5>
                    </>}
                    {nominee.reciever && <>
                        <h5
                            style={selectedNominees[category.name]?.winner === nominee.winner ? {
                                fontSize: '14px'
                            } : {}}
                        >
                            {nominee.reciever}
                        </h5>
                    </>}
                </div>
            </div>
        </div>)}
    </div>)


}

export default OscarCategory