import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MovieCard from '../MovieCard/MovieCard';
import { movies } from '../../constants/moviesMock';
import  './MovieCarousel.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5.5, // change number of items you want to show on desktop here
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2, // change number of items you want to show on tablet here
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1, // change number of items you want to show on mobile here
  },
};

const MovieCarousel = () => {
  return (
    <Carousel responsive={responsive} className="space-x-5 pl-5 mt-8 scroll-smooth">
      {movies.map((movie) => (
        <div key={movie.id} className="carousel-slide">
          <MovieCard
            genreId={movie.genre_ids[0]} 
            movieId={movie.id}
            voteAverage={movie.vote_average}
            posterPath={movie.poster_path}
            {...movie}
          />
           <div className="carousel .slide::after"></div>
        </div>
      ))}
    </Carousel>
  );
};

export default MovieCarousel;