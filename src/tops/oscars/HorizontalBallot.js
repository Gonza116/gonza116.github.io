import './Ballots.css';

const HorizontalBallot = ({ divRef, categories, selectedNominees, userName }) => {

    const categoryNames = {
        "picture": "Best Picture",
        "director": "Directing",
        "actor": "Leading Actor",
        "actress": "Leading Actress",
        "supportingActor": "Supporting Actor",
        "supportingActress": "Supporting Actress",
        "animatedPicture": "Animated Feature Film",
        "international": "International Feature Film",
        "photography": "Cinematography",
        "editing": "Film Editing",
    }

    return <div className="oscars-ballot-horizontal" ref={divRef}>
        <h2>{userName ? userName + "'s" : 'My'} 2024 Oscars Ballot</h2>
        <div className="ballot-content">
            {categories.map((category, index) => <div
                className={`oscars-category-container ${index < 2 ? 'big' : 'small'} ${!selectedNominees[category.name] ? 'not-selected' : ''}`}
                style={{
                    backgroundImage: `url(${selectedNominees[category.name]?.image})`
                }}
            >
                <div className="image-opacity">
                <div className="film-data">
                    <h6>{categoryNames[category.name]}</h6>
                    <h3>{selectedNominees[category.name]?.winner}</h3>
                    {selectedNominees[category.name]?.originalTitle &&
                        <h4><i><b>{selectedNominees[category.name]?.originalTitle}</b></i></h4>}
                    {selectedNominees[category.name]?.film && <>
                        <h4>{selectedNominees[category.name]?.film}</h4>
                    </>}
                    {selectedNominees[category.name]?.reciever && <>
                        <h4>{selectedNominees[category.name]?.reciever}</h4>
                    </>}
                </div>
                </div>
                

            </div>)}

        </div>
        <p className="watermark">made by gongran.es | designed by alvaro.gs</p>
    </div>
}

export default HorizontalBallot;