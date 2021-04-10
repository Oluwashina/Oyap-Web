import React, {useState, useEffect} from 'react';
import SideBar from '../../../components/SideBar';
import {FaBars } from 'react-icons/fa';
import './FarmersOrder.css'
import {connect} from 'react-redux'
import Moment from "react-moment";
import { confirmMyOrder } from '../../../store/actions/farmers';
import {useHistory} from 'react-router-dom'
import cogoToast from "cogo-toast";


const FarmersOrderDetails = (props) => {

    const {order, id, confirmNewOrder, loader, success, pickUpDetails} = props
   
    const [toggled, setToggled] = useState(false);
 
    const handleToggleSidebar = (value) => {
      setToggled(value);
    };

    const history = useHistory()

    //   tab layout
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

    //   confirm an order
    const confirmOrder = (id) =>{
        // check if the farmer has updated a pickup details else he should update before confirming
        if(!pickUpDetails.address){
            cogoToast.warn('Update your pickup address on your profile!')
        }
        else{   
          confirmNewOrder(id)
        }
    }

    useEffect(() =>{
        if(success){
            history.push("/farmers/confirmedorder");
        } 
    }, [success, history])



    return (  
        <div className='app'>
         <SideBar
        
         toggled={toggled}
         handleToggleSidebar={handleToggleSidebar}
          />

        <main>
            <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
                <FaBars />
            </div>
            
            {/* content of page  layout*/}
            <header>

                <div className="mt-lg-1 mt-4">
                    <h5 style={{fontWeight: 'bold'}}>Order details</h5>
                </div>

             <div 
              className={!pickUpDetails.address ? "alert alert-warning mt-lg-4 mt-4" : "no-title"}
             role="alert">
              Kindly update your pickup address before confirming this order!
            </div>

            {/* details */}
            <div className="row mt-lg-0 mt-1">
                    <div className="col-lg-6 mb-4">

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

                    <div className="col-lg-6">
                        
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

                        {/* cancel and confirm order div for a new order */}
                        { order.orderStatus === 'new'
                         ?
                        <div className="mt-lg-4 mt-4" style={{background: ' rgba(196, 196, 196, 0.2)', borderRadius: '5px', padding: '30px 15px'}}>

                            <div className="text-center mt-2">
                                <h6>Click here to confirm when order is ready for 
                                    pick up by delivery company</h6>
                            </div>

                            <div className="mt-4" style={{display: 'flex', justifyContent: 'space-between'}}>
                                <div>
                                <button className="btn btn-cancel" disabled >Cancel Order</button>
                                </div>

                                <div>
                                <button
                                 disabled={loader}
                                 className="btn btn-confirm" onClick={() =>confirmOrder(id)} >Confirm Order</button>
                                </div>
                            </div>

                        </div>
                        :
                        ""
                        }

                    </div>
            </div>

            </header>
        
            
        </main>
          
     </div>
     );
}

const mapStateToProps = (state, ownProps) =>{
    const id = ownProps.match.params.id
    return{
        order: state.farmers.orderDetails,
        auth: state.auth.isAuthenticated,
        id: id,
        loader: state.farmers.confirmloader,
        success: state.farmers.success,
        pickUpDetails: state.auth.pickUpDetails
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        confirmNewOrder: (id) => dispatch(confirmMyOrder(id)),
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(FarmersOrderDetails);