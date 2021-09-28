import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import ImageSlider1 from '../resources/img/slider/1.png';
import ImageSlider2 from '../resources/img/slider/2.png';
import ImageSlider3 from '../resources/img/slider/3.png';
import ImageSlider4 from '../resources/img/slider/4.png';
import ImageSlider5 from '../resources/img/slider/5.png';

const Slider = () => {
    return (
        <div class="container">
            <h2 class="title">@PremiumBakeryQuality <span>on Instagram</span></h2>
            <Splide
                options={ {
                    perPage: 5,
                    perMove: 1,
                    padding: {
                        left : 0,
                        right: 0,
                    },
                    breakpoints: {
                        300: {
                            perPage: 1,
                        },
                        600: {
                            perPage: 2,
                        },
                        900: {
                            perPage: 5,
                        },
                    }
                } }
            >
                <SplideSlide> 
                    <img src={ImageSlider1} alt="" />        
                </SplideSlide>
                <SplideSlide>
                    <img src={ImageSlider2} alt="" />
                </SplideSlide>
                <SplideSlide>
                    <img src={ImageSlider3} alt="" />
                </SplideSlide>
                <SplideSlide>
                    <img src={ImageSlider4} alt="" />
                </SplideSlide>
                <SplideSlide>
                    <img src={ImageSlider5} alt="" />
                </SplideSlide>
                <SplideSlide>
                    <img src={ImageSlider1} alt="" />
                </SplideSlide>
                <SplideSlide>
                    <img src={ImageSlider2} alt="" />
                </SplideSlide>
                <SplideSlide>
                    <img src={ImageSlider3} alt="" />
                </SplideSlide>
                <SplideSlide>
                    <img src={ImageSlider4} alt="" />
                </SplideSlide>
                <SplideSlide>
                    <img src={ImageSlider5} alt="" />
                </SplideSlide>
            </Splide>
        </div>
    );
}

export default Slider;