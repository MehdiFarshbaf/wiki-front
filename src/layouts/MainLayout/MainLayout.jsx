import Footer from "../../components/Footer/Footer";
import CopyRight from "../../components/CopyRight/CopyRight";

const MainLayout = ({children}) => {
    return (
        <>
            <header>header</header>
            <main>{children}</main>
            <Footer/>
            <CopyRight/>
        </>
    )
}
export default MainLayout