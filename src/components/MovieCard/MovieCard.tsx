import React from "react";
import { IMovieCard } from "./types";
import { IMAGE_SOURCE } from "../../constants/moviesMock";
import { Pill } from "../Pill";
import genresData from '../../constants/genres.json';
import './MovieCard.css';
import { FaStar } from 'react-icons/fa';

const MovieCard: React.FC<IMovieCard> = ({
    title,
    genreId,
    movieId,
    voteAverage,
    posterPath,
}) => {
    const poster = IMAGE_SOURCE + posterPath;

    const getGenre = (genreId: number): string => {
        const genre = genresData.genres.find((genre: { id: number }) => genre.id === genreId);
        return genre ? genre.name : "";
    };

    return (
        <div className="movie-card">
           <img className="movie-poster" src={poster} alt='poster' />
           <div className="movie-overlay"/>
            <div className="movie-info">
                <Pill genre={getGenre(genreId)} colorPill='purple' />
                <h2 className="text-lg font-bold">{title}</h2>
                <p className="text-xs"><span className="rating"> <FaStar className="mr-1"/>   {voteAverage} /10</span></p>
            </div>
        </div>
    );


};

export default MovieCard;