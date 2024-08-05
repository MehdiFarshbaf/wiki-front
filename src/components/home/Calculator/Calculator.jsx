import Result from "../Result/Result";
import Select from "../../Select/Select";

// styles
import styles from './Calculator.module.scss'

const Calculator = () => {

    //variables

    return (
        <section className={styles.calculator}>
            <div className="inside d-flex-center">
                <div className={styles.container}>
                    <div className={styles.card}>
                        <Select placeholder="انتخاب خودرو"/>
                        <div className="divider"/>
                        <div className="divider"/>
                        <div className="divider"/>
                        <div className="divider"/>
                        <button className={styles.subButton}>محاسبه</button>
                    </div>
                    <Result/>
                </div>
            </div>
        </section>
    )
}
export default Calculator