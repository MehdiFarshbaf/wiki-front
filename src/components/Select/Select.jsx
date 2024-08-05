import {useState} from "react";
// styles
import styles from './Select.module.scss'
// icon
import {ReactComponent as ArrowIcon} from './arrowIcon.svg'
import SelectCarModal from "../modals/SelectCarModal/SelectCarModal";

const Select = ({placeholder}) => {

    const [showModal, setShowModal] = useState(false)
    return (
        <div className={styles.select} onClick={() => setShowModal(true)}>
            <p className={styles.placeholder}>{placeholder}</p>
            <div className={styles.arrow}>
                <ArrowIcon/>
            </div>
            <SelectCarModal opened={showModal} setOpened={setShowModal}/>
        </div>
    )
}
export default Select