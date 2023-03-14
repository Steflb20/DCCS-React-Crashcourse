import AppHeader from "./common/components/app-header/AppHeader";
import "./App.css"
import { Movie } from "./common/models/movie.model";
import { useState } from "react";
import MovieOverview from "./views/movie-overview/MovieOverview";
import { moviesMockData } from "./common/mock-data";
import MovieDetails from "./views/movie-details/MovieDetails";


export enum AppViews {
  MovieOverview = 1,
  MovieDetails
}

function App() {

  const [movies, setMovies] = useState<Movie[]>(moviesMockData);
  const [selectedView, setSelectedView] = useState<AppViews>(AppViews.MovieOverview);
  const [selectedMovie, setSelectedMovie] = useState<Movie | undefined>();

  const renderSelectedView = () : React.ReactElement => {
    if (selectedView === AppViews.MovieOverview) {
      return (
        <MovieOverview  movies={ movies } 
                        onFavoriteClick={ handleFavoriteClick } 
                        onWatchClick={ handleWatchedClick } 
                        onDeleteClick={handleDeleteClick}
                        onEditMovie={handleMovieEdit}
        />
      )
    } else if (selectedView === AppViews.MovieDetails) {
      return (
        <MovieDetails movie={selectedMovie} handleSave={handleSaveMovie}/>
      )
    }

    return <div></div>
  }

  const handleMovieEdit = (movie ?: Movie) => {
    if (movie != null) {
      setSelectedMovie({ ...movie });
    }
    setSelectedView(AppViews.MovieDetails)
  }

  const handleFavoriteClick = (id : number) => {
    const updated = movies.map(e => {
      if (e.id === id) {
        return {
          ...e,
          isFavorite : !e.isFavorite
        }
      } else {
        return e;
      }
    })

    setMovies(updated);
  }

  const handleWatchedClick = (id : number) => {
    const updated = movies.map(e => {
      if (e.id === id) {
        return {
          ...e,
          isWatched : !e.isWatched
        }
      } else {
        return e;
      }
    })

    setMovies(updated);
  }

  const handleDeleteClick = (id : number) => {
    const updated = movies.filter(e => e.id != id);
    setMovies(updated);
  }

  const handleSaveMovie = (movie : Movie) => {
    if (movie.id == null) {
      const id = Number(Math.random().toString().slice(2));
      setMovies([ ...movies, { ...movie, id : id } ])
    } else {
      const updated = movies.map(e => {
        if (e.id === movie.id) {
          return movie;
        } else {
          return e;
        }
      })

      setMovies(updated);

    }

    setSelectedView(AppViews.MovieOverview);
  }

  return (
    <div className="app">
      <AppHeader />
      <div className="app-content">
        { renderSelectedView() }
      </div>
    </div>
  );
}

export default App;