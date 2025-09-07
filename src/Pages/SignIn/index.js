import { useContext, useEffect } from "react";
import { MyContext } from "../../App";
import Logo from '../../assets/images/logo.jpg';
import TextField from "@mui/material/TextField";

const SignIn = () => {

    const context = useContext(MyContext);

    useEffect(() =>{
        context.setisHeaderFooterShow(false);
    }, []);
    return (
        <section className="section signInPage">
            <div className="shape-bottom">
                <svg fill="#fff" id="Layer_1" x="0px" y="0px" viewBox="0 0 1921 819.8" style={{ enableBackground: "new 0 0 1921 819.8" }} xmlSpace="preserve">
                    <path className="st0" d="M1921,413.1v406.7H0V0.5h0.4l228.1,598.3c30.7,74.4,80.8,130.6,152.5,168.6c107.6,57,212.1,40.7,245.7-34.4
          c22.4-4.2,54.9-13.1,97.5-26.6L1921,400.5V413.1z"/>
                </svg>
            </div>
            <div className="container">
                <div className="box card p-3 shadow border-0">
                    <div className="logo-center">
                        <img src={Logo} alt="ShopCart Logo" />
                    </div>
                    <h2 className="mt-3">Sign In</h2>
                    
                    <form>
                        <div className="form-group">
                            <TextField id="standard-basic" label="Email" type="email" required variant="standard" className="w-100"/>
                        </div>
                        <div className="form-group">
                            <TextField id="standard-basic" label="Password" type="password"required variant="standard" className="w-100"/>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default SignIn;