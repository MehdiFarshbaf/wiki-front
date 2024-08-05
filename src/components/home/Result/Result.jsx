import {Collapse} from '@mantine/core';
import {useDisclosure} from '@mantine/hooks';

// helper
import {numberWithCommas} from "../../../helper/functions";
// icon
import {ReactComponent as ArrowIcon} from './arrow.svg'
// styles
import styles from './Result.module.scss'

const Result = () => {
    const [opened, {toggle}] = useDisclosure(false);

    return (
        <div className={styles.result}>
            <div className={styles.container}>
                <div className={styles.card}>
                    <div className={styles.item}>
                        <p className={styles.label}>پیش پرداخت:</p>
                        <div className={styles.price}>
                            <p>{numberWithCommas(230000)}</p>
                            <span>ت</span>
                        </div>
                    </div>
                    <div className="divider"/>
                    <div className={styles.item}>
                        <p className={styles.label}>مبلغ قسط:</p>
                        <div className={styles.price}>
                            <p>{numberWithCommas(230000)}</p>
                            <span>ت</span>
                        </div>
                    </div>
                    <div className="divider"/>
                    <div className={styles.item}>
                        <p className={styles.label}>مبلغ نهایی خودرو:</p>
                        <div className={styles.price}>
                            <p>{numberWithCommas(230000)}</p>
                            <span>ت</span>
                        </div>
                    </div>
                    <div className="divider"/>
                    <div className={styles.item}>
                        <p className={styles.label}>گردش ماهانه:</p>
                        <div className={styles.price}>
                            <p>{numberWithCommas(230000)}</p>
                            <span>ت</span>
                        </div>
                    </div>
                    <div className="divider"/>
                    <div className={styles.item} onClick={toggle}>
                        <p className={styles.label}>مدارک مورد نیاز:</p>
                        <div className={`${styles.icon} ${opened ? styles.rotate : null}`}><ArrowIcon/></div>
                    </div>
                    <Collapse in={opened}>
                        <p className={styles.collapse}>لیست مدارک اینجا میاد ولی متاسفانه دسترسی ندارم بهش توو فیگما</p>
                    </Collapse>
                </div>

            </div>
        </div>
    )
}
export default Result