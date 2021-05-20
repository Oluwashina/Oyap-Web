import React, {useState, useEffect} from 'react';
import SellIcon from "../assets/images/sell_nav.png";
import Logo from "../assets/images/logo.png";
import Cart from "../assets/images/cart_icon.svg";
import Menu from "../assets/images/menu.svg";
import Close from "../assets/images/exit.svg";
import Account from "../assets/images/account.svg";
import User from "../assets/images/user.svg";
import {Link, NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import * as actions from "../store/actions";
import './BuyerNavbar.css'
import { getCartCount } from '../store/actions/carts';

const BuyerNav = (props) => {

    const {cartCount,cartItems,auth, logout, firstname, getCount} = props

    const [navShow, setNavShow] = useState(false);

    const [dropShow, setDropShow] = useState(false)

    const ToggleMenu = () =>{
        setNavShow(navShow ? false : true);
        switch(navShow){
            case false:
                document.body.classList.add('body-hidden');
            break;
            case true:
                document.body.classList.remove('body-hidden');
                break;
            default:
                break;
        }
    }

    const ToggleDropdown = () =>{
        setDropShow(dropShow ? false : true)
    }

    // make call to get cart count
    useEffect(() => {
        if(auth){
            getCount();
         }
    }, [getCount, auth, cartItems]);

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
                                 <Link to="/signup" className="ml-2" style={{color: '#ED881C', textDecoration: 'none'}}>Sell on OYAP</Link>
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
            <div className="container mynav">
                <div className="contain">
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
           

            <nav className={ navShow ? "nav menu-btn" : "" }>
            {/* mobile menu */} 
            <img src={Close} alt="Close Nav" className="img-fluid mobile-menu-exit" id="mobile-cta" onClick={ToggleMenu} />
            <div className="mobile-menu text-white">
                <hr style={{borderTop: '1px solid #7BC30A', marginTop: 60}} />
                {/* */}
                <div style={{textAlign: 'right', padding: "10px 15px 15px 0px", fontSize: '1em'}}>
                 {!auth ? <div className="">
                    <h6 style={{ color: '#ED881C'}}>My OYAP account</h6>
                    </div>
                    :  <div className="">
                     <h6 style={{ color: '#ED881C'}}>My OYAP account - Hi, {firstname}</h6>
                    </div>
                    }
                        
                        {!auth ? <div className="mt-4">
                        <Link to="/login" style={{textDecoration: 'none', color: '#fff'}}>LOGIN</Link>
                        </div>
                        :
                        <div className="mt-4">
                        <Link to="/customer/account" style={{textDecoration: 'none', color: '#fff'}}>Account</Link>
                        </div>
                    }

                   {!auth ? <div className="mt-4">
                    <Link to="/signup" style={{textDecoration: 'none', color: '#fff'}}>CREATE AN ACCOUNT</Link>
                    </div>
                    :
                    <div className="mt-4">
                    <Link to="/orders" style={{textDecoration: 'none', color: '#fff'}}>My Orders</Link>
                    </div>
                  }       


                       {auth ? <div className="mt-4">
                            <button className="btn btn-logout"
                            onClick={logout}
                            style={{padding: 0}}
                            >LOGOUT</button>
                        </div>
                        : ""
                       }
                </div>
            


                <hr style={{borderTop: '1px solid #7BC30A', marginTop: 10}} />
                <div style={{textAlign: 'right', padding: "10px 15px 15px 0px", fontSize: '1em'}}>
                 <div className="">
                    <h6 style={{ color: '#ED881C'}}>Our Categories</h6>
                    </div>
                    <ul className="">
                        <li style={{marginTop: '20px'}}>Fruits</li>
                        <li  style={{marginTop: '20px'}}>Vegetables</li>
                        <li  style={{marginTop: '20px', marginBottom: '20px'}}>Meat</li>
                        <Link to="/" style={{ color: '#fff', textDecoration: 'underline'}}>See all</Link>
                    </ul>
                </div>

                <hr style={{borderTop: '1px solid #7BC30A', marginTop: 10}} />
                <div style={{textAlign: 'right', padding: "10px 15px 15px 0px", fontSize: '1em'}}>
                <div className="mb-4">
                        <Link to="/signup" style={{textDecoration: 'none', color: '#fff'}}>Sell on OYAP</Link>
                        </div>
                    <div className="mb-4">
                        <Link to="/about" style={{textDecoration: 'none', color: '#fff'}}>About us</Link>
                        </div>
                        <div className="mb-4">
                        <Link to="/contact" style={{textDecoration: 'none', color: '#fff'}}>Contact us</Link>  
                        </div>
                        <div className="">
                            <a href="tel:+2347084234213"  style={{textDecoration: 'none', color: '#fff'}}>Hotline: 07084234213</a>   
                        </div>
                </div>
                 
            </div>
           
                <ul className="primary-nav">
                {/* <Link to="/orders" style={{textDecoration: 'none'}}>My Orders</Link> */}
                <li className="cart-display">
                    <div className="form-group input-container mb-0">
                        <i className="mdi mdi-magnify iconn"></i>
                        <input type="text" placeholder="Search farm produce" 
                        className="form-control search-style"  />
                    </div>
                </li>
                <li className="cart-display">
                    <button className="btn btn-search ml-lg-3 mt-lg-0 mt-2">SEARCH</button>
                </li>

            { auth ? 

            <li className="nav-item px-lg-4 cart-display">
            <div className="dropdown">
               
                <div>
                    <img src={User}  alt="logo" width="25" height="25" />  
                </div>

                <div className="ml-3">
                    <h6 className="mb-0" style={{color: '#7BC30A', fontWeight: 'bold' }}>Hi, {firstname}</h6>
                </div>

                <div className="ml-3">
                <i className={ dropShow ? "mdi mdi-chevron-up" : "mdi mdi-chevron-down" }
                onClick={ToggleDropdown}
                 style={{fontSize: 25, cursor: 'pointer'}}></i> 
                </div>

                    <div 
                    className={dropShow ? "dropdown-login-content block" : "dropdown-login-content"}
                        >

                        <NavLink to="/customer/account" className="drop-signin" style={{padding: 10, textDecoration: 'none'}}>
                            <i className="mdi mdi-account" style={{fontSize: 20, marginRight: 10}}></i>
                            <p className="ml-2 mb-0">Account</p>
                        </NavLink>

                        <NavLink to="/orders" className="drop-signin"  style={{padding: 10, textDecoration: 'none'}}>
                            <i className="mdi mdi-briefcase-account-outline" style={{fontSize: 20, marginRight: 10}}></i>
                            <p className="ml-2 mb-0">My Orders</p>
                        </NavLink>

                        <hr className="mt-0 mb-0" />

                        <div>
                            <button className="btn btn-logout"
                            onClick={logout}
                            >LOGOUT</button>
                        </div>
                    </div>
                </div>
            </li>

             :  <li className="nav-item px-lg-4 cart-display">
                <div className="dropdown">
                   
                    <div>
                        <img src={User}  alt="logo" width="25" height="25" />  
                    </div>

                    <div className="ml-4">
                        <h6 className="mb-0" style={{color: '#7BC30A', fontWeight: 'bold' }}>LOGIN</h6>
                    </div>

                    <div className="ml-4">
                    <i className={ dropShow ? "mdi mdi-chevron-up" : "mdi mdi-chevron-down" }
                    onClick={ToggleDropdown}
                     style={{fontSize: 25, cursor: 'pointer'}}></i> 
                    </div>

                        <div 
                        className={dropShow ? "dropdown-content block" : "dropdown-content"}
                            >
                            <div>
                                <Link to="/login" className="btn btn-search" style={{padding: '10px 40px', textDecoration: 'none', color: 'white'}}>LOGIN</Link>
                            </div>
                            <div>
                                <p className=" mt-3" style={{color: '#C4C4C4'}}>OR</p>
                            </div>
                            <div>
                                <Link to="/signup" className="mt-1" style={{textDecoration: 'none', color: '#ED881C', fontWeight: 500, textAlign: 'center', padding: '0px'}}>CREATE AN ACCOUNT</Link>
                            </div>
                        </div>
                    </div>
                </li>
                 }
                    

                </ul>

                <ul className="secondary-nav">
                    <li className="nav-item px-lg-2">
                        <NavLink className="nav-link cart-display"  to="/cart" style={{position: 'relative'}}  aria-haspopup="true" aria-expanded="false">
                                <img src={Cart}  alt="logo" width="30" height="30" />   
                                <div
                                className={cartCount === 0 ? "emptyCartDiv" : "cartDiv"}>
                                <span style={{color: '#ED881C', fontWeight: 'bold'}}>{cartCount}</span>
                                </div>
                        </NavLink> 
                     </li>
                    {auth ? <li className="cart-display px-lg-2 mt-lg-1">
                        <NavLink to="/customer/account">
                        <img src={Account}  alt="logo" width="25" height="25" />
                        </NavLink>
                    </li>
                    : "" }
                </ul>
            </nav>

        </div>
    </div>

        </>
     );
}

const mapStateToProps = (state) =>{
    return{
        cartCount: state.cart.cartCount,
        cartItems: state.cart.cartItems,
        auth: state.auth.isAuthenticated,
        firstname: state.auth.firstname,
        lastname: state.auth.lastname
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        logout: () => dispatch(actions.logOut()),
        getCount: () => dispatch(getCartCount())
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(BuyerNav);