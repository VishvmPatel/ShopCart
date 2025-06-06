import Dialog from '@mui/material/Dialog';
import { MdClose, MdOutlineCompareArrows } from 'react-icons/md';
import Button from '@mui/material/Button';
import { Rating } from '@mui/material';
import { useContext, useRef } from 'react';
import QuantityBox from '../QuantityBox';
import { IoIosHeartEmpty } from 'react-icons/io';
import { MyContext } from '../../App';
import ProductZoom from '../ProductZoom';

const ProductModal = (props)=>{
    
    const context = useContext(MyContext);
    const handleClose = () => {
        context.setisOpenProductModal(false);
        document.body.classList.remove("modal-open");
    };

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
                        <ProductZoom/>
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