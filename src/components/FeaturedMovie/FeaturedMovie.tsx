import Video from "../Video/Video.tsx";
import {getStaticImageUrl} from "../../utils/getStaticImageUrl.ts";
import {secondsToHoursMinutes} from "../../utils/secondsToHoursMinutes.ts";
import {useFeaturedMovieFacade} from "./useFeaturedMovieFacade.ts";
import {useTendingNowMoviesFacade} from "./useTendingNowMoviesFacade.ts";
import {useEffect, useRef, useState} from "react";
import styles from "./FeaturedMovie.module.scss";
import arrowIcon from "../../assets/icons/ICON - Play.png";
import {Swiper, SwiperSlide} from "swiper/react";
import {moveElementToBeginning} from "../../utils/moveElementToBeginning.ts";
import 'swiper/css';

export const FeaturedMovie = () => {

    const {
        isLoading: featuredMovieIsLoading,
        error: featureMovieIsError,
        featuredMovie,
        setFeaturedMovieLocal
    } = useFeaturedMovieFacade();

    const {
        isLoading: tendingNowMoviesIsLoading,
        error: tendingNowMoviesIsError,
        tendingNowMovies,
        setTendingNowMovies
    } = useTendingNowMoviesFacade();

    const firstMountRef = useRef(false);

    const [videoOn, setVideoOn] = useState(false);


    useEffect(() => {
        setTimeout(() => firstMountRef.current = true, 0)
    }, []);

    useEffect(() => {
        if (firstMountRef.current) {
            setVideoOn(false);

            setTimeout(() => {
                setVideoOn(true);
            }, 2000)


            if (featuredMovie && tendingNowMovies) {
                const updatedTendingMoviesList = moveElementToBeginning(tendingNowMovies, featuredMovie?.Id);

                localStorage.setItem("tendingNowMovies", JSON.stringify(updatedTendingMoviesList))

                setTendingNowMovies(updatedTendingMoviesList);
            }
        }
    }, [featuredMovie]);

    return (
        <div className={styles.featuredMovie}>
            {featureMovieIsError && <div>Failed to load the clip, please try again later.</div>}
            {!featuredMovieIsLoading ?
                <>
                    <div className={styles.imageWrapper}>
                        {videoOn ? <Video src={featuredMovie?.VideoUrl || ""}/> :
                            <img src={getStaticImageUrl(featuredMovie?.CoverImage as string)}
                                 alt={featuredMovie?.Title}/>}
                    </div>
                    <div className={styles.content}>
                        <span className={styles.category}>{featuredMovie?.Category}</span>
                        <h1 className={styles.title}>{featuredMovie?.Title}</h1>
                        <div className={styles.row}>
                            <span>{featuredMovie?.ReleaseYear}</span>
                            <span>{featuredMovie?.MpaRating}</span>
                            <span>{secondsToHoursMinutes(featuredMovie?.Duration as string)}</span>
                        </div>
                        <p className={styles.description}>{featuredMovie?.Description}</p>

                        <div className={styles.coloredButtons}>
                            <button className={styles.button}>
                                <img src={arrowIcon} alt={"arrow"}/>
                                Play
                            </button>
                            <button className={styles.button}>More Info</button>
                        </div>
                    </div>
                </>
                : <div>Featured Movie is Loading ...</div>}

            {tendingNowMoviesIsError && <div>Could not load popular videos, please try again later..</div>}
            {!tendingNowMoviesIsLoading ?
                <div className={styles.trendingNow}>
                    <span className={styles.title}>Trending Now</span>
                    <div className={styles.movies}>
                        <Swiper
                            spaceBetween={50}
                            slidesPerView={8}
                        >
                            {tendingNowMovies?.map((movie) => {

                                const src = getStaticImageUrl(movie.CoverImage);

                                return (
                                    <SwiperSlide className={styles.slide} key={movie.Id} onClick={() => {
                                        setFeaturedMovieLocal(movie);
                                    }}>
                                        <img src={src} alt={movie.Title}/>
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                    </div>
                </div> : <div>TendingNowMovies is Loading ...</div>}
        </div>
    );
};