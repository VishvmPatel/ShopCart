import Button from '@mui/material/Button';
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown, FaAngleRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navigation = () => {
  const [isOpenSidebarVal, setisopenSidebarVal] = useState(false);

  return (
    <nav>
      <div className='container'>
        <div className='row'>
          {/* Sidebar Navigation */}
          <div className='col-sm-2 navPart1'>
            <div className='catWrapper'>
              <Button
                className='allCatTab align-items-center'
                onClick={() => setisopenSidebarVal(!isOpenSidebarVal)}
              >
                <span className='icon1 mr-2'><IoIosMenu /></span>
                <span className="text">ALL CATEGORIES</span>
                <span className='icon2 ml-2'><FaAngleDown /></span>
              </Button>
              <div className={`sidebarNav ${isOpenSidebarVal ? 'open' : ''}`}>
                <ul>
                  <li>
                    <Link to="/cat/men">
                      <Button>Men <FaAngleRight className='ml-auto' /></Button>
                    </Link>
                    <div className="submenu">
                      <Link to="/cat/men/clothing"><Button>Clothing</Button></Link>
                      <Link to="/cat/men/footwear"><Button>Footwear</Button></Link>
                      <Link to="/cat/men/watches"><Button>Watches</Button></Link>
                    </div>
                  </li>
                  <li>
                    <Link to="/cat/women">
                      <Button>Women <FaAngleRight className='ml-auto' /></Button>
                    </Link>
                    <div className="submenu">
                      <Link to="/cat/women/clothing"><Button>Clothing</Button></Link>
                      <Link to="/cat/women/footwear"><Button>Footwear</Button></Link>
                      <Link to="/cat/women/watches"><Button>Watches</Button></Link>
                    </div>
                  </li>
                  <li><Link to="/cat/beauty"><Button>Beauty</Button></Link></li>
                  <li><Link to="/cat/watches"><Button>Watches</Button></Link></li>
                  <li><Link to="/cat/kids"><Button>Kids</Button></Link></li>
                  <li><Link to="/cat/gifts"><Button>Gifts</Button></Link></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Top Navigation */}
          <div className='col-sm-10 navPart2 d-flex align-items-center'>
            <ul className='list list-inline ml-auto'>
              <li className='list-inline-item'><Link to="/"><Button>Home</Button></Link></li>

              <li className='list-inline-item'>
                <Link to="/cat/men"><Button>Men</Button></Link>
                <div className='submenu shadow'>
                  <Link to="/cat/men/clothing"><Button>Clothing</Button></Link>
                  <Link to="/cat/men/footwear"><Button>Footwear</Button></Link>
                  <Link to="/cat/men/watches"><Button>Watches</Button></Link>
                </div>
              </li>

              <li className='list-inline-item'>
                <Link to="/cat/women"><Button>Women</Button></Link>
                <div className='submenu shadow'>
                  <Link to="/cat/women/clothing"><Button>Clothing</Button></Link>
                  <Link to="/cat/women/footwear"><Button>Footwear</Button></Link>
                  <Link to="/cat/women/watches"><Button>Watches</Button></Link>
                </div>
              </li>

              <li className='list-inline-item'>
                <Link to="/cat/beauty"><Button>Beauty</Button></Link>
              </li>

              <li className='list-inline-item'>
                <Link to="/cat/watches"><Button>Watches</Button></Link>
              </li>

              <li className='list-inline-item'>
                <Link to="/cat/kids"><Button>Kids</Button></Link>
              </li>

              <li className='list-inline-item'>
                <Link to="/cat/gifts"><Button>Gifts</Button></Link>
              </li>

              <li className='list-inline-item'>
                <Link to="/blog"><Button>Blog</Button></Link>
              </li>

              <li className='list-inline-item'>
                <Link to="/contact"><Button>Contact</Button></Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
