import BrandCard from "../Breadcrumbs/BrandCard/BrandCard";
import {brands} from "../../../helper/data";
import {useState} from "react";

// import Swiper core and required modules
import {Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';

// controllers
import SwiperControllers from "../../controllers/SwiperControllers";

// styles
import styles from './Brands.module.scss'


const Brands = () => {

    // variables
    const [swiper, setSwiper] = useState(null);

    return (
        <section className={styles.brands}>
            <div className="inside">
                <div className={styles.container}>
                    <SwiperControllers swiper={swiper}/>
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                        slidesPerView={5}
                        autoplay={{
                            delay: 3000,
                            pauseOnMouseEnter: true,
                            disableOnInteraction: false
                        }}
                        loop={true}
                        // pagination={{clickable: true}}
                        scrollbar={{draggable: true}}
                        onSwiper={(swiper) => {
                            setSwiper(swiper);
                        }}
                        // onSlideChange={() => console.log('slide change')}
                    >
                        {brands.map(brand => (
                            <SwiperSlide key={brand.id}><BrandCard brand={brand}/></SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}
export default Brands