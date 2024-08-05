import {useDisclosure} from "@mantine/hooks";

// styles
import styles from './Select.module.scss'
// icon
import {ReactComponent as ArrowIcon} from './arrowIcon.svg'

import {Modal} from "@mantine/core";
import SearchInModal from "../modals/SearchInModal/SearchInModal";
import {listCars} from "../../helper/data";
import ListItemSearch from "../modals/ListItemSearch/ListItemSearch";


const Select = ({placeholder}) => {

    const [opened, {open, close}] = useDisclosure(false);
    return (
        <>
            <div className={styles.select} onClick={open}>
                <p className={styles.placeholder}>{placeholder}</p>
                <div className={styles.arrow}>
                    <ArrowIcon/>
                </div>
            </div>
            <Modal opened={opened} onClose={close} withCloseButton={false} centered
                   closeOnClickOutside
                   overlayProps={{
                       backgroundOpacity: 0.55,
                       blur: 3,
                   }}
                   classNames={{
                       content: styles.content
                   }}
            >
                <h2 className={styles.titleModal}>انتخاب برند و مدل</h2>
                <p className={styles.subTitle}>خودروی مورد نظر خود را از لیست زیر انتخاب کنید.</p>
                <SearchInModal/>
                <div className="divider"/>
                {listCars.map(car => (
                    <ListItemSearch key={car.id} item={car}/>
                ))}
                <div className={styles.buttons}>
                    <button className={styles.btnClose}
                            onClick={close}>بستن
                    </button>
                    <button className={styles.btnSelect} onClick={close}>اننتخاب</button>
                </div>
            </Modal>
        </>

    )
}
export default Select