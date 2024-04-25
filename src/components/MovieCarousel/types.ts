export interface IMovie {
    title: string;
    genre_ids: number[];
    id: number;
    vote_average: number;
    poster_path: string;
}

export interface ICarousel{
    movies: IMovie[];
}
