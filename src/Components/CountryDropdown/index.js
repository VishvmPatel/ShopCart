import Button from '@mui/material/Button';
import { FaAngleDown } from "react-icons/fa6";
import Dialog from '@mui/material/Dialog';
import { IoIosSearch } from "react-icons/io";

const CountryDropdown=()=>{
    return(
        <>
            <Button className='countryDrop'>
                <div className='info d-flex flex-column'>
                    <span className='label'>Your Location</span>
                    <span className='name'>India</span>
                </div>
                <span className='ml-auto'><FaAngleDown/></span>
            </Button>

            <Dialog open={true} className='locationModel'>
                <h4>Choose your Delievery Location</h4>  
                <p>Enter your address and we will specify the offer for your area.</p>  
                <div className='headerSearch w-100'>
                    <input type='text' placeholder='Search your area...' />
                    <Button><IoIosSearch /></Button>
                </div>  
                <ul className='countryList mt-3'>
                    <li><Button>India</Button></li>
                    <li><Button>Sri Lanka</Button></li>
                    <li><Button>Pakistan</Button></li>
                    <li><Button>India</Button></li>
                    <li><Button>Sri Lanka</Button></li>
                    <li><Button>Pakistan</Button></li>
                    <li><Button>India</Button></li>
                    <li><Button>Sri Lanka</Button></li>
                    <li><Button>Pakistan</Button></li>
                    <li><Button>India</Button></li>
                    <li><Button>Sri Lanka</Button></li>
                    <li><Button>Pakistan</Button></li>
                    <li><Button>India</Button></li>
                    <li><Button>Sri Lanka</Button></li>
                    <li><Button>Pakistan</Button></li>
                    <li><Button>India</Button></li>
                    <li><Button>Sri Lanka</Button></li>
                    <li><Button>Pakistan</Button></li>
                    <li><Button>India</Button></li>
                    <li><Button>Sri Lanka</Button></li>
                    <li><Button>Pakistan</Button></li>
                    <li><Button>India</Button></li>
                    <li><Button>Sri Lanka</Button></li>
                    <li><Button>Pakistan</Button></li>
                    <li><Button>India</Button></li>
                    <li><Button>Sri Lanka</Button></li>
                    <li><Button>Pakistan</Button></li>
                    <li><Button>India</Button></li>
                    <li><Button>Sri Lanka</Button></li>
                    <li><Button>Pakistan</Button></li>
                </ul>       
            </Dialog>
        </>
    )
}

export default CountryDropdown;