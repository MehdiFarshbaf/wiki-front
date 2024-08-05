// styles
import styles from './ListItemSearch.module.scss'

// Arrow Icon
import ArrowImage from './ArrowIcon.png'
import LogoImage from './Logo.png'

const ListItemSearch = ({item}) => {
    return (
        <>
            <div className={styles.container}>
                <img src={ArrowImage} alt=""/>
                <div className={styles.containerNameIcon}>
                    <p className={styles.name}>{item.name}</p>
                    <div className={styles.logo}><img src={LogoImage} alt=""/></div>
                </div>
            </div>
            <div className="divider"/>
        </>
    )
}
export default ListItemSearch