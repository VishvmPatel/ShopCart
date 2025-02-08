import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.jpeg'
import CountryDropdown from '../CountryDropdown';


const Header= ()=>{
    return(
        <>
            <div className="headerWrapper">
                <div className="top-strip bg-blue">
                    <div className="container">
                        <p className="mb-0 mt-0 text-center">
                            <b>You're Most Welcome Here!!!!</b> 
                        </p>
                    </div>
                </div>

                <div className="header">
                    <div className="container">
                        <div className="row">
                            <div className="logoWrapper d-flex align-items-center col-sm-2">
                                <Link to={'/'}><img src={Logo} alt='Logo'/></Link>
                            </div>
                            <div className='col-sm-10 d-flex align-items-center part2'>
                                <CountryDropdown/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Header;