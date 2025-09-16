import { Link } from "react-router-dom";
import productImg1 from "../../assets/images/product-1-1.jpg";
import Rating from '@mui/material/Rating';
import QuantityBox from "../../Components/QuantityBox";
import { IoIosClose } from "react-icons/io";
import Button from '@mui/material/Button';
import { IoCartSharp } from "react-icons/io5";

const Cart = () => {
    return (
        <section className="section cartPage">
            <div className="container">
                <h2 className="hd mb-1">Your Cart</h2>
                <p>There are <b className="text-red">3</b> products in your cart.</p>
                <div className="row">
                    <div className="col-md-9 pr-5">
                        <div className="table-responsive">
                            <table className="table cartTable">
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Unit Price</th>
                                        <th>Quantity</th>
                                        <th>Subtotal</th>
                                        <th>Remove</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <Link to="/product/1" style={{textDecoration:"none",color:"inherit"}}>
                                                <div className="d-flex align-items-center cartItemimgWrapper">
                                                    <div className="imgWrapper">
                                                        <img src={productImg1} alt="Product" className="w-100" />
                                                    </div>

                                                    <div className="info px-3">
                                                        <h6>Field Roast Chao Cheese Creamy Original</h6>
                                                        <Rating name="read-only" value={4.5} readOnly precision={0.5} size="small"/>
                                                    </div>
                                                </div>
                                            </Link>
                                        </td>
                                        <td>$7.25</td>
                                        <td><QuantityBox/></td>
                                        <td>$7.25</td>
                                        <td><span className="remove"><IoIosClose/></span></td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <Link to="/product/1" style={{textDecoration:"none",color:"inherit"}}>
                                                <div className="d-flex align-items-center cartItemimgWrapper">
                                                    <div className="imgWrapper">
                                                        <img src={productImg1} alt="Product" className="w-100" />
                                                    </div>

                                                    <div className="info px-3">
                                                        <h6>Field Roast Chao Cheese Creamy Original</h6>
                                                        <Rating name="read-only" value={4.5} readOnly precision={0.5} size="small"/>
                                                    </div>
                                                </div>
                                            </Link>
                                        </td>
                                        <td>$7.25</td>
                                        <td><QuantityBox/></td>
                                        <td>$7.25</td>
                                        <td><span className="remove"><IoIosClose/></span></td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <Link to="/product/1" style={{textDecoration:"none",color:"inherit"}}>
                                                <div className="d-flex align-items-center cartItemimgWrapper">
                                                    <div className="imgWrapper">
                                                        <img src={productImg1} alt="Product" className="w-100" />
                                                    </div>

                                                    <div className="info px-3">
                                                        <h6>Field Roast Chao Cheese Creamy Original</h6>
                                                        <Rating name="read-only" value={4.5} readOnly precision={0.5} size="small"/>
                                                    </div>
                                                </div>
                                            </Link>
                                        </td>
                                        <td>$7.25</td>
                                        <td><QuantityBox/></td>
                                        <td>$7.25</td>
                                        <td><span className="remove"><IoIosClose/></span></td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-md-3">
                        {/* Sidebar (summary / checkout button) if needed */}
                        <div className="card border p-3 cartDetails">
                            <h4>CART TOTALS</h4>

                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <span>Subtotal</span>
                                <span className="text-red fw-bold">$12.31</span>
                            </div>

                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <span>Shipping</span>
                                <span><b>Free</b></span>
                            </div>

                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <span>Estimate for</span>
                                <span><b>USA</b></span>
                            </div>

                            <div className="d-flex justify-content-between align-items-center">
                                <span>Total</span>
                                <span className="text-red fw-bold">$12.31</span>
                            </div>

                            <br/>
                            <Button className="btn-blue bg-red btn-lg btn-big"><IoCartSharp/>Add to Cart</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cart;
