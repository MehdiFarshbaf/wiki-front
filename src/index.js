import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";


// styles
import './assets/styles/colors.scss'
import './assets/styles/fontIranYekan.css'
import './assets/styles/mantine.scss'
import './assets/styles/styles.scss'
import '@mantine/core/styles.css';

// Swiper Styles
// import 'swiper/scss';
// import 'swiper/scss/navigation';
// import 'swiper/scss/pagination';
// import "swiper/css/effect-fade";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);
