import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './MainCarousel.css'

class MainCarousel extends React.Component {
    render() {
        var settings = {
            dots: false,
            fade: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <Slider {...settings}>
                <div className="slide">
                    <img className="slide-img" src="images/boat1.jpg" alt="" />
                </div>

                <div className="slide">
                    <img className="slide-img" src="images/boat2.jpg" alt="" />
                </div>

                <div className="slide">
                    <img className="slide-img" src="images/boat3.jpg" alt="" />
                </div>
            </Slider>
        );
    }
}

export default MainCarousel;