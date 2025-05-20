import Sidebar from "../../Components/Sidebar";
import content1 from"../../assets/images/content1.jpg";
import Button from '@mui/material/Button';
import {IoIosMenu} from "react-icons/io";
import {CgMenuGridR} from "react-icons/cg";
import {TbGridDots} from "react-icons/tb";
import {HiViewGrid} from "react-icons/hi";
import {TfiLayoutGrid4Alt} from "react-icons/tfi";

const Listing = () => {
    return(
        <>
            <section className="product_Listing_Page">
                <div className="container">
                    <div className="productListing d-flex">
                        <Sidebar/>

                        <div className="content_right">
                            <img src={content1} className="w-100" style={{borderRadius:'8px'}}/>

                            <div className="showBy mt-3 mb-3 d-flex align-items-center">
                                <div className="d-flex align-items-center btnWrapper">
                                    <Button><IoIosMenu/></Button>
                                    <Button><HiViewGrid/></Button>
                                    <Button><TfiLayoutGrid4Alt/></Button>
                                    <Button><CgMenuGridR/></Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Listing;