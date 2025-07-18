import Rating from '@mui/material/Rating';
import { TfiFullscreen } from "react-icons/tfi";
import Button from '@mui/material/Button';
import { IoMdHeartEmpty } from 'react-icons/io';
import { useContext } from 'react';
import { MyContext } from '../../App';
import { Link } from 'react-router-dom';

const ProductItem = (props) => {
    const context = useContext(MyContext);

    const viewProductDetails = (id) => {
        context.setisOpenProductModal(true);
        document.body.classList.add("modal-open");
    };

    // Assuming ID is passed via props or hardcoded here for now
    const productId = props.productId || 1;

    return (
        <>
            <div className={`item productItem ${props.itemView}`}>
                <div className={`productContent ${props.itemView === 'one' ? 'd-flex flex-row gap-3' : ''}`}>

                    <div className="imgWrapper position-relative">
                        <Link to={`/product/${productId}`}>
                            <img
                                src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-3-346x310.jpg"
                                className="w-100"
                                alt="Product item"
                            />
                        </Link>
                        <span className="badge badge-primary">28%</span>

                        <div className="actions">
                            <Button onClick={() => viewProductDetails(productId)}>
                                <TfiFullscreen />
                            </Button>
                            <Button>
                                <IoMdHeartEmpty style={{ fontSize: '20px' }} />
                            </Button>
                        </div>
                    </div>

                    <div className="info">
                        <Link to={`/product/${productId}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <h4>Werther's Original Caramel Hard Candies</h4>
                        </Link>
                        <span className="text-success d-block">In Stock</span>
                        <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5} />
                        <div className="d-flex">
                            <span className="oldPrice">$20.00</span>
                            <span className="netPrice text-danger ml-2">$14.00</span>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default ProductItem;
