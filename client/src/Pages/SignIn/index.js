import { useContext, useEffect } from "react";
import { MyContext } from "../../App";
import Logo from '../../assets/images/logo.jpg';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import GoogleImg from '../../assets/images/googleImg.png';

const SignIn = () => {
  const context = useContext(MyContext);

  useEffect(() => {
    context.setisHeaderFooterShow(false);
  }, []);

  return (
    <section className="section signInPage">
      <div className="shape-bottom">
        <svg
          fill="#fff"
          viewBox="0 0 1921 819.8"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1921,413.1v406.7H0V0.5h0.4l228.1,598.3c30.7,74.4,80.8,130.6,152.5,168.6c107.6,57,212.1,40.7,245.7-34.4
          c22.4-4.2,54.9-13.1,97.5-26.6L1921,400.5V413.1z"/>
        </svg>
      </div>

      <div className="container">
        <div className="box card p-3 shadow border-0">
          <div className="logo-center">
            <img src={Logo} alt="ShopCart Logo" />
          </div>
          <h2 className="mt-3">Sign In</h2>

          <form className="mt-3">
            {/* Email */}
            <div className="form-group">
              <TextField
                label="Email"
                type="email"
                required
                variant="standard"
                className="w-100"
              />
            </div>

            {/* Password */}
            <div className="form-group">
              <TextField
                label="Password"
                type="password"
                required
                variant="standard"
                className="w-100"
              />
            </div>

            {/* Forgot Password */}
            <a className="border-effect cursor txt">Forgot Password?</a>

            {/* Buttons */}
            <div className="d-flex mt-3 mb-3" style={{ gap: "10px" }}>
              <Button
                className="btn-blue btn-lg"
                style={{ fontWeight: "bold", flex: 1 }}
              >
                Sign In
              </Button>
              <Link to="/" style={{ textDecoration: "none" }}>
                <Button
                  className="btn-lg same-size"
                  style={{ fontWeight: "bold", flex: 1 }}
                  variant="outlined"
                  onClick={() => context.setisHeaderFooterShow(true)}
                >
                  Cancel
                </Button>
              </Link>
            </div>


            {/* Sign Up link */}
            <p className="txt">
              Not Registered?{" "}
              <Link to="/signUp" className="border-effect">
                Sign Up
              </Link>
            </p>

            {/* Social login */}
            <h6 className="mt-4 text-center font-weight-bold">
              Or continue with social account
            </h6>
            <button type="button" className="loginWithGoogle">
              <img
                src={GoogleImg}
                alt="Google Sign In"
                className="google-btn-img"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
