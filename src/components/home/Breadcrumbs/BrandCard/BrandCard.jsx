import {useHover} from '@mantine/hooks';
// styles
import styles from './BrandCard.module.scss'

const BrandCard = ({brand, isActive}) => {

    const {hovered, ref} = useHover();

    return (
        <div key={brand.id} className={styles.card} ref={ref}>
            <img className={styles.image} src={brand.image} alt=""/>
            <h2 className={styles.title}>{brand.title}</h2>
            <div className={styles.badge}>
                <p>{`سود سالیانه : ${brand.fee}%`}</p>
            </div>
        </div>
    )
}
export default BrandCard