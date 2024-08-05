
// styles
import styles from './BrandCard.module.scss'

const BrandCard = ({brand, isActive}) => {

    return (
        <div key={brand.id} className={styles.card} >
            <img className={styles.image} src={brand.image} alt=""/>
            <h2 className={styles.title}>{brand.title}</h2>
            <div className={styles.badge}>
                <p>{`سود سالیانه : ${brand.fee}%`}</p>
            </div>
        </div>
    )
}
export default BrandCard