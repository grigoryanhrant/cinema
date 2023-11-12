import {useGetFeaturedMovieQuery} from "../../api/moviesApi.ts";
import {useEffect, useState} from "react";
import {MovieType} from "../../common/types";

export const useFeaturedMovieFacade = () => {
    const storedValue = localStorage.getItem("featuredMovie");
    const storedFeaturedMovie = storedValue ? JSON.parse(storedValue) : null;

    const [featuredMovie, setFeaturedMovieLocal] = useState<MovieType | null>(storedFeaturedMovie || null);

    useEffect(() => {
        localStorage.setItem('featuredMovie', JSON.stringify(featuredMovie))
    }, [featuredMovie]);

    const {
        data,
        error,
        isLoading
    } = useGetFeaturedMovieQuery("", {
        skip: storedFeaturedMovie,
    })

    useEffect(() => {
        if (data) {
            setFeaturedMovieLocal(data);
            localStorage.setItem('featuredMovie', JSON.stringify(data))
        }
    }, [data]);


    return {error, isLoading, featuredMovie, setFeaturedMovieLocal};
}