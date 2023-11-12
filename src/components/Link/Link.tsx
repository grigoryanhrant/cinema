import {NavLink} from "react-router-dom";
import styles from "./Link.module.scss";

interface Props {
    route: string,
    name: string,
    icon: string,
    isHovered: boolean,
    handleMouseEnter: () => void,
}

const baseClassName = styles.navLink;
const activeClassName = styles.navLinkActive;
const hoverClassName = styles.isHovered;
const currentPath = window.location.pathname;

const Link = ({isHovered, route, name, icon, handleMouseEnter}: Props) => {

    const className =
        `${baseClassName} ${currentPath === route ? activeClassName : ''} ${isHovered ? hoverClassName : ''}`;

    return (
        <NavLink
            className={className}
            to={route}>
            <span
                className={styles.imgWrapper}
                onMouseEnter={handleMouseEnter}
            >
                <img src={icon} alt={name}/>
            </span>

            <span className={styles.label}>
                {name}
            </span>
        </NavLink>
    );
};

export default Link;