import Footer from "../../components/Footer/Footer";
import CopyRight from "../../components/CopyRight/CopyRight";
import Header from "../../components/Header/Header";

const MainLayout = ({children}) => {
    return (
        <>
            <Header/>
            <main>{children}</main>
            <Footer/>
            <CopyRight/>
        </>
    )
}
export default MainLayout