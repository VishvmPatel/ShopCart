import HomeBanner from "../../Components/HomeBanner";

const Home = ()=>{
    return(
        <>
            <HomeBanner/>

            <section className="homeProducts">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <img src="D:\projectecommerce\src\assets\images\banner1.jpg" className="cursor"></img>
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