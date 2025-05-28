import ProductZoom from "../../Components/ProductZoom";
import Rating from "@mui/material/Rating";
import QuantityBox from "../../Components/QuantityBox";
import Button from "@mui/material/Button";
import { BsCartFill } from "react-icons/bs";
import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineCompareArrows } from "react-icons/md";
import Tooltip from "@mui/material/Tooltip";

const ProductDetails = () => {
    const [activeSize, setActiveSize] = useState(null);
    const [activeTabs, setActiveTabs] = useState(0);
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
                            <div className="d-flex info mb-3">
                                <span className="oldPrice">$20.00</span>
                                <span className="netPrice text-danger ml-2">$14.00</span>
                            </div>
                            <span className="badge badge-success product-badge">IN STOCK</span>
                            <p className="mt-3">Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent
                                Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent
                            </p>
                            
                            <div className="productSize d-flex align-items-center">
                                <span>Size / Weight: </span>
                                <ul className="list list-inline mb-0 pl-4">
                                    <li className="list-inline-item"><a className={`tag ${activeSize === 0 ? 'active' : ''}`} onClick={() => isActive(0)}>50g </a></li>
                                    <li className="list-inline-item"><a className={`tag ${activeSize === 1 ? 'active' : ''}`} onClick={() => isActive(1)}>100g </a></li>
                                    <li className="list-inline-item"><a className={`tag ${activeSize === 2 ? 'active' : ''}`} onClick={() => isActive(2)}>200g </a></li>
                                    <li className="list-inline-item"><a className={`tag ${activeSize === 3 ? 'active' : ''}`} onClick={() => isActive(3)}>300g </a></li>
                                    <li className="list-inline-item"><a className={`tag ${activeSize === 4 ? 'active' : ''}`} onClick={() => isActive(4)}>500g </a></li>
                                </ul>
                            </div>
                            
                            <div className="d-flex align-items-center mt-3" style={{gap: '15px'}}>
                                <QuantityBox/>
                                <Button className="btn-blue btn-lg btn-big btn-round">
                                    <BsCartFill/> &nbsp; Add to cart
                                </Button>

                                <Tooltip title="Add to Wishlist" placement="top">
                                    <Button className="btn-blue btn-lg btn-big btn-circle">
                                        <FaRegHeart />
                                    </Button>
                                </Tooltip>

                                <Tooltip title="Compare" placement="top">
                                    <Button className="btn-blue btn-lg btn-big btn-circle ml-2">
                                        <MdOutlineCompareArrows />
                                    </Button>
                                </Tooltip>
                            </div>
                        </div>
                    </div>

                    <br/>

                    <div className="card mt-5 p-5 detailsPageTabs">
                        <div className="customTabs">
                            <ul className="list list-inline">
                                <li className="list-inline-item">
                                    <Button className={`${activeTabs === 0 && 'active'}`}
                                        onClick={() => {
                                            setActiveTabs(0)
                                        }}
                                    >Description</Button>
                                </li>
                                <li className="list-inline-item">
                                    <Button className={`${activeTabs === 1 && 'active'}`}
                                        onClick={() => {
                                            setActiveTabs(1)
                                        }}
                                    >Additional Info</Button>
                                </li>
                                <li className="list-list-inline">
                                    <Button className={`${activeTabs === 2 && 'active'}`}
                                        onClick={() => {
                                            setActiveTabs(2)
                                            showReviews()
                                        }}
                                    >Reviews (3)</Button>
                                </li>
                            </ul>
                            
                            <br/>

                            {
                                activeTabs === 0 &&
                                <div className="tabContent">
                                    <p>{currentProduct.description}</p>
                                </div>
                            }

                            {
                                activeTabs === 1 &&

                                <div className="tabContent">
                                    <div className="table-responsive">
                                        <table className="table table-bordered">
                                            <tbody>
                                                <tr class="stnd-up">
                                                    <th>Stand Up</th>
                                                    <td>
                                                        <p>35"L x 24"W x 37-45"H(front to back wheel)</p>
                                                    </td>
                                                </tr>
                                                <tr class="folded-wo-wheels">
                                                    <th>Folded (w/o wheels)</th>
                                                    <td>
                                                        <p>32.5"L x 18.5"W x 16.5"H</p>
                                                    </td>
                                                </tr>
                                                <tr class="folded-w-wheels">
                                                    <th>Folded (w/ wheels)</th>
                                                    <td>
                                                        <p>32.5"L x 24"W x 18.5"H</p>
                                                    </td>
                                                </tr>
                                                <tr class="door-pass-through">
                                                    <th>Door Pass Through</th>
                                                    <td>
                                                        <p>24</p>
                                                    </td>
                                                </tr>
                                                <tr class="frame">
                                                    <th>Frame</th>
                                                    <td>
                                                        <p>Aluminium</p>
                                                    </td>
                                                </tr>
                                                <tr class="weight-wo-wheels">
                                                    <th>Weight (w/o wheels)</th>
                                                    <td>
                                                        <p>20 LBS</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductDetails;