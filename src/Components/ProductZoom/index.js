import Slider from 'react-slick';
import { useRef } from 'react';
import productImage1 from "../../assets/images/product-image-62.jpg";
import productImage2 from "../../assets/images/product-image2-47.jpg";
import productImage3 from "../../assets/images/product-image3-35.jpg";
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/styles.min.css';

const ProductZoom = () => {
    
    const zoomSliderBig = useRef();
    const zoomSlider = useRef();

    var settings = {
        dots:false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        fade: false,
        arrows: true,
    };
    var settings2 = {
        dots: false,
        infinite: false,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        arrows: false,
    };
    const goto = (index) =>{
        zoomSlider.current.slickGoTo(index);
        zoomSliderBig.current.slickGoTo(index);
    }
    return (
        <div className="productZoom">
            <div className='productZoom position-relative'>
                <div className='badge badge-primary'>23%</div>
                <Slider {...settings2} className='zoomSliderBig' ref={zoomSliderBig}>
                    <div className='item'>
                        <InnerImageZoom src={productImage1} zoomType="hover" zoomScale={1} />
                    </div>
                    <div className='item'>
                        <InnerImageZoom src={productImage2} zoomType="hover" zoomScale={1} />
                    </div>
                    <div className='item'>
                        <InnerImageZoom src={productImage3} zoomType="hover" zoomScale={1} />
                    </div>
                </Slider>
            </div>
            <Slider {...settings} className='zoomSlider' ref={zoomSlider}>
                <div className='item'>
                    <img src={productImage1} alt="ProductI1" className='w-100' onClick={() => goto(0)} />
                </div>
                <div className='item'>
                    <img src={productImage2} alt="ProductI2" className='w-100' onClick={() => goto(1)} />
                </div>
                <div className='item'>
                    <img src={productImage3} alt="ProductI3" className='w-100' onClick={() => goto(2)} />
                </div>
            </Slider>
        </div>
    )
}

export default ProductZoom;