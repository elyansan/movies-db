import React, { useEffect, useState } from 'react';
import { IMovieResponse } from '../../services/movies/types';
import { getPopularMovies } from '../../services/movies/getPopularMovies';
import { MovieCard } from '../../components/MovieCard';
import { MovieCarousel } from '../../components/MovieCarousel';

const Popular: React.FC = () => {
  const [movies, setMovies] = useState<IMovieResponse[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMovies, setErrorMovies] = useState<boolean>(false);

  const getPopular = async () => {
    await getPopularMovies()
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
        <h1 className="text-4xl mb-4 ml-8">Popular</h1>
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

  


export default Popular;