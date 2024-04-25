import React, { useEffect, useState } from 'react';
import { IMovieResponse } from '../../services/movies/types';
import { getMyFavoritesMovies } from '../../services/movies/getMyFavoritesMovies';
import { MovieCard } from '../../components/MovieCard';
import { MovieCarousel } from '../../components/MovieCarousel';

const MyFavorites: React.FC = () => {
  const [movies, setMovies] = useState<IMovieResponse[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMovies, setErrorMovies] = useState<boolean>(false);

  const getMyFavorites = async () => {
    await getMyFavoritesMovies()
      .then((res) => {
        if (res && res.data){
          console.log(res.data, "res")
          setMovies(res.data.results);
        }
      })
      .catch((err) => {
        console.log(err, "err")
      });
    setLoading(false);
  };
  return (
    <div className="p-4">
        <h1 className="text-4xl mb-4 ml-8">My Favorites</h1>
        <div className="grid grid-cols-4 gap-4"></div>
      {loading && <div> Loading...</div>}
      {errorMovies && <div> Error...</div>}
      {movies?.length > 0 && 
        movies.map((movie) => (
          /**<MovieCard
          key={movie.id}
          movieId={movie.id}
          posterPath={movie.poster_path}
          title={movie.title}
          voteAverage={movie.vote_average}
          genreId={movie.genre_ids[0]}
          />*/
          <MovieCarousel  />
        ))}
    </div>
  );
};

  


export default MyFavorites;