import {routes} from "./routes.ts";
import {useState} from "react";
import Link from "../Link/Link.tsx";
import User from "../User/User.tsx";
import styles from "./Navigation.module.scss";
import userImage from "../../assets/static/Sung-Gi-Hoon-1.png";
import Button from "../Button/Button.tsx";

const Navigation = () => {

    const [isHovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    }

    const handleMouseLeave = () => setHovered(false);

    const navLinksRender = routes.map(({route, name, icon, id}) =>
        <Link key={id} isHovered={isHovered} route={route} name={name} icon={icon} handleMouseEnter={handleMouseEnter}/>
    )

    const className = isHovered ? ` ${styles.navigation} ${styles.isHovered}` : styles.navigation;

    return (
        <div
            className={className}
            onMouseLeave={handleMouseLeave}
        >
            <div className={styles.userWrapper}>
                <User imageUrl={userImage} username={"Daniel"}/>
            </div>
            <nav className={styles.nav}>
                {navLinksRender}
            </nav>

            <div className={styles.buttons}>
                <Button
                    text={"language"}
                    type={"button"}
                    onClick={() => {}}
                    disabled={true}/>
                <Button
                    text={"get help"}
                    type={"button"}
                    onClick={() => {}}
                    disabled={true}/>
                <Button
                    text={"exit"}
                    type={"button"}
                    onClick={() => {}}
                    disabled={true}/>
            </div>
        </div>
    )
};

export default Navigation;
