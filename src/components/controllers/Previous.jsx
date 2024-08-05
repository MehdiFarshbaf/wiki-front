// icon
import {ReactComponent as PreviousIcon} from './Previous.svg'
//styles
import styles from './Pervious.module.scss'

const Previous = ({swiper}) => {
    return (
        <div className={styles.container}>
            <PreviousIcon  onClick={() => swiper.slidePrev()}/>
        </div>
    )
}
export default Previous