import "./MovieListItem.styles.css"
import {BookmarkAdded, BookmarkBorder, Delete, Star, StarOutline} from "@mui/icons-material";
import { Movie } from "../../../common/models/movie.model";

interface IMovieListItemProps {
    movie : Movie,
    orderNr : number
    onFavoriteClick(id : number) : void,
    onWatchClick(id : number) : void,
    onDeleteClick(id : number) : void,
    onEdit(movie ?: Movie) : void
}

const MovieListItem: React.FC<IMovieListItemProps> = ({ movie, orderNr, onFavoriteClick, onWatchClick, onDeleteClick, onEdit }) => {

    return (
        <div className="movie-list-item" onClick={() => onEdit()}>
            <div className="movie-list-item-column" style={{ width: "40px" }}>
                <span className="movie-list-item-icon" onClick={(e) => {
                    e.stopPropagation();
                    movie.id && onFavoriteClick(movie.id);
                }}>
                    { movie.isFavorite ? <Star /> : <StarOutline /> }
                </span>
            </div>
            <div className="movie-list-item-column" style={{ width: "40px"}}>
                <img className="movie-list-item-img" src={movie.imageUrl} alt={"pic"} />
            </div>
            <div className="movie-list-item-column"  style={{ width: "400px" }}>
                <span>{`${orderNr}. ${movie.title}`}</span>
            </div>
            <div className="movie-list-item-column"  style={{ width: "70px" }}>
                <span>{movie.year}</span>
            </div>
            <div className="movie-list-item-column" style={{ width: "110px" }}>
                <span className="movie-list-item-icon" onClick={(e) => {
                    e.stopPropagation();
                    movie.id && onWatchClick(movie.id);
                }}>
                    {movie.isWatched ? <BookmarkAdded /> : <BookmarkBorder /> }
                </span>
            </div>
            <div className="movie-list-item-column" style={{ width: "40px" }}>
                <span className="movie-list-item-icon-delete" onClick={(e) => {
                    e.stopPropagation();
                    movie.id && onDeleteClick(movie.id)
                }}>
                    <Delete />
                </span>
            </div>
        </div>
    )
}

export default MovieListItem