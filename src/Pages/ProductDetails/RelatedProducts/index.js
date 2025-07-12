import { Swiper, SwiperSlide } from 'swiper/react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Button from '@mui/material/Button';
import { IoIosArrowRoundForward } from "react-icons/io";
import ProductItem from '../../../Components/ProductItem';

const RelatedProducts = () => {
    return (
        <>
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
        </>
    )
}

export default RelatedProducts;