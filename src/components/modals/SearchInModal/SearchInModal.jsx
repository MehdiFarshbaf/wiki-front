import styles from './SearchInModal.module.scss'
//icon
import {ReactComponent as SearchIcon} from './SearchIcon.svg'

const SearchInModal = () => {
    return (
        <div className={styles.container}>
            <SearchIcon/>
            <input className={styles.input} type="text" placeholder="جستجو بین برند، مدل و تیپ‌ها"/>
        </div>
    )
}
export default SearchInModal