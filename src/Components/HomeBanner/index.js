import React from "react";
import Slider from "react-slick";

const HomeBanner = ()=>{
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return(
        <div className="homeBannerSection">
            <Slider {...settings}>
                <div className="item">
                    <img src="" className="w-100"/>
                </div>
            </Slider>  
        </div>  
    )
}

export default HomeBanner;