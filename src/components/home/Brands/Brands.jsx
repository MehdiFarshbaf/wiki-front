// import Swiper core and required modules
import {Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper/modules';

import {Swiper, SwiperSlide} from 'swiper/react';

// styles
import styles from './Brands.module.scss'
import BrandCard from "../Breadcrumbs/BrandCard/BrandCard";
import {brands} from "../../../helper/data";
import Previous from "../../controllers/Previous";
import {useState} from "react";
import Next from "../../controllers/Next";

const Brands = () => {

    // variables
    const [swiper, setSwiper] = useState(null);

    return (
        <section className={styles.brands}>
            <div className="inside">
                <div className={styles.container}>
                    <div className="gradient-left">
                        <Previous swiper={swiper}/>
                    </div>
                    <div className="gradient-right">
                        <Next swiper={swiper}/>
                    </div>
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={5}
                        // navigation
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
                            console.log("click")
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