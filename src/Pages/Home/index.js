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
                            <img src={banner1} alt="E-commerce Banner" className="cursor" />
                        </div>
                        <div className="col-md-3">
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home ;