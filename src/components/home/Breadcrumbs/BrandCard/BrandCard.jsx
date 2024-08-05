// styles
import styles from './BrandCard.module.scss'

const BrandCard = ({brand}) => {
    return (
        <div key={brand.id} className={styles.card}>
            <img src={brand.image} alt=""/>
        </div>
    )
}
export default BrandCard