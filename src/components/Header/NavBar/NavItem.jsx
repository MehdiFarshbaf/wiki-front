import {Link} from "react-router-dom";
import {useState} from "react";
import {Menu} from '@mantine/core';
// styles
import styles from './NavBar.module.scss'
//icon
import {ReactComponent as ArrowIcon} from '../../../assets/images/arrowLeft.svg'

const NavItem = ({nav}) => {

    // variable
    const [opened, setOpened] = useState(false);

    return (
        <div className="relative">
            <Menu
                  classNames={{
                      dropdown: styles.dropdown,
                      item: styles.item,
                  }}
                  opened={opened} onChange={setOpened} trigger="click-hover" openDelay={100} closeDelay={400}>
                <Menu.Target>
                    <div
                        className={styles.navItem}>
                        <p>{nav.label}</p>
                        <ArrowIcon className={styles.arrow_image}/>
                    </div>
                </Menu.Target>
                <Menu.Dropdown>
                    {nav.subMenu.map(subMenu => (
                        <Menu.Item key={subMenu.id}>
                            <Link to={subMenu.path} onClick={() => setOpened(false)}>
                                <p>{subMenu.label}</p>
                            </Link>
                        </Menu.Item>
                    ))}
                </Menu.Dropdown>
            </Menu>
        </div>

    )
}
export default NavItem