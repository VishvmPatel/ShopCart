import Dialog from '@mui/material/Dialog';
import { MdClose } from 'react-icons/md';
import Button from '@mui/material/Button';
import { Rating } from '@mui/material';
import Slider from 'react-slick';
import productImage1 from "../../assets/images/product-image-62.jpg";
import productImage2 from "../../assets/images/product-image2-47.jpg";
import { useRef } from 'react';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/styles.min.css';

const ProductModal = (props)=>{

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
    return(
        <>
            <Dialog open={true} className='productModal' onClose={()=>props.closeProductModal()}>
                <Button className='close_' onClick={()=>props.closeProductModal()}><MdClose /></Button>
                <h4 class = "mb-1 font-weight-bold">All Natural Italian-Style Chicken Meatballs</h4>
                <div className='d-flex align-items-center'>
                    <div className='d-flex align-items-center mr-4'>
                        <span>Brands:</span>
                        <span className='ml-2'><b>Welch's</b></span>
                    </div>
                    <Rating name='read-only' value={5} size='small' precision={0.5} readOnly />   

                </div>
                <hr />

                <div className='row mt-2 productDetailModal'>
                    <div className='col-md-5'>
                        <div className='productZoom'>
                            <Slider {...settings2} className='zoomSliderBig' ref={zoomSliderBig}>
                                <div className='item'>
                                    <InnerImageZoom src={productImage1} zoomType="hover" zoomScale={1} />

                                </div>
                            </Slider>
                        </div>
                        <Slider {...settings} className='zoomSlider' ref={zoomSlider}>
                            <div className='item'>
                                <img src={productImage1} className='w-100' onClick={()=> goto(0)}/>
                            </div>
                            <div className='item'>
                                <img src={productImage2} className='w-100' onClick={()=> goto(1)}/>
                            </div>
                        </Slider>
                    </div>
                    <div className='col-md-7'>

                    </div>
                </div>
                
            </Dialog>
        </>
    )
}

export default ProductModal;