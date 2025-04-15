import HomeBanner from "../../Components/HomeBanner";
import HomeCat from "../../Components/HomeCat";
import banner1 from '../../assets/images/banner1.jpg';
import banner2 from '../../assets/images/banner2.jpg';
import banner4 from '../../assets/images/banner4.jpg';
import banner5 from '../../assets/images/banner5.jpg';
import newsLetterImg from '../../assets/images/coupon.png';
import Button from '@mui/material/Button';
import { IoIosArrowRoundForward } from "react-icons/io";
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import ProductItem from "../../Components/ProductItem";

const Home = () => {

    var productSliderOptions = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
    };
    return (
        <>
            <HomeBanner />
            <HomeCat />

            <section className="homeProducts">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="sticky">
                                <div className="banner position-relative">
                                    <img src={banner1} alt="E-commerce Banner" className="cursor w-100" />
                                    <div className="bannerOverlayText banner1Text p-3">
                                        <p className="smallTitle">Bacola Natural Foods</p>
                                        <h5 className="mainTitle">Special Organic <br /><strong>Roats Burger</strong></h5>
                                        <p className="subText">only-from</p>
                                        <p className="priceText">$14.99</p>
                                    </div>
                                </div>
                                <div className="banner mt-3 position-relative">
                                    <img src={banner2} alt="E-commerce Banner" className="cursor w-100" />
                                    <div className="bannerOverlayText p-3">
                                        <p className="smallTitle">Best Bakery Products</p>
                                        <h5 className="mainTitle">Freshest Products <br /><strong>every hour.</strong></h5>
                                        <p className="subText">only-from</p>
                                        <p className="priceText">$24.99</p>
                                        <button className="shopNowBtn">Shop Now →</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9 productRow">
                            <div className="d-flex align-items-center">
                                <div className="info w-75">
                                    <h3 className="mb-0 hd">BEST SELLERS</h3>
                                    <p className="text-light text-sml mb-0">Do not miss the current offers untill the end of March.</p>
                                </div>
                                <Button className="viewAllBtn ml-auto">View All<IoIosArrowRoundForward /></Button>
                            </div>
                            <div className="product_row w-100 mt-4">
                                <Swiper slidesPerView={4} spaceBetween={0} pagination={{ clickable: true, }} modules={[Navigation]} className="mySwiper">
                                    <SwiperSlide>
                                        <ProductItem />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <ProductItem />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <ProductItem />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <ProductItem />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <ProductItem />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <ProductItem />
                                    </SwiperSlide>
                                </Swiper>
                            </div>

                            <div className="d-flex align-items-center mt-5">
                                <div className="info w-75">
                                    <h3 className="mb-0 hd">NEW PRODUCTS</h3>
                                    <p className="text-light text-sml mb-0">New products with updated stocks.</p>
                                </div>
                                <Button className="viewAllBtn ml-auto">View All<IoIosArrowRoundForward /></Button>
                            </div>
                            <div className="product_row productRow2 w-100 mt-4 d-flex">
                                <ProductItem />
                                <ProductItem />
                                <ProductItem />
                                <ProductItem />
                                <ProductItem />
                                <ProductItem />
                                <ProductItem />
                                <ProductItem />
                            </div>

                            <div className="d-flex mt-4 mb-5 bannerSec gap-3">
                                {/* Banner 4 */}
                                <div className="position-relative w-50 overflow-hidden rounded-3">
                                    <img src={banner4} alt="Dairy & Eggs" className="img-fluid w-100" />
                                    <div
                                        style={{
                                            position: 'absolute',
                                            top: '20%',
                                            left: '10%',
                                            zIndex: 2,
                                            color: '#000'
                                        }}
                                    >
                                        <p style={{ color: 'green', fontWeight: '600', marginBottom: '5px' }}>WEEKEND DISCOUNT 40%</p>
                                        <h4 style={{ fontWeight: '700', marginBottom: '5px' }}>Dairy & Eggs</h4>
                                        <p style={{ color: '#666', marginBottom: '10px' }}>A different kind of grocery store</p>
                                        <button style={{
                                            padding: '5px 15px',
                                            background: '#007bff',
                                            color: '#fff',
                                            border: 'none',
                                            borderRadius: '4px',
                                            fontWeight: '500',
                                            fontSize: '14px',
                                            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
                                        }}>
                                            Shop Now
                                        </button>
                                    </div>
                                </div>

                                {/* Banner 5 */}
                                <div className="position-relative w-50 overflow-hidden rounded-3">
                                    <img src={banner5} alt="Legumes & Cereals" className="img-fluid w-100" />
                                    <div
                                        style={{
                                            position: 'absolute',
                                            top: '20%',
                                            left: '10%',
                                            zIndex: 2,
                                            color: '#000'
                                        }}
                                    >
                                        <p style={{ color: 'green', fontWeight: '600', marginBottom: '5px' }}>WEEKEND DISCOUNT 40%</p>
                                        <h4 style={{ fontWeight: '700', marginBottom: '5px' }}>Legumes & Cereals</h4>
                                        <p style={{ color: '#666', marginBottom: '10px' }}>Feed your family the best</p>
                                        <button style={{
                                            padding: '5px 15px',
                                            background: '#007bff',
                                            color: '#fff',
                                            border: 'none',
                                            borderRadius: '4px',
                                            fontWeight: '500',
                                            fontSize: '14px',
                                            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
                                        }}>
                                            Shop Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="newsLetterSection mt-3 mb-3 d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <p className="text-white mt-1">$20 discount for your first order</p>
                            <h3 className="text-white">Join our newsletter and get...</h3>
                            <p className="text-light">Join our email subscription now to get updates on<br/> promotions and coupons.</p>
                        </div>

                        <div className="col-md-6">
                            <img src={newsLetterImg}/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;