import HomeBanner from "../../Components/HomeBanner";
import banner1 from '../../assets/images/banner1.jpg'
const Home = ()=>{
    return(
        <>
            <HomeBanner/>

            <section className="homeProducts">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="banner">
                                <img src={banner1} alt="E-commerce Banner" className="cursor" />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="d-flex align-items-center">
                                <div className="info">
                                    <h3>BEST SELLERS</h3>
                                    <p className="text-light">Do not miss the current offers untill the end of March.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home ;