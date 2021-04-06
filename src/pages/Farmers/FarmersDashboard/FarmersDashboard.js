import React from 'react';
import BuyerFooter from '../../../components/BuyerFooter';
import FarmerNavbar from '../../../components/FarmerNavbar';
import './FarmersDashboard.css'
import Wallet from "../../../assets/images/wallet.svg";
import Item5 from "../../../assets/images/item5.png";
import Item1 from "../../../assets/images/item1.png";
import Item4 from "../../../assets/images/item4.png";
import Arrow from "../../../assets/images/arrow.svg";
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'


const FarmersDashboard = (props) => {

    const {firstname} = props

    return ( 
        <>
            <FarmerNavbar />

            <div className="container mt-5 mb-5">

                <div className="row">

                    <div className="col-lg-6 mb-5">
                        
                        <div className="mt-1 mt-lg-5">
                            <h4 style={{fontWeight: 700}}>Hello, {firstname}</h4>   
                            <p style={{color: 'rgba(44, 58, 80, 0.4', fontSize: 14}}>Welcome to your OYAP dashboard</p> 
                        </div>

                        <div className="mt-4">
                            <Link to="/farmers/addproduct" className="btn btn-oyap dash-width">Add new product</Link>
                        </div>


                        {/* orders count */}
                        <div className="mt-5 dash-width" style={{display: 'flex', flexWrap: 'wrap', }}>

                            <div className="box-width">
                                <p className="mb-0 newOrderStyle text-center">200</p>
                                <div className="text-center mt-3">
                                    <p className="mb-0" style={{lineHeight: '25px', fontWeight: 500}}>New Orders</p>
                                </div>
                            </div>
                            

                            <div className="box-width">
                                <p className="mb-0 confirmedOrderStyle text-center">100</p>
                                <div className="text-center mt-3">
                                    <p className="mb-0" style={{lineHeight: '25px', color: '#ED881C', fontWeight: 500}}>Confirmed Orders</p>
                                </div>
                            </div>

                            <div className="box-width">
                                <p className="mb-0 completedOrderStyle text-center">50</p>
                                <div className="text-center mt-3">
                                    <p className="mb-0" style={{lineHeight: '25px', fontWeight: 500}}>Completed Orders</p>
                                </div>
                            </div>

                            
                        </div>

                        {/* products and manage wallet */}
                        <div className="mt-3 dash-width" style={{display: 'flex', flexWrap: 'wrap', }}>

                            <div className="box-width">
                                <p className="mb-0 newOrderStyle text-center">200</p>
                                <div className="text-center mt-3">
                                    <p className="mb-0" style={{lineHeight: '25px', fontWeight: 500}}>Total Products</p>
                                </div>
                            </div>



                            <div className="box-width">
                                    <Link to="/farmers/wallet" className="walletStyle text-center">
                                     <img alt="wallet" src={Wallet} className="img-fluid" />
                                    </Link>
                                <div className="text-center mt-3">
                                    <p className="mb-0" style={{lineHeight: '25px', fontWeight: 500}}>Manage Wallet</p>
                                </div>
                            </div>

                           
                            </div>

                    </div>

                    <div className="col-lg-6">


                        {/* new orders layout */}
                        <div className="newOrders">

                            <h5>New Orders</h5>

                            {/* first order */}
                            <div className="mt-3 farmersOrders">
                                <div>
                                    <div>
                                        <img src={Item5} alt="cart" className="cartImage" />
                                    </div>
                                </div>

                                <div>
                                    <div className="ml-lg-3 ml-0">
                                            <p className="mb-0" style={{fontWeight: 'bold'}}>Maize</p>
                                            <p className="mb-0 mt-2" style={{fontSize: 14}}>Order date by: 23rd sept, 2020</p>
                                            <p className="mb-0 mt-2" style={{fontSize: 14}}>Order time: 2:00pm</p>
                                            <p className="mb-0 mt-2" style={{fontSize: 14}}>Quantity: 10</p>

                                            <div className="text-right mt-lg-0 mt-2">
                                                <Link to="/farmers/order/1" className="">
                                                    <img src={Arrow} alt="navigate" style={{width: 20, height: 20}} className="img-fluid" />
                                                </Link>         
                                            </div>
                                    </div>
                                </div>

                                
                            </div>

                            {/* second order */}
                            <div className="mt-4 farmersOrders">
                                <div>
                                    <div>
                                        <img src={Item5} alt="cart" className="cartImage" />
                                    </div>
                                </div>

                                <div>
                                    <div className="ml-lg-3 ml-0">
                                            <p className="mb-0" style={{fontWeight: 'bold'}}>Maize</p>
                                            <p className="mb-0 mt-2" style={{fontSize: 14}}>Order date by: 23rd sept, 2020</p>
                                            <p className="mb-0 mt-2" style={{fontSize: 14}}>Order time: 2:00pm</p>
                                            <p className="mb-0 mt-2" style={{fontSize: 14}}>Quantity: 5</p>

                                            <div className="text-right mt-lg-0 mt-2">
                                                <Link to="/farmers/order/2" className="">
                                                    <img src={Arrow} alt="navigate" style={{width: 20, height: 20}} className="img-fluid" />
                                                </Link>         
                                            </div>
                                    </div>
                                </div> 
                            </div>

                            {/* third order */}
                            <div className="mt-4 farmersOrders">
                                <div>
                                    <div>
                                        <img src={Item1} alt="cart" className="cartImage" />
                                    </div>
                                </div>

                                <div>
                                    <div className="ml-lg-3 ml-0">
                                            <p className="mb-0" style={{fontWeight: 'bold'}}>Green Beans</p>
                                            <p className="mb-0 mt-2" style={{fontSize: 14}}>Order date by: 23rd sept, 2020</p>
                                            <p className="mb-0 mt-2" style={{fontSize: 14}}>Order time: 2:00pm</p>
                                            <p className="mb-0 mt-2" style={{fontSize: 14}}>Quantity: 10</p>

                                            <div className="text-right mt-lg-0 mt-2">
                                                <Link to="/farmers/order/3" className="">
                                                    <img src={Arrow} alt="navigate" style={{width: 20, height: 20}} className="img-fluid" />
                                                </Link>         
                                            </div>
                                    </div>
                                </div>

                                
                            </div>

                            {/* fifth order */}
                         <div className="mt-4 farmersOrders">
                                <div>
                                    <div>
                                        <img src={Item4} alt="cart" className="cartImage" />
                                    </div>
                                </div>

                                <div>
                                    <div className="ml-lg-3 ml-0">
                                            <p className="mb-0" style={{fontWeight: 'bold'}}>Pepper</p>
                                            <p className="mb-0 mt-2" style={{fontSize: 14}}>Order date by: 23rd sept, 2020</p>
                                            <p className="mb-0 mt-2" style={{fontSize: 14}}>Order time: 2:00pm</p>
                                            <p className="mb-0 mt-2" style={{fontSize: 14}}>Quantity: 10</p>

                                            <div className="text-right mt-lg-0 mt-2">
                                                <Link to="/farmers/order/4" className="">
                                                    <img src={Arrow} alt="navigate" style={{width: 20, height: 20}} className="img-fluid" />
                                                </Link>         
                                            </div>
                                    </div>
                                </div>

                                
                            </div>

                            {/* view more layout */}
                            <div className="mt-4" style={{display: 'flex', justifyContent: 'flex-end'}}>

                                <Link to="/farmers/order/new" className="next-page page-space" style={{textDecoration: 'none', color: '#323335'}}>
                                    <span>View All <i className="mdi mdi-chevron-right" style={{color: '#c4c4c4'}}></i></span>
                                </Link>
                                
                            </div>
                        </div>



                    </div>

                </div>

            </div>


            <div style={{marginTop: '200px'}}>
                <BuyerFooter />
            </div>
        </>
     );
}

const mapStateToProps = (state) =>{
    return{
        auth: state.auth.isAuthenticated,
        firstname: state.auth.firstname,
        lastname: state.auth.lastname,
    }
}

const mapDispatchtoProps = (dispatch) =>{
    return{

    }
}
 
export default connect(mapStateToProps, mapDispatchtoProps)(FarmersDashboard);