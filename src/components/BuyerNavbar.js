import React, {useState} from 'react';
import SellIcon from "../assets/images/sell_nav.png";
import Logo from "../assets/images/logo.png";
import Cart from "../assets/images/cart_icon.svg";
import Menu from "../assets/images/menu.svg";
import Close from "../assets/images/exit.svg";
import {Link, NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import './BuyerNavbar.css'

const BuyerNav = (props) => {

    const {cartCount} = props

    const [navShow, setNavShow] = useState(false);

    const ToggleMenu = () =>{
        setNavShow(navShow ? false : true);
    }

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
            {/* <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: 'white',}}>
            <div className="container">
                  <Link className="navbar-brand" to="/">
                  <img src={Logo}  alt="logo" width="50" height="50"/>
                    </Link>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        
                        <ul className="navbar-nav mr-auto py-4 py-md-0">
                            <li className="nav-item px-lg-2">
                                <NavLink className="nav-link text-color"  to="/"   aria-haspopup="true" aria-expanded="false">
                                        Company
                                </NavLink> 
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item px-lg-2">
                                <NavLink className="nav-link"  to="/cart" style={{position: 'relative'}}  aria-haspopup="true" aria-expanded="false">
                                     <img src={Cart}  alt="logo" width="30" height="30" />   
                                     <div
                                      className={cartCount === 0 ? "emptyCartDiv" : "cartDiv"}>
                                        <span style={{color: '#ED881C', fontWeight: 'bold'}}>{cartCount}</span>
                                     </div>
                                </NavLink> 
                            </li>
                        </ul>
                     </div>

                </div>
            </nav> */}

            {/* new navbar */}
            <div class="container mynav">
                <div class="contain">
             <Link className="mt-lg-1" to="/">
                  <img src={Logo}  alt="logo" width="50" height="50"/>
                    </Link>

            <div className="mobile-div">
                <NavLink className="nav-link mobile-menu"  to="/cart" style={{position: 'relative'}}  aria-haspopup="true" aria-expanded="false">
                    <img src={Cart}  alt="logo" width="30" height="30" />   
                    <div
                    className={cartCount === 0 ? "emptyCartDiv" : "cartDiv"}>
                    <span style={{color: '#ED881C', fontWeight: 'bold'}}>{cartCount}</span>
                    </div>
                </NavLink> 

                <img src={Menu} alt="Open Nav" className="img-fluid mobile-menu" id="mobile-cta" onClick={ToggleMenu} />
            </div>
           

            <nav className={ navShow ? "menu-btn" : "" }>
            <img src={Close} alt="Close Nav" className="img-fluid mobile-menu-exit" id="mobile-cta" onClick={ToggleMenu} />
                <ul class="primary-nav">
                {/* <Link to="/orders" style={{textDecoration: 'none'}}>My Orders</Link> */}
                <li>
                    <div className="form-group input-container mb-0">
                        <i className="mdi mdi-magnify iconn"></i>
                        <input type="text" placeholder="Search farm produce" 
                        className="form-control search-style"  />
                    </div>
                </li>
                <li>
                    <button className="btn btn-search ml-lg-3 mt-lg-0 mt-2">SEARCH</button>
                </li>
                    

                </ul>

                <ul class="secondary-nav">
                    <Link to="/orders" className="mt-lg-1" style={{textDecoration: 'none'}}>My Orders</Link>
                    <li className="nav-item px-lg-2">
                        <NavLink className="nav-link cart-display"  to="/cart" style={{position: 'relative'}}  aria-haspopup="true" aria-expanded="false">
                                <img src={Cart}  alt="logo" width="25" height="25" />   
                                <div
                                className={cartCount === 0 ? "emptyCartDiv" : "cartDiv"}>
                                <span style={{color: '#ED881C', fontWeight: 'bold'}}>{cartCount}</span>
                                </div>
                        </NavLink> 
                     </li>
                </ul>
            </nav>

        </div>
    </div>

        </>
     );
}

const mapStateToProps = (state) =>{
    return{
        cartCount: state.cart.cartItems.length
    }
}
 
export default connect(mapStateToProps)(BuyerNav);