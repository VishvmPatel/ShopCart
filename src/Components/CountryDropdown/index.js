import React from 'react';
import Button from '@mui/material/Button';
import { FaAngleDown } from "react-icons/fa6";
import Dialog from '@mui/material/Dialog';
import { IoIosSearch } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { useState } from 'react';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref){
    return <Slide direction="up" ref={ref}{...props}/>
});

const CountryDropdown=()=>{

    const [isOpenModel, setisOpenModel] = useState(false);
    return(
        <>
            <Button className='countryDrop' onClick={()=>setisOpenModel(true)}>
                <div className='info d-flex flex-column'>
                    <span className='label'>Your Location</span>
                    <span className='name'>India</span>
                </div>
                <span className='ml-auto'><FaAngleDown/></span>
            </Button>

            <Dialog open={isOpenModel} onClose={()=>setisOpenModel(false)} className='locationModel' TransitionComponent={Transition}>
                <h4 className='mb-0'>Choose your Delievery Location</h4>  
                <p>Enter your address and we will specify the offer for your area.</p>  
                <Button className='close_'onClick={()=>setisOpenModel(false)}><MdClose/></Button>
                <div className='headerSearch w-100'>
                    <input type='text' placeholder='Search your area...' />
                    <Button><IoIosSearch /></Button>
                </div>  
                <ul className='countryList mt-3'>
                    <li><Button onClick={()=>setisOpenModel(false)}>India</Button></li>
                    <li><Button onClick={()=>setisOpenModel(false)}>Sri Lanka</Button></li>
                    <li><Button onClick={()=>setisOpenModel(false)}>Pakistan</Button></li>
                    <li><Button onClick={()=>setisOpenModel(false)}>India</Button></li>
                    <li><Button onClick={()=>setisOpenModel(false)}>Sri Lanka</Button></li>
                    <li><Button onClick={()=>setisOpenModel(false)}>Pakistan</Button></li>
                    <li><Button onClick={()=>setisOpenModel(false)}>India</Button></li>
                    <li><Button onClick={()=>setisOpenModel(false)}>Sri Lanka</Button></li>
                    <li><Button onClick={()=>setisOpenModel(false)}>Pakistan</Button></li>
                    <li><Button onClick={()=>setisOpenModel(false)}>India</Button></li>
                    <li><Button onClick={()=>setisOpenModel(false)}>Sri Lanka</Button></li>
                    <li><Button onClick={()=>setisOpenModel(false)}>Pakistan</Button></li>
                    <li><Button onClick={()=>setisOpenModel(false)}>India</Button></li>
                    <li><Button onClick={()=>setisOpenModel(false)}>Sri Lanka</Button></li>
                    <li><Button onClick={()=>setisOpenModel(false)}>Pakistan</Button></li>
                    <li><Button onClick={()=>setisOpenModel(false)}>India</Button></li>
                    <li><Button onClick={()=>setisOpenModel(false)}>Sri Lanka</Button></li>
                    <li><Button onClick={()=>setisOpenModel(false)}>Pakistan</Button></li>
                    <li><Button onClick={()=>setisOpenModel(false)}>India</Button></li>
                    <li><Button onClick={()=>setisOpenModel(false)}>Sri Lanka</Button></li>
                    <li><Button onClick={()=>setisOpenModel(false)}>Pakistan</Button></li>
                    <li><Button onClick={()=>setisOpenModel(false)}>India</Button></li>
                    <li><Button onClick={()=>setisOpenModel(false)}>Sri Lanka</Button></li>
                    <li><Button onClick={()=>setisOpenModel(false)}>Pakistan</Button></li> 
                </ul>       
            </Dialog>
        </>
    )
}

export default CountryDropdown;