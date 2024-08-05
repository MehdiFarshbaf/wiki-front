import {ReactComponent as NextIcon} from './Previous.svg'
//styles
import styles from './Next.module.scss'

const Next = ({swiper}) => {
    return (
        <div className={styles.container}>
            <NextIcon onClick={() => swiper.slideNext()}/>
        </div>
    )
}
export default Next