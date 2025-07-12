import ProductZoom from "../../Components/ProductZoom";
import Rating from "@mui/material/Rating";
import QuantityBox from "../../Components/QuantityBox";
import Button from "@mui/material/Button";
import { BsCartFill } from "react-icons/bs";
import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineCompareArrows } from "react-icons/md";
import Tooltip from "@mui/material/Tooltip";
import RelatedProducts from "./RelatedProducts";

const ProductDetails = () => {
    const [activeSize, setActiveSize] = useState(null);
    const [activeTabs, setActiveTabs] = useState(0);

    const isActive = (index) => setActiveSize(index);

    return (
        <>
            <section className="productDetails section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 pl-5">
                            <ProductZoom />
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
                                        <Rating name="read-only" value={4.5} precision={0.5} size="small" readOnly />
                                        <span className="text-light cursor ml-2">1 Review</span>
                                    </div>
                                </li>
                            </ul>

                            <div className="d-flex info mb-3">
                                <span className="oldPrice">$20.00</span>
                                <span className="netPrice text-danger ml-2">$14.00</span>
                            </div>

                            <span className="badge badge-success product-badge">IN STOCK</span>

                            <p className="mt-3">
                                Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent.
                            </p>

                            <div className="productSize d-flex align-items-center">
                                <span>Size / Weight: </span>
                                <ul className="list list-inline mb-0 pl-4">
                                    {[50, 100, 200, 300, 500].map((size, index) => (
                                        <li className="list-inline-item" key={size}>
                                            <a className={`tag ${activeSize === index ? 'active' : ''}`} onClick={() => isActive(index)}>{size}g</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="d-flex align-items-center mt-3" style={{ gap: '15px' }}>
                                <QuantityBox />
                                <Button className="btn-blue btn-lg btn-big btn-round">
                                    <BsCartFill /> &nbsp; Add to cart
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

                    <br />

                    <div className="card mt-5 p-5 detailsPageTabs">
                        <div className="customTabs">
                            <ul className="list list-inline">
                                {["Description", "Additional Info", "Reviews (3)"].map((label, index) => (
                                    <li className="list-inline-item" key={index}>
                                        <Button className={activeTabs === index ? 'active' : ''} onClick={() => setActiveTabs(index)}>
                                            {label}
                                        </Button>
                                    </li>
                                ))}
                            </ul>

                            <br />

                            {activeTabs === 0 && (
                                <div className="tabContent">
                                    <p>
                                        Noodles & Company is an American fast-casual restaurant that offers international and American noodle dishes and pasta in addition to soups and salads.
                                        Noodles & Company was founded in 1995 by Aaron Kennedy and is headquartered in Broomfield, Colorado. The company went public in 2013 and recorded a $457 million revenue in 2017.
                                        In late 2018, there were 460 Noodles & Company locations across 29 states and Washington, D.C.
                                    </p>
                                </div>
                            )}

                            {activeTabs === 1 && (
                                <div className="tabContent">
                                    <div className="table-responsive">
                                        <table className="table table-bordered">
                                            <tbody>
                                                <tr><th>Stand Up</th><td>35"L x 24"W x 37-45"H (front to back wheel)</td></tr>
                                                <tr><th>Folded (w/o wheels)</th><td>32.5"L x 18.5"W x 16.5"H</td></tr>
                                                <tr><th>Folded (w/ wheels)</th><td>32.5"L x 24"W x 18.5"H</td></tr>
                                                <tr><th>Door Pass Through</th><td>24"</td></tr>
                                                <tr><th>Frame</th><td>Aluminium</td></tr>
                                                <tr><th>Weight (w/o wheels)</th><td>20 LBS</td></tr>
                                                <tr><th>Weight Capacity</th><td>60 LBS</td></tr>
                                                <tr><th>Width</th><td>24"</td></tr>
                                                <tr><th>Handle height (ground-to-handle)</th><td>37-45"</td></tr>
                                                <tr><th>Wheels</th><td>12" air / wide track slick tread</td></tr>
                                                <tr><th>Seat back height</th><td>21.5"</td></tr>
                                                <tr><th>Head room (inside canopy)</th><td>25"</td></tr>
                                                <tr><th>Color</th><td>Black, Blue, Red, White</td></tr>
                                                <tr><th>Size</th><td>M, S</td></tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            )}

                            {activeTabs === 2 && (
                                <div className="tabContent">
                                    <div className="row">
                                        {/* LEFT COLUMN */}
                                        <div className="col-md-8">
                                            <h3>Customer questions & answers</h3><br />
                                            <div className="card p-4 reviewsCard d-flex flex-row align-items-start">
                                                <div
                                                    className="image d-flex flex-column align-items-center"
                                                    style={{ marginRight: "20px", minWidth: "100px" }}
                                                >
                                                    <div className="rounded-circle overflow-hidden" style={{ width: "80px", height: "80px" }}>
                                                        <img
                                                            src="https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/author-2.png"
                                                            alt="Reviewer"
                                                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                                        />
                                                    </div>
                                                    <span className="text-g text-center font-weight-bold mt-2">HalfBlood</span>
                                                </div>

                                                <div className="info pl-5">
                                                    <div className="d-flex justify-content-between align-items-center w-100 mb-2">
                                                        <h5 className="text-light mb-0">02/09/2024</h5>
                                                        <Rating name="half-rating-read" value={4.5} precision={0.5} readOnly size="small" />
                                                    </div>

                                                    <p className="mb-0">
                                                        Noodles & Company is an American fast-casual restaurant that offers
                                                        international and American noodle dishes and pasta in addition to soups
                                                        and salads. Noodles & Company was founded in 1995 by Aaron Kennedy and is
                                                        headquartered in Broomfield, Colorado. The company went public in 2013 and
                                                        recorded a $457 million revenue in 2017. In late 2018, there were 460
                                                        Noodles & Company locations across 29 states and Washington, D.C.
                                                    </p>
                                                </div>
                                            </div>


                                            <br className="res-hide" /><br className="res-hide" />

                                            <form className="reviewForm">
                                                <h4>Add a review</h4>
                                                <div className="form-group">
                                                    <textarea className="form-control" placeholder="Write a Review" name="review" ></textarea>
                                                </div>
                                                <div className='row'>
                                                    <div className='col-md-6'>
                                                        <div className='form-group'>
                                                            <input type='text' className='form-control' placeholder='Name' name='userName' />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <Rating name="rating" value={4} precision={0.5} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <br />
                                                <div className="form-group">
                                                    <Button type="submit" className="btn-blue btn-lg btn-big btn-round">Submit Review</Button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <br />

                    <RelatedProducts/>
                </div>
            </section>
        </>
    );
};

export default ProductDetails;
