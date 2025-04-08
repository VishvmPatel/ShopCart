import HomeBanner from "../../Components/HomeBanner";
import HomeCat from "../../Components/HomeCat";
import banner1 from '../../assets/images/banner1.jpg';
import banner2 from '../../assets/images/banner2.jpg';
import banner4 from '../../assets/images/banner4.jpg';
import banner5 from '../../assets/images/banner5.jpg';
import Button from '@mui/material/Button';
import { IoIosArrowRoundForward } from "react-icons/io";
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'swiper/css';
import 'swiper/css/navigation';
import {Navigation} from 'swiper/modules';
import ProductItem from "../../Components/ProductItem";

const Home = ()=>{

    var productSliderOptions = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
    };
    return(
        <>
            <HomeBanner/>

            <HomeCat/>

            <section className="homeProducts">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
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
                        <div className="col-md-9 productRow">
                            <div className="d-flex align-items-center">
                                <div className="info w-75">
                                    <h3 className="mb-0 hd">BEST SELLERS</h3>
                                    <p className="text-light text-sml mb-0">Do not miss the current offers untill the end of March.</p>
                                </div>
                                <Button className="viewAllBtn ml-auto">View All<IoIosArrowRoundForward/></Button>
                            </div>  
                            <div className="product_row w-100 mt-4">
                                <Swiper slidesPerView={4} spaceBetween={0} pagination={{ clickable: true,}} modules={[Navigation]} className="mySwiper">
                                    <SwiperSlide>
                                        <ProductItem/>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <ProductItem/>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <ProductItem/>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <ProductItem/>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <ProductItem/>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <ProductItem/>
                                    </SwiperSlide>
                                </Swiper>  
                            </div>

                            <div className="d-flex align-items-center mt-5">
                                <div className="info w-75">
                                    <h3 className="mb-0 hd">NEW PRODUCTS</h3>
                                    <p className="text-light text-sml mb-0">New products with updated stocks.</p>
                                </div>
                                <Button className="viewAllBtn ml-auto">View All<IoIosArrowRoundForward/></Button>
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
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;