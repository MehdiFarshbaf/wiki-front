import {Modal} from '@mantine/core';

// styles
import styles from './SelectCarModal.module.scss'

const SelectCarModal = ({opened, setOpened}) => {
    return (
        <Modal opened={opened} onClose={() => setOpened(false)} withCloseButton={false} centered
               overlayProps={{
                   backgroundOpacity: 0.55,
                   blur: 3,
               }}
               classNames={{
                   content: styles.content
               }}
        >
            <h2 className={styles.title}>انتخاب برند و مدل</h2>
            <p className={styles.subTitle}>خودروی مورد نظر خود را از لیست زیر انتخاب کنید.</p>
        </Modal>
    )

}
export default SelectCarModal