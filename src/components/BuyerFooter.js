import React from 'react';
import Logo from "../assets/images/logo.png";
import Instagram from "../assets/images/instagram.svg";
import Twitter from "../assets/images/twitter.svg";
import Facebook from "../assets/images/facebook.svg";
import './BuyerFooter.css'
import { Link } from 'react-router-dom';

const BuyerFooter = () => {
    return ( 
        <>
            <div style={{background: '#323335', padding: '40px 0px'}}>
                <div className="container">
                        <div className="row">
                                <div className="col-lg-6">
                                    <img src={Logo} alt="oyap" width="81" height="78" />
                                </div>
                                <div className="col-lg-6">
                                    <ul className="mt-3 footer-links">
                                        <li className="mt-lg-0 mt-3"><Link to="/">About us</Link></li>
                                        <li className="mt-lg-0 mt-3"><Link to="/" >Terms and Conditions</Link></li>
                                        <li className="mt-lg-0 mt-3"><Link to="/" >Safety Tips</Link></li>
                                        <li className="mt-lg-0 mt-3"><Link to="/faq">FAQ</Link></li>
                                    </ul>
                                </div>
                        </div>

                        <div className="text-center mt-4">
                            <p className="text-white">&copy; { new Date().getFullYear()} ioyap.com</p>
                        </div>

                        <div className="mt-4" style={{display: 'flex', justifyContent: 'center'}}>
                            <div style={{width: '50px', height: '50px', borderRadius: '50%', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                 <img src={Instagram} alt="oyap" width="30" height="30" />
                            </div>
                             <div className="ml-4" style={{width: '50px', height: '50px', borderRadius: '50%', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                             <img src={Twitter} alt="oyap" width="30" height="30" />
                            </div>
                             <div className="ml-4" style={{width: '50px', height: '50px', borderRadius: '50%', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                <img src={Facebook} alt="oyap" width="30" height="30" />
                            </div>
                        </div>
                </div>
            </div>
        </>
     );
}
 
export default BuyerFooter;