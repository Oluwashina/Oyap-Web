import React from 'react';
import BuyerNav from '../../components/BuyerNavbar';
import BuyerFooter from '../../components/BuyerFooter';
import {connect} from 'react-redux'
import Moment from "react-moment";

const OrderDetails = (props) => {

    const {order} = props

    console.log(order)

    // tab Layout
 const timelineLayout = order.timeLine.length ? (
        order.timeLine.map((value, index) => {
          return (
            <div key={index} className="mt-4 orderTimeline" >
                    <div>
                        <div className="timelineCircle">

                        </div>
                    </div>
                    <div className="orderTimelineDiv">
                            <div>
                            <h6 className="mb-0" style={{fontWeight: 700}}>{value.status}</h6>
                            <p className="mb-0 mt-2">
                            <Moment format="MMMM Do, YYYY">
                                            {value.dateOccured}
                            </Moment>
                            </p>
                            <p className="mb-0 mt-2">
                                <Moment format="LT">
                                            {value.dateOccured}
                                        </Moment>
                                </p>
                            </div>
                    </div>

             </div>
          );
        })
      ) : (
        <div>
          
        </div>
      );


    return ( 
        <>

        <BuyerNav />

          {/* breadcrumbs */}
          <div style={{background: ' rgba(196, 196, 196, 0.2)', padding: '10px'}}> 
                <div className="container">
                     <p className="mb-0"><span style={{color: '#7BC30A'}}>Home /</span> My Orders</p>
                </div>
         </div>

         
         <div className="container">

            <div className="text-center mt-lg-5 mt-4">
                 <h5 style={{fontWeight: 'bold'}}>Order details</h5>
            </div>

            {/* details */}
            <div className="row mt-lg-4 mt-3">
                    <div className="col-lg-7 mb-4">

                        {/* order details */}
                        <div className="mt-lg-4 mt-4 orderDetails" >

                            <div>
                                <img src={order.cartItem.productImages[0]} alt="cart" className="cartImage" />
                            </div>

                            <div className="ml-4 ml-lg-5">
                              <div className="">
                                    <p className="mb-0 mt-0 mt-lg-4" style={{fontWeight: 'bold', lineHeight: '25px'}}>{order.cartItem.productName}</p>
                                    <p className="mb-0 mt-2" style={{fontSize: 14}}>Qty: {order.cartItem.cartQty}</p>
                                    <div className="mt-2">
                                        <p className="mb-0" style={{color: '#ED881C', fontSize: 14, fontWeight: '500'}}>Status: <span style={{color: '#ED881C', fontWeight: 700, lineHeight: '20px'}}>
                                        {order.timeLine.length ? order.timeLine[order.timeLine.length - 1].status : ""}</span></p>
                                    </div>
                                 </div>
                            </div>
                        </div>

                          {/* order location  */}
                          <div className="mt-lg-4 mt-4 orderDetails" >

                            <div>
                                <p className="mb-0" style={{fontSize: 15, lineHeight: '25px'}}>Delivery Address: </p>
                                <p className="mb-0 mt-3" style={{fontSize: 15}}>Phone Number: </p>
                            </div>

                            <div className="ml-4 ml-lg-5">
                              <div className="">
                                    <p className="mb-0" style={{lineHeight: '25px', fontSize: 15}}>{order.billingDetails.address} {order.billingDetails.city} {order.billingDetails.state}</p>
                                    <p className="mb-0 mt-3" style={{fontSize: 15}}>{order.billingDetails.phone}</p>
                                  
                                 </div>
                            </div>
                        </div> 

                          {/* order timeline */}
                            <div className="mt-5 mt-lg-5">
                                    <h5>Order Timeline</h5>
                            </div>

                            {/* timeline flow layout */}
                            {timelineLayout}

                    </div>

                    <div className="col-lg-5">
                        
                        {/* order summary */}
                        <div className="mt-lg-4 mt-4" style={{background: ' rgba(196, 196, 196, 0.2)', borderRadius: '5px', padding: '30px 15px'}}>

                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <div>
                                    <p className="mb-0" style={{fontWeight: 500, fontSize: 14}}>Order Id</p>
                                </div>
                                <div>
                                   <p className="mb-0" style={{fontWeight: 500, fontSize: 14}}>{order.id}</p> 
                                </div>
                            </div>

                            <div>
                                <hr className="mt-4 mb-0" style={{borderTop: '1px solid rgba(196, 196, 196, 0.5)'}} />
                            </div>

                            <div className="mt-4" style={{display: 'flex', justifyContent: 'space-between'}}>
                                <div>
                                    <p className="mb-0" style={{fontSize: 14, lineHeight: '21px'}}>Date Ordered</p>
                                </div>
                                <div>
                                   <p className="mb-0" style={{fontWeight: 500, fontSize: 14,}}>
                                   <Moment className="ml-1" format="MMMM Do, YYYY">
                                            {order.createdAt}
                                        </Moment>
                                        </p> 
                                </div>
                            </div>

                            <div>
                                <hr className="mt-4 mb-0" style={{borderTop: '1px solid rgba(196, 196, 196, 0.5)'}} />
                            </div>

                            <div className="mt-4" style={{display: 'flex', justifyContent: 'space-between'}}>
                                <div>
                                    <p className="mb-0" style={{fontSize: 14, lineHeight: '21px'}}>Amount</p>
                                </div>
                                <div>
                                   <p className="mb-0" style={{fontWeight: 600}}>NGN {order.cartItem.productPrice}</p> 
                                </div>
                            </div>
                            

                            <div>
                                <hr className="mt-4 mb-0" style={{borderTop: '1px solid rgba(196, 196, 196, 0.5)'}} />
                            </div>

                            <div className="mt-4" style={{display: 'flex', justifyContent: 'space-between'}}>
                                <div>
                                    <p className="mb-0" style={{fontSize: 14, lineHeight: '21px'}}>Shipping Fee</p>
                                </div>
                                <div>
                                   <p className="mb-0" style={{fontWeight: 600}}>NGN {order.shippingFee}</p> 
                                </div>
                            </div>

                            <div>
                                <hr className="mt-4 mb-0" style={{borderTop: '1px solid rgba(196, 196, 196, 0.5)'}} />
                            </div>

                            <div className="mt-4" style={{display: 'flex', justifyContent: 'space-between'}}>
                                <div>
                                    <p className="mb-0" style={{fontSize: 14, lineHeight: '21px'}}>Payment Channel</p>
                                </div>
                                <div>
                                   <p className="mb-0" style={{fontWeight: 500, fontSize: 14,}}>Flutterwave</p> 
                                </div>
                            </div>

                            
                            <div>
                                <hr className="mt-4 mb-0" style={{borderTop: '1px solid rgba(196, 196, 196, 0.5)'}} />
                            </div>


                            <div className="mt-4" style={{display: 'flex', justifyContent: 'space-between'}}>
                                <div>
                                    <p className="mb-0" style={{fontWeight: 700}}>TOTAL PAID</p>
                                </div>
                                <div>
                                   <h6 className="mb-0" style={{fontWeight: 600, color: '#5B9223'}}>NGN {order.totalAmountPaid}</h6> 
                                </div>
                            </div>
                        </div>

                    </div>
            </div>

        </div>

        <div style={{marginTop: '300px'}}>
                <BuyerFooter />
            </div>

        </>
     );
}

const mapStateToProps = (state, ownProps) =>{
    const id = ownProps.match.params.id
    const orders = state.order.customerOrders
    const order = orders.find(val => val.id === id);
    return{
        order: order,
        auth: state.auth.isAuthenticated,
        timeline: order.timeLine
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{

    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(OrderDetails);