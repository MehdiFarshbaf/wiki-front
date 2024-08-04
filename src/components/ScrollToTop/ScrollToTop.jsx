import {useLocation} from "react-router-dom";
import {useEffect} from "react";

const ScrollToTop = ({children}) => {

    // variables
    const location = useLocation();
    const {pathname} = location

    // run when change path
    useEffect(() => {
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        }, 500)
    }, [pathname]);

    return (
        <>{children}</>
    )
}
export default ScrollToTop