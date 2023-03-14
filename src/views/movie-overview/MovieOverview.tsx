import { Movie } from "../../common/models/movie.model";
import MovieListItem from "./movie-list-item/MovieListItem";
import "./MovieOverview.styles.css"

interface IMovieOverviewProps {
    movies : Movie[],
    onFavoriteClick(id : number) : void,
    onWatchClick(id : number) : void,
    onDeleteClick(id : number) : void,
    onEditMovie(movie ?: Movie) : void,
}

const MovieOverview : React.FC<IMovieOverviewProps> = ({ movies, onFavoriteClick, onWatchClick, onDeleteClick, onEditMovie }) => {

    return (
        <div className="movie-overview-root">
            <div className="movie-overview-button-container">
                <button onClick={() => onEditMovie()}>Add movie</button>
            </div>

            <div className="movie-overview-item-container">
                <div className="movie-overview-header">
                    <div className="movie-overview-header-column" style={{ width: "40px" }} />
                    <div className="movie-overview-header-column" style={{ width: "40px"}} />
                    <div className="movie-overview-header-column"  style={{ width: "400px"}}>
                        Title
                    </div>
                    <div className="movie-overview-header-column"  style={{ width: "70px" }}>
                        Year
                    </div>
                    <div className="movie-overview-header-column" style={{ width: "110px" }}>
                        Watched
                    </div>
                    <div className="movie-overview-header-column" style={{ width: "40px" }} />
                </div>
            </div>

            { movies.map((movie, index) => <MovieListItem   movie={movie} 
                                                            orderNr={index + 1} 
                                                            key={ movie.id } 
                                                            onFavoriteClick={onFavoriteClick} 
                                                            onWatchClick={onWatchClick} 
                                                            onDeleteClick={onDeleteClick}
                                                            onEdit={() => onEditMovie(movie)}
                                            /> )}
        </div>
    )
}

export default MovieOverview