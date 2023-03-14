import { useState } from "react";
import {Movie} from "../../common/models/movie.model";
import "./MovieDetails.styles.css"

interface IMovieDetailsProps {
    movie : Movie | undefined;
    handleSave(movie : Movie) : void
}

const MovieDetails: React.FC<IMovieDetailsProps> = ({ movie, handleSave }) => {

    const initialMovie : Movie = {
        title : "",
        description : "",
        imageUrl : "",
        isFavorite : false,
        isWatched : false,
        year: 1999
    };

    const [formState, setFormState] = useState<Movie>(movie ?? initialMovie);

    const handleTitleChange = (newValue : string) => {
        setFormState({
            ...formState,
            title : newValue
        });
    }

    const handleYearChange = (newValue : number) => {
        setFormState({
            ...formState,
            year : newValue
        })
    }

    const handleDescChange = (newValue : string) => {
        setFormState({
            ...formState,
            description : newValue
        });
    }

    const handleImageUrlChange = (newValue : string) => {
        setFormState({
            ...formState,
            imageUrl : newValue
        });
    }

    return (
        <div className={"movie-details-root"}>
            <div className="movie-details-header">
                <span>{"Add movie"}</span>
            </div>

            <div className="movie-details-content">
                <div className="movie-details-img-container">
                    <img src={
                        formState.imageUrl
                    } alt="None"/>
                </div>
                <div className="movie-details-form-container">
                    <div className="movie-details-from-field">
                        <label>Title</label>
                        <input
                            type="text"
                            maxLength={50}
                            value={formState.title}
                            onChange={e => {handleTitleChange(e.target.value)}}
                        />
                    </div>
                    <div className="movie-details-from-field">
                        <label>Genre</label>
                    </div>
                    <div className="movie-details-from-field">
                        <label>Year</label>
                        <input
                            type="number"
                            min={1900}
                            max={2023}
                            value={formState.year}
                            onChange={e => {handleYearChange(e.target.valueAsNumber)}}
                        />
                    </div>
                    <div className="movie-details-from-field">
                        <label>Description</label>
                        <input
                            type="text"
                            maxLength={200}
                            value={formState.description}
                            onChange={e => {handleDescChange(e.target.value)}}
                        />
                    </div>
                    <div className="movie-details-from-field">
                        <label>Image url</label>
                        <input
                            type="text"
                            value={formState.imageUrl}
                            onChange={e => {handleImageUrlChange(e.target.value)}}
                        />
                    </div>
                </div>
            </div>

            <div className="movie-details-button-container">
                <button className="movie-details-cancel-button" onClick={() => {}}>Cancel</button>
                <button
                    className="movie-details-save-button"
                    onClick={() => handleSave(formState)}
                    disabled={false}
                >Save
                </button>
            </div>
        </div>
    )
}

export default MovieDetails