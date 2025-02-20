import Button from '@mui/material/Button';
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Navigation = () =>{
    return(
        <nav>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-2 navPart1'>
                        <Button className='allCatTab align-items-center'>
                            <span className='icon1 mr-2'><IoIosMenu/></span>
                            <span class="text">ALL CATEGORIES</span>
                            <span className='icon2 ml-2'><FaAngleDown/></span>
                        </Button>
                    </div>

                    <div className='col-sm-10 navPart2 d-flex align-items-center'>
                        <ul className='list list-inline ml-auto'>
                            <li className='list-inline-item'><Link to="/"><Button>Home</Button></Link></li>
                            <li className='list-inline-item'>
                                <Link to="/"><Button>men</Button></Link>
                                <div className='submenu'>
                                    <Link to="/"><Button>Clothing</Button></Link>
                                    <Link to="/"><Button>Footwear</Button></Link>
                                    <Link to="/"><Button>Watches</Button></Link>
                                </div>
                            </li>
                            <li className='list-inline-item'><Link to="/"><Button>women</Button></Link></li>
                            <li className='list-inline-item'><Link to="/"><Button>beauty</Button></Link></li>
                            <li className='list-inline-item'><Link to="/"><Button>watches</Button></Link></li>
                            <li className='list-inline-item'><Link to="/"><Button>kids</Button></Link></li>
                            <li className='list-inline-item'><Link to="/"><Button>gifts</Button></Link></li>
                            <li className='list-inline-item'><Link to="/"><Button>Blog</Button></Link></li>
                            <li className='list-inline-item'><Link to="/"><Button>Contact</Button></Link></li>
                        </ul>
                    </div>
                </div>
            </div>  
        </nav>
    )
}
export default Navigation;