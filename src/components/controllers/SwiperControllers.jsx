import Previous from "./Previous";
import Next from "./Next";

const SwiperControllers = ({swiper}) => {
    return (
        <>
            <div className="gradient-left">
                <Previous swiper={swiper}/>
            </div>
            <div className="gradient-right">
                <Next swiper={swiper}/>
            </div>
        </>
    )
}
export default SwiperControllers