import searchIcon from "../../assets/icons/ICON - Search.png";
import homeIcon from "../../assets/icons/Group 46.png";
import tvShowsIcon from "../../assets/icons/Group 56.png";
import moviesIcon from "../../assets/icons/Group 54.png";
import genresIcon from "../../assets/icons/Group 53.png";
import watchLaterIcon from "../../assets/icons/Group 47.png";

export const routes = [
    {
        route: 'search',
        name: 'Search',
        icon: searchIcon,
        id: 0,
    },
    {
        route: '/',
        name: 'Home',
        icon: homeIcon,
        id: 1,
    },
    {
        route: 'tv-shows',
        name: 'TV Shows',
        icon: tvShowsIcon,
        id: 2,
    },
    {
        route: 'movies',
        name: 'Movies',
        icon: moviesIcon,
        id: 3,
    },
    {
        route: 'genres',
        name: 'Genres',
        icon: genresIcon,
        id: 4,
    },
    {
        route: 'watchLater',
        name: 'Watch Later',
        icon: watchLaterIcon,
        id: 5,
    }
]