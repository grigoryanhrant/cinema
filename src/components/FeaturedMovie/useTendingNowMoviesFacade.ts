import {useEffect, useState} from "react";
import {useGetTendingNowMoviesQuery} from "../../api/moviesApi.ts";
import {MovieType} from "../../common/types";

export const useTendingNowMoviesFacade = () => {
    const storedValue = localStorage.getItem("tendingNowMovies");
    const storedTendingNowMovies = storedValue ? JSON.parse(storedValue) : null;

    const [tendingNowMovies, setTendingNowMovies] = useState<MovieType[] | null>(storedTendingNowMovies || null);

    useEffect(() => {
        localStorage.setItem('tendingNowMovies', JSON.stringify(tendingNowMovies))
    }, [tendingNowMovies]);

    const {
        data,
        error,
        isLoading
    } = useGetTendingNowMoviesQuery("", {
        skip: storedTendingNowMovies,
    })

    useEffect(() => {
        if (data) {
            setTendingNowMovies(data);
            localStorage.setItem('tendingNowMovies', JSON.stringify(data))
        }
    }, [data]);

    return {error, isLoading, tendingNowMovies, setTendingNowMovies};
}