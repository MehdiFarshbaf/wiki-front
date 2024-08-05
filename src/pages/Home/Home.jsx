// styles
import styles from './Home.module.scss'
import Breadcrumbs from "../../components/home/Breadcrumbs/Breadcrumbs";
import Brands from "../../components/home/Brands/Brands";
import {changeTitlePage} from "../../helper/functions";

const Home = () => {

    changeTitlePage("مرجع اطلاعات خودرویی")

    return (
        <div className={styles.container}>
            <Breadcrumbs/>
            <Brands/>
        </div>
    )
}
export default Home