import styles from './Footer.module.scss'
import {downloadWays, socialsFooter, symbolsFooter} from "../../helper/data";
import {appConfig} from "../../helper/config";

const Footer = () => {
    return (
        <footer className={`d-flex-center ${styles.footer}`}>
            <div className="inside">
                <div className={styles.container}>
                    {/*downloads*/}
                    <div>
                        <p className={styles.title}>دریافت برنامه:</p>
                        <div className={styles.downloadIcons}>
                            {downloadWays.map(way => (
                                <img key={way.id} src={way.image} alt={way.name}/>
                            ))}
                        </div>
                    </div>
                    {/*socials and contact*/}
                    <div>
                        <p className={styles.title}>شبکه های اجتماعی:</p>
                        <div className={styles.socialsIcons}>
                            {socialsFooter.map(social => (
                                <img key={social.id} src={social.image} alt={social.name}/>
                            ))}
                        </div>
                        <p className={styles.title}>اطلاعات تماس :</p>
                        <p className={styles.info}>{appConfig.address}</p>
                        <p className={styles.info}>{appConfig.phoneNumber}</p>
                    </div>
                    <div>
                        <div className={styles.logos}>
                            {symbolsFooter.map(symbol => (
                                <img key={symbol.id} src={symbol.image} alt={symbol.name}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer