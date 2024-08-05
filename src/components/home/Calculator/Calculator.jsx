import Result from "../Result/Result";
import Select from "../../Select/Select";
import {numberWithCommas} from "../../../helper/functions";
import {Slider} from '@mantine/core';
import Selector from "../../MonthSelector/Selector";
import {listDistance, listMonth} from "../../../helper/data";
import {useState} from "react";

// styles
import styles from './Calculator.module.scss'

// icon
import {ReactComponent as TrackIcon} from './track.svg'

const Calculator = () => {

    //variables
    const [value, setValue] = useState(1200);

    return (
        <section className={styles.calculator}>
            <div className="inside d-flex-center">
                <div className={styles.container}>
                    <div className={styles.card}>
                        <Select placeholder="انتخاب خودرو"/>

                        <div className="divider"/>
                        <div className={styles.item}>
                            <p className={styles.label}>پییش پرداخت :</p>
                            <div className={styles.price}>
                                <p>{numberWithCommas(value)}</p>
                                <span>ت</span>
                            </div>
                        </div>
                        <Slider
                            thumbChildren={<div className={styles.containerTrack}><TrackIcon/></div>}
                            value={value}
                            min={0}
                            max={1500}
                            onChange={setValue}
                            label={null}
                            classNames={{
                                trackContainer: styles.trackContainer,
                                root: styles.root,
                                bar: styles.bar,
                                track: styles.track,
                                thumb: styles.thumb,
                            }}
                        />
                        <div className="divider"/>
                        <div className={styles.item}>
                            <p className={styles.label}>مدت زمان اقساط :</p>
                            <Selector list={listMonth}/>
                        </div>
                        <div className="divider"/>
                        <div className={styles.item}>
                            <p className={styles.label}>فاصله اقساط :</p>
                            <Selector list={listDistance}/>
                        </div>
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