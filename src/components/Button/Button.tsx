import styles from "./Button.module.scss";

interface Props {
    text: string;
    type: "submit" | "button",
    onClick: () => void;
    disabled?: boolean,
}

const Button = ({onClick, text, type, disabled}: Props) => {
    return (
        <button className={styles.button} type={type} onClick={onClick} disabled={disabled}>
            {text}
        </button>
    );
};

export default Button;