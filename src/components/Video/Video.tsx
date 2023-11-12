import styles from "./Video.module.scss";

interface Props {
    src: string,
}

const Video = ({src}: Props) => {
    return (
        <video width="100%" className={styles.video} autoPlay>
            <source src={src} type="video/mp4"/>
            <source src={src} type="video/ogg"/>
            Your browser does not support the video tag.
        </video>
    );
};

export default Video;