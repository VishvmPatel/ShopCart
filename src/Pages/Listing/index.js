import Sidebar from "../../Components/Sidebar";
import content1 from"../../assets/images/content1.jpg";

const Listing = () => {
    return(
        <>
            <section className="product_Listing_Page">
                <div className="container">
                    <div className="productListing d-flex">
                        <Sidebar/>

                        <div className="content_right">
                            <img src={content1} className="w-100" style={{borderRadius:'8px'}}/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Listing;