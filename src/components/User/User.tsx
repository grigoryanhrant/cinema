import styles from './User.module.scss';

interface Props {
    imageUrl: string,
    username: string,
}

const User = ({imageUrl, username}: Props) => {
    return (
        <div className={styles.user}>
            <img src={imageUrl} alt={username}/>
            <span className={styles.username}>
                {username}
            </span>
        </div>
    );
};

export default User;