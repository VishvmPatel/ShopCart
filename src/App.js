import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import './App.css';
import { createContext, useEffect, useState } from "react";
import axios from 'axios';
import Footer from "./Components/Footer";
import ProductModal from "./Components/ProductModal";

const MyContext = createContext();

function App() {
  const [isOpenProductModal, setisOpenProductModal] = useState(false);
  const [countryList,setCountryList] = useState([]);
  const [selectedCountry,setSelectedCountry] = useState('');

  useEffect(()=>{
    getCountry("https://countriesnow.space/api/v0.1/countries/");
  },[]);
  
  const getCountry=async(url)=>{
    const responsive = await axios.get(url).then((res)=>{
      setCountryList(res.data.data)
      console.log(res.data.data)
    })
  }
  const values={
    countryList,
    setSelectedCountry,
    selectedCountry,
    setisOpenProductModal,
    isOpenProductModal
  }
  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        <Header />
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
        </Routes>
        <Footer />
        {
          isOpenProductModal === true && <ProductModal/>
        }
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;

export {MyContext};
