import React from 'react';
import Logo from "../assets/images/logo.png";
import Bell from "../assets/images/bell.svg";
import Account from "../assets/images/account.svg";
import {Link, NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import * as actions from "../store/actions";
import './BuyerNavbar.css'

const FarmerNav = (props) => {

    const {profileUrl} = props

    return ( 
        <>

            {/* new navbar */}
            <div className="container mynav">
                <div className="contain" >
             <Link className="mt-lg-1" to="/">
                  <img src={Logo}  alt="logo" width="50" height="50"/>
                    </Link>


            <div className="mobile-div">
                <NavLink className="nav-link mobile-menu"  to="/cart" style={{position: 'relative'}}  aria-haspopup="true" aria-expanded="false">
                    <img src={Bell}  alt="logo" width="30" height="30" />   
                    <div
                    className="cartDiv">
                    <span style={{color: '#ED881C', fontWeight: 'bold'}}>6</span>
                    </div>
                </NavLink> 
                 
                <NavLink to="/farmers/profile">
                    <img src={profileUrl ? profileUrl : Account} alt="Open Nav" className="mobile-menu mt-1 ml-2" style={{width: 35, height: 35, borderRadius: '50%'}} id="mobile-cta"  />
                </NavLink>
               
            </div>
           

            <nav>
           
                <ul className="primary-nav">
                    <li className="nav-item px-lg-2 mt-lg-3">
                       <span>Dashboard</span>
                    </li>
                <li className="cart-display mt-lg-1 pl-lg-5">
                    <div className="form-group input-container mb-0">
                        <i className="mdi mdi-magnify iconn"></i>
                        <input type="text" placeholder="Search"
                        style={{padding: '22px 20px 22px 45px'}} 
                        className="form-control search-style"   />
                    </div>
                </li>
                <li className="cart-display mt-lg-1">
                    <button className="btn btn-search ml-lg-2 mt-lg-0 mt-2">SEARCH</button>
                </li>
                    
                </ul>

                <ul className="secondary-nav">
                    <li className="nav-item px-lg-2">
                        <NavLink className="nav-link cart-display"  to="/" style={{position: 'relative'}}  aria-haspopup="true" aria-expanded="false">
                                <img src={Bell}  alt="logo" width="30" height="30" />   
                                <div
                                className="cartDiv">
                                <span style={{color: '#ED881C', fontWeight: 'bold'}}>6</span>
                                </div>
                        </NavLink> 
                     </li>
                    <li className="cart-display px-lg-2 "> 
                      <NavLink to="/farmers/profile">
                             <img src={profileUrl ? profileUrl : Account}  alt="logo" width="30" height="30" style={{borderRadius: '50%'}} />  
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
        profileUrl: state.auth.profilePic  
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        logout: () => dispatch(actions.logOut()),
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(FarmerNav);