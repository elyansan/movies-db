import React, { useEffect, useState } from 'react';
import { IMovieResponse } from '../../services/movies/types';
import { getTopRatedMovies } from '../../services/movies/getTopRatedMovies';
import { MovieCard } from '../../components/MovieCard';

const TopRated: React.FC = () => {
  const [movies, setMovies] = useState<IMovieResponse[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMovies, setErrorMovies] = useState<boolean>(false);

const getTopRated = async () => {
    await getTopRatedMovies()
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
        <h1 className="text-4xl mb-4 ml-8">Top Rated</h1>
        <div className="grid grid-cols-4 gap-4">
            {movies.filter(movie => movie.vote_average > 8.5).map((movie: IMovieResponse) => (
                <MovieCard  
                    genreId={movie.genre_ids[0]} 
                    movieId={movie.id} 
                    voteAverage={movie.vote_average} 
                    posterPath={movie.poster_path} 
                    key={movie.id} 
                    {...movie} 
                />
            ))}
        </div>
    </div>
);
};

export default TopRated;