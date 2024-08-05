import {navList} from "../../../helper/data";
import {Link} from "react-router-dom";
// styles
import styles from './NavBar.module.scss'

import NavItem from "./NavItem";

const NavBar = () => {

    return (
        <nav className={styles.nav}>
            {navList.map(nav =>
                nav.subMenu == null ?
                    <Link key={nav.id} className={styles.navItem} to={nav.path}><p>{nav.label}</p></Link> :
                    <NavItem nav={nav}/>
            )}
        </nav>
    )
}
export default NavBar