import React from 'react';
import BuyerNav from '../../components/BuyerNavbar';
import StartUp from "../../assets/images/startup.png"
import Secure from "../../assets/images/secure.png"
import Support from "../../assets/images/support.png"
import Farm from "../../assets/images/farm_1.png"
import './BuyerHome.css'
import BuyerFooter from '../../components/BuyerFooter';
import BuyerProducts from '../../components/BuyerProducts';

const BuyerHome = () => {
    return ( 
        <div>

            <BuyerNav />

            <div className="home">
                <div className="container">
                    <div>
                        <h1>Buy and sell</h1>
                        <h1>Fresh farm produce</h1>
                        <p className="mt-lg-0 mt-3">With ease</p>
                    </div>
                </div>
            </div>
            
            {/* services */}
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="services-1">
                            <div>
                                <img src={StartUp} alt="start" className="img-fluid" />
                            </div>
                            <div className="ml-4">
                                <h5 style={{fontWeight: 600}}>Fast Delivery</h5>
                                <p>Timely delivery on all orders</p>
                            </div>
                        </div>
                    </div>
                    {/* second column */}
                    <div className="col-lg-4">
                        <div className="services-2 mt-lg-0 mt-5" >
                            <div>
                                <img src={Secure} alt="start" className="img-fluid" />
                            </div>
                            <div className="ml-4">
                                <h5 style={{fontWeight: 600}}>Secure Payment</h5>
                                <p>100% secure payment</p>
                            </div>
                        </div>
                    </div>
                    {/* third column */}
                    <div className="col-lg-4">
                        <div className="services-3 mt-lg-0 mt-5">
                            <div>
                                <img src={Support} alt="start" className="img-fluid" />
                            </div>
                            <div className="ml-4">
                                <h5 style={{fontWeight: 600}}>Quality Support</h5>
                                <p>Realtime Support</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <BuyerProducts />

            {/* farm image */}
            <div className="mt-5 mb-5" style={{position: 'relative'}}>
                <img src={Farm} alt="farm" className="img-fluid" />
                <div className="sell_circle">
                    <h3>Are you an <br/> 
                        agropreneur and you <br />
                        want to sell on OYAP</h3>

                        <button className="btn btn-sell text-uppercase mt-4">SELL NOW</button>
                </div>
            </div>

            <BuyerFooter />

         </div>
     );
}
 
export default BuyerHome;