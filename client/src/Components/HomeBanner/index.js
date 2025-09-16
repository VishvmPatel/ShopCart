import React from "react";
import Slider from "react-slick";
import image1 from '../../assets/images/image-1.png';
import image2 from '../../assets/images/image-2.png';
import image3 from '../../assets/images/image-3.png';
import image4 from '../../assets/images/image-4.png';

const banners = [
    {
        img: image1,
        title: "A different kind of grocery store",
        discount: "-20% OFF",
        price: "$7.99",
        btnText: "Shop Now"
    },
    {
        img: image2,
        title: "Quality Freshness Guaranteed!",
        discount: "-40% OFF",
        price: "$14.35",
        btnText: "Shop Now"
    },
    {
        img: image3,
        title: "Quality Freshness Guaranteed!",
        discount: "-40% OFF",
        price: "$14.35",
        btnText: "Shop Now"
    },
    {
        img: image4,
        title: "Quality Freshness Guaranteed!",
        discount: "-40% OFF",
        price: "$14.35",
        btnText: "Shop Now"
    }
];

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

    return (
        <div className="container mt-3">
            <div className="homeBannerSection">
                <Slider {...settings}>
                    {banners.map((banner, index) => (
                        <div className="bannerSlide" key={index}>
                            <img src={banner.img} className="bannerImage" alt={banner.title} />
                            <div className="bannerContent">
                                <span className="offerText">{banner.discount}</span>
                                <h2>{banner.title}</h2>
                                <p>Only this week. Don’t miss...</p>
                                <span className="priceText">from <strong>{banner.price}</strong></span>
                                <button className="shopButton">{banner.btnText} →</button>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default HomeBanner;
