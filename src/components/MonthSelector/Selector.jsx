import {useState} from "react";
// styles
import styles from './Selector.module.scss'

const Selector = ({list}) => {

    //variables

    const [select, setSelected] = useState(list[0].id)

    return (
        <div className={styles.container}>
            {list.map((month, index) => (
                <div key={index} onClick={() => setSelected(month.id)}
                     className={`${styles.item} ${select === index ? styles.selected : null}`}>
                    <p>{month.label}</p>
                </div>
            ))}
        </div>
    )
}
export default Selector