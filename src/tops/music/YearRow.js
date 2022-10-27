const YearRow = ({ yearClass, albumList }) => {
	return (
		<div className={`year-row ${yearClass}`}>
			<div className="year-title">
				<span>{albumList.year}</span>
			</div>
			<div className="year-scroll">
				{albumList.albums.map((album) => {
					const coverClassName =
						album.position === 1
							? "top-1-cover"
							: album.position < 4
							? "top-podium-cover"
							: "cover";

					return (
						<div>
							<img
								src={album.cover}
								alt={`${album.artist} - ${album.name}`}
								className={coverClassName}
							/>
							<div className="album-data-container">
								<p className="album-position">{album.position}</p>
								<div className="album-data">
									<p className="artist-name">{album.artist}</p>
									<p className="album-name">{album.name}</p>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default YearRow;
