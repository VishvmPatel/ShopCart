import { Link } from "react-router-dom";
import productImg1 from "../../assets/images/product-1-1.jpg";
import Rating from '@mui/material/Rating';
import QuantityBox from "../../Components/QuantityBox";
const Cart = () => {
    return (
        <section className="section cartPage">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <h2 className="hd mb-0">Your Cart</h2>
                        <p>There are <b>3</b> products in your cart.</p>

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
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-md-4">
                        {/* Sidebar (summary / checkout button) if needed */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cart;
