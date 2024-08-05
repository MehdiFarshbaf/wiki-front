import {Link} from "react-router-dom";

//icon
import {ReactComponent as ShareIcon} from './shareIcon.svg'
import {ReactComponent as ArrowIcon} from './arrow_left.svg'

// styles
import styles from './Breadcrumbs.module.scss'

const Breadcrumbs = () => {

    //variables
    const links = [
        {id: 0, label: "ویکی", path: "/"},
        {id: 1, label: "محاسبه‌گر اقساط", path: "/"}
    ]

    return (
        <div className={styles.breadcrumbs}>
            <div className="inside">
                <div className={styles.container}>
                    <div className={styles.right}>
                        <div className={styles.containerLinks}>
                            {links.map(link => (
                                <Link to={link.path} key={link.id} className={styles.link}>
                                    <p>{link.label}</p>
                                    <ArrowIcon/>
                                </Link>
                            ))}
                        </div>
                        <h1>محاسبه‌گر اقساط</h1>
                        <h3>توضیحات محاسبه گر اقساط</h3>
                    </div>
                    <div className={styles.shareIcon}>
                        <ShareIcon/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Breadcrumbs