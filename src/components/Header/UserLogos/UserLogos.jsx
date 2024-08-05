import {useState} from "react";
import {Menu} from '@mantine/core';

// styles
import styles from './UserLogo.module.scss'

//icon
import {ReactComponent as UserIcon} from './User.svg'
import {ReactComponent as FAVsIcon} from './FAVs.svg'
import {ReactComponent as ChangeIcon} from './Change.svg'
import {ReactComponent as SearchIcon} from './Search.svg'

// image arrow
import ArrowImage from './Arrow.svg'
import {Link} from "react-router-dom";
import {userMenu} from "../../../helper/data";


const UserLogos = () => {
    // variable
    const [opened, setOpened] = useState(false);
    return (
        <div className={styles.container}>
            <Menu
                classNames={{
                    dropdown: styles.dropdown,
                    item: styles.item,
                }}
                opened={opened} onChange={setOpened} trigger="click-hover" openDelay={100} closeDelay={400}>
                <Menu.Target>
                    <div className={styles.iconUser}>
                        <div className={styles.arrow}>
                            <img src={ArrowImage} alt=""/>
                        </div>
                        <div className={styles.containerArrow}><UserIcon/></div>
                    </div>
                </Menu.Target>
                <Menu.Dropdown>
                    {userMenu.map(subMenu => (
                        <Menu.Item key={subMenu.id}>
                            <Link to={subMenu.path} onClick={() => setOpened(false)}>
                                <p>{subMenu.label}</p>
                            </Link>
                        </Menu.Item>
                    ))}
                    <Menu.Item>
                        <button className={styles.btnExit}>خروج از حساب</button>
                    </Menu.Item>
                </Menu.Dropdown>
            </Menu>

            <div className={styles.iconFav}><FAVsIcon/></div>
            <div className={styles.iconChange}><ChangeIcon/></div>
            <div className={styles.searchIcon}><SearchIcon/></div>

        </div>
    )
}
export default UserLogos