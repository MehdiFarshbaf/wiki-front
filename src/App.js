import MainLayout from "./layouts/MainLayout/MainLayout";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import {Route, Routes} from "react-router-dom";

// pages
import NotFound from "./pages/404/NotFound";
import Home from "./pages/Home/Home";
import FAQ from "./pages/FAQ/FAQ";

const App = () => {
    return (
        <MainLayout>
            <ScrollToTop>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/faq" element={<FAQ/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </ScrollToTop>
        </MainLayout>
    )
}
export default App