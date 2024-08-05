import NavBar from "./NavBar/NavBar";
import {Link} from "react-router-dom";

// logo
import logo from './../../assets/images/logo.png'
// styles
import styles from './Header.module.scss'


const Header = () => {
    return (
        <header className={`d-flex-center ${styles.header}`}>
            <div className="inside">
                <div className={styles.container}>
                    <div className={styles.logoAndNav}>
                        <Link to="/"><img src={logo} alt=""/></Link>
                        <NavBar/>
                    </div>
                    <div className={styles.leftHeader}>
                        <button className={styles.button}>ثبت آگهی</button>
                        <p>asdf</p>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header