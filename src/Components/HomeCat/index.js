import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from "swiper/modules";
import RedApple from '../../assets/images/RedApple.png';

const HomeCat = () => {

    const [itemBg, setItemBg] = useState([
        '#fffceb',
        '#ecffec',
        '#feefea',
        '#fff3eb',
        '#fff3ff',
        '#f2fce4',
        '#feefea',
        '#fffceb',
        '#feefea',
        '#ecffec',
        '#feefea',
        '#fff3eb',
        '#fff3ff',
        '#f2fce4',
        '#feefea',
        '#fffceb',
        '#feefea',
        '#ecffec'
    ])
    return (
        <section className="homeCat">
            <div className="container">
                <h3 className="mb-4 hd">Featured Categories</h3>
                <Swiper
                    slidesPerView={10}
                    spaceBetween={8}
                    pagination={{ clickable: true, }}
                    modules={[Navigation]}
                    className="mySwiper">
                    {
                        itemBg?.map((item, index) => {
                            return (
                                <SwiperSlide>
                                    <div className="item text-center cursor" style={{ background: item }}>
                                        <img
                                            src={RedApple}
                                            alt="Red Apple"
                                        />
                                        <h6>Red Apple</h6>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>

            </div>
        </section>
    )
}

export default HomeCat;