import styles from "./NotFound.module.scss";
import url from "../../assets/static/notFoundBackground.jpg";
import notFoundMusic from "../../assets/Ludovico_Einaudi_-_Una_mattina_OST_The_Intouchables_64702069.mp3";

const NotFound = () => {

    return (
        <div className={styles.image}>

            <audio autoPlay>
                <source src={notFoundMusic} type="audio/ogg" />
                <source src={notFoundMusic} type="audio/mpeg" />
            </audio>

            <div className={styles.text}>Sorry this page does not exist yet</div>
            <img src={url} alt={"page not found"} />
        </div>
    );
};

export default NotFound;