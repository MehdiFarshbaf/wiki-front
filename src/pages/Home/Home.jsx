// styles
import styles from './Home.module.scss'
import Breadcrumbs from "../../components/home/Breadcrumbs/Breadcrumbs";

const Home = () => {
    return (
        <div className={styles.container}>
            <Breadcrumbs/>
        </div>
    )
}
export default Home