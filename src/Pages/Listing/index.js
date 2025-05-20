import Sidebar from "../../Components/Sidebar";
import content1 from"../../assets/images/content1.jpg";
import Button from '@mui/material/Button';
import {IoIosMenu} from "react-icons/io";
import {CgMenuGridR} from "react-icons/cg";
import {HiViewGrid} from "react-icons/hi";
import {TfiLayoutGrid4Alt} from "react-icons/tfi";
import {FaAngleDown} from "react-icons/fa6";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import ProductItem from "../../Components/ProductItem/index.js";

const Listing = () => {
    const [anchorEl , setAnchorEl] = useState(null);
    const openDropDown = Boolean(anchorEl);
    const handleClick = (event) =>{
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

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
                                    <Button><IoIosMenu /></Button>
                                    <Button><HiViewGrid /></Button>
                                    <Button><TfiLayoutGrid4Alt /></Button>
                                    <Button><CgMenuGridR /></Button>
                                </div>

                                <div className="showByFilter" style={{ marginLeft: 'auto' }}>
                                    <Button onClick={handleClick}>Show 9 <FaAngleDown /></Button>
                                    <Menu
                                        className="w-100 showPerPageDropdown"
                                        id="basic-menu"
                                        anchorEl={anchorEl}
                                        open={openDropDown}
                                        onClose={handleClose}
                                        MenuListProps={{ 'aria-labelledby': 'basic-button' }}
                                    >
                                        <MenuItem onClick={handleClose}>10</MenuItem>
                                        <MenuItem onClick={handleClose}>20</MenuItem>
                                        <MenuItem onClick={handleClose}>30</MenuItem>
                                        <MenuItem onClick={handleClose}>40</MenuItem>
                                        <MenuItem onClick={handleClose}>50</MenuItem>
                                        <MenuItem onClick={handleClose}>60</MenuItem>
                                    </Menu>
                                </div>
                            </div>

                            <div className="productListing">
                                <ProductItem/>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Listing;