import Dialog from '@mui/material/Dialog';
import { MdClose, MdOutlineCompareArrows } from 'react-icons/md';
import Button from '@mui/material/Button';
import { Rating } from '@mui/material';
import Slider from 'react-slick';
import productImage1 from "../../assets/images/product-image-62.jpg";
import productImage2 from "../../assets/images/product-image2-47.jpg";
import productImage3 from "../../assets/images/product-image3-35.jpg";
import { useContext, useRef } from 'react';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/styles.min.css';
import QuantityBox from '../QuantityBox';
import { IoIosHeartEmpty } from 'react-icons/io';
import { MyContext } from '../../App';

const ProductModal = (props)=>{
    
    const zoomSliderBig = useRef();
    const zoomSlider = useRef();

    const context = useContext(MyContext);
    const handleClose = () => {
        context.setisOpenProductModal(false);
        document.body.classList.remove("modal-open");
    };


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
            <Dialog open={true} className='productModal' onClose={handleClose}>
                <Button className='close_' onClick={handleClose}><MdClose /></Button>
                <h4 class="mb-1 font-weight-bold">All Natural Italian-Style Chicken Meatballs</h4>
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
                    <div className='col-md-7'>
                        <div className='d-flex info align-items-center mb-4'>
                            <span className='oldPrice lg mr-2'>$9.35</span>
                            <span className='netPrice text-danger lg'>$7.25</span>
                        </div>
                        <span className='badge bg-success'>IN STOCK</span>
                        <p className='mt-3'>Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent</p>
                        <div className='d-flex align-items-center'>
                            <QuantityBox/>
                            <Button className='btn-blue btn-lg btn-big btn-round ml-3'>Add to Cart</Button>
                        </div>
                        <div className='d-flex align-items-center mt-5 actions'>
                            <Button className='btn-round btn-sml' variant='outlined'><IoIosHeartEmpty/> &nbsp; ADD TO WISHLIST</Button>
                            <Button className='btn-round btn-sml ms-3' variant='outlined'><MdOutlineCompareArrows/> &nbsp; COMPARE</Button>
                        </div>
                    </div>
                </div>
                
            </Dialog>
        </>
    )
}

export default ProductModal;