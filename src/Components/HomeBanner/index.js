import React from "react";
import Slider from "react-slick";

const HomeBanner = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true
    };
    return(
        <div className="homeBannerSection">
            <Slider {...settings}>
                <div className="item">
                    <img 
                        src="https://cmsimages.shoppersstop.com/SS_25_main_kv_web_fd8e548010/SS_25_main_kv_web_fd8e548010.png" 
                        className="w-100"
                        alt="Shopper's Stop Banner 1"
                    />
                </div>
                <div className="item">
                    <img 
                        src="https://cmsimages.shoppersstop.com/SS_25_pvt_brands_main_kv_web_e55ed30937/SS_25_pvt_brands_main_kv_web_e55ed30937.png" 
                        className="w-100"
                        alt="Shopper's Stop Private Brands Banner"
                    />
                </div>
                <div className="item">
                    <img 
                        src="https://cmsimages.shoppersstop.com/WW_Main_Banners_web_98669c5889/WW_Main_Banners_web_98669c5889.png" 
                        className="w-100"
                        alt="Women's Wear Banner"
                    />
                </div>
                <div className="item">
                    <img 
                        src="https://cmsimages.shoppersstop.com/Women_Indian_Main_Banners_web_3466e7b36d/Women_Indian_Main_Banners_web_3466e7b36d.png" 
                        className="w-100"
                        alt="Women's Indian Wear Banner"
                    />
                </div>
            </Slider>  
        </div>  
    )
}

export default HomeBanner;