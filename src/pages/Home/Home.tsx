import {FeaturedMovie} from "../../components/FeaturedMovie/FeaturedMovie.tsx";
import styles from "./Home.module.scss";

const Home = () => {

    return (
        <div className={styles.page}>
            <FeaturedMovie />
        </div>
    );
};

export default Home;