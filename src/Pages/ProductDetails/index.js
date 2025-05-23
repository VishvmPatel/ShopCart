import ProductZoom from "../../Components/ProductZoom";
import Rating from "@mui/material/Rating";
import QuantityBox from "../../Components/QuantityBox";
import Button from "@mui/material/Button";
import { BsCartFill } from "react-icons/bs";
import { useState } from "react";

const ProductDetails = () =>{
    const [activeSize, setActiveSize] = useState(null);
    const isActive = (index) => {
        setActiveSize(index);
    }
    return (
        <>
            <section className="productDetails section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 pl-5">
                            <ProductZoom/>
                        </div>

                        <div className="col-md-7 pl-5 pr-5">
                            <h2 className="hd text-capitalize">All Natural Italian-Style Chicken Meatballs</h2>
                            <ul className="list list-inline d-flex align-items-center">
                                <li className="list-inline-item">
                                    <div className="d-flex align-items-center">
                                        <span className="text-light mr-2">Brands : </span>
                                        <span>Welch's</span>
                                    </div>
                                </li>
                                <li className="list-inline-item d-flex align-items-center">
                                    <div className="d-flex align-items-center">
                                        <Rating name="read-only" value={4.5} precision={0.5} size="small" readOnly/>
                                        <span className="text-light cursor ml-2">1 Review</span>
                                    </div>
                                </li>
                            </ul>
                            <div class="d-flex info mb-3">
                                <span class="oldPrice">$20.00</span>
                                <span class="netPrice text-danger ml-2">$14.00</span>
                            </div>
                            <span className="badge badge-success product-badge">IN STOCK</span>
                            <p className="mt-3">Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent
                                Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent
                            </p>
                            
                            <div className="productSize d-flex align-items-center">
                                <span>Size / Weight: </span>
                                <ul className="list list-inline mb-0 pl-4">
                                    <li className="list-inline-item"><a className={`tag ${activeSize === 0 ? 'active' : ''}`}>50g </a></li>
                                    <li className="list-inline-item"><a className={`tag ${activeSize === 1 ? 'active' : ''}`}>100g </a></li>
                                    <li className="list-inline-item"><a className={`tag ${activeSize === 2 ? 'active' : ''}`}>200g </a></li>
                                    <li className="list-inline-item"><a className={`tag ${activeSize === 3 ? 'active' : ''}`}>300g </a></li>
                                    <li className="list-inline-item"><a className={`tag ${activeSize === 4 ? 'active' : ''}`}>500g </a></li>
                                </ul>
                            </div>
                            
                            <div className="d-flex align-items-center mt-4">
                                <QuantityBox/>
                                <Button className="btn-blue btn-lg btn-big btn-round"><BsCartFill/> &nbsp; Add to cart</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductDetails;