import React from 'react';
import SellIcon from "../assets/images/sell_nav.png";
import Logo from "../assets/images/logo.png";
import Cart from "../assets/images/cart_icon.svg";
import {Link, NavLink} from 'react-router-dom'

const BuyerNav = () => {
    return ( 
        <>

            {/* top navigation */}
            <div className="d-none d-md-block" style={{background: 'rgba(196, 196, 196, 0.2)', padding: '8px 0px'}}>
             <div className="container">
                   <div style={{display: 'flex'}}>
                       <div style={{flex: 2}}>
                           <div style={{display: 'flex'}}>
                               <div>
                                 <img src={SellIcon} alt="oyap" className="img-fluid" />
                               </div>
                               <div className="mt-1">
                                 <Link to="/login" className="ml-2" style={{color: '#ED881C', textDecoration: 'none'}}>Sell on OYAP</Link>
                               </div>
                           </div>    
                       </div>
                       <div style={{flex: 1}}>
                           <div style={{display: 'flex', justifyContent: 'space-between'}}>
                               <div className="mt-1">
                                <Link to="/about" style={{textDecoration: 'none', color: '#323335'}}>About us</Link>
                               </div>
                               <div className="mt-1">
                               <Link to="/contact" style={{textDecoration: 'none', color: '#323335'}}>Contact us</Link>  
                               </div>
                               <div className="mt-1">
                                 <a href="tel:+2348141184662"  style={{textDecoration: 'none', color: '#323335'}}>Hotline: 07084234213</a>   
                               </div>
                           </div>
                       </div>
                   </div> 
                </div>
            </div>

            {/* navbar */}
            <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: 'white',}}>
            <div className="container">
                  <Link className="navbar-brand" to="/">
                  <img src={Logo}  alt="logo" width="50" height="50"/>
                    </Link>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                         {/* First Ul list */}
                        <ul className="navbar-nav mr-auto py-4 py-md-0">
                            <li className="nav-item px-lg-2">
                                <NavLink className="nav-link text-color"  to="/"   aria-haspopup="true" aria-expanded="false">
                                        Company
                                </NavLink> 
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item px-lg-2">
                                <NavLink className="nav-link text-color"  to="/" id="navbarDropdown"  aria-haspopup="true" aria-expanded="false">
                                <img src={Cart}  alt="logo" width="30" height="30" />   
                                </NavLink> 
                            </li>
                        </ul>
                     </div>

                </div>
            </nav>

        </>
     );
}
 
export default BuyerNav;