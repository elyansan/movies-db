import React, { useEffect, useState } from 'react';
import { IMovieResponse } from '../../services/movies/types';
import { getNowPlayingMovies } from '../../services/movies/getNowPlayingMovies';
import { MovieCard } from '../../components/MovieCard';

const NowPlaying: React.FC = () => {
  const [movies, setMovies] = useState<IMovieResponse[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMovies, setErrorMovies] = useState<boolean>(false);

  const getNowPlaying = async () => {
    await getNowPlayingMovies()
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
      <h1 className="text-4xl mb-4 ml-8">Now Playing</h1>
      <div className="grid grid-cols-4 gap-4">
        {movies.map((movie: IMovieResponse) => (
          <MovieCard genreId={0} movieId={0} voteAverage={0} posterPath={''} key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  );
};

export default NowPlaying;