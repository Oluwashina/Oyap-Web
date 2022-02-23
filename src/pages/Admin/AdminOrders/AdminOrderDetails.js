import React, {useState, useEffect} from 'react';
import {FaBars } from 'react-icons/fa';
import AdminSidebar from '../../../components/AdminSidebar';
import {connect} from 'react-redux'
import Moment from 'react-moment'
import {Form, Formik} from 'formik'
import {cancelOrderValidator} from '../../../validationSchema/validator'
import { CancelAdminOrder, clearCancelStatus, completeOrderRequest, dispatchOrderRequest } from '../../../store/actions/admin';
import {useHistory} from 'react-router-dom'
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";


const AdminOrderDetails = (props) => {

    const {order, cancelOrder, order_cancelled, clearCancel, dispatchOrder, orderloader, completeOrder} = props

    const history = useHistory()

    const [toggled, setToggled] = useState(false);

    const handleToggleSidebar = (value) => {
        setToggled(value);
      };

      const id = props.match.params.id

      //   timeline layout
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

    const handleSubmit = async (values) =>{
        await cancelOrder(values, id);
    }

    useEffect(() =>{
        if(order_cancelled){
         history.push('/admin/orders')
         clearCancel()
        } 
    }, [order_cancelled, history, clearCancel])

    const handleOrderRequest = () =>{
        confirmAlert({
            title: "Confirm to submit",
            message: `You are about to dispatch this order, Do you wish to continue?`,
            buttons: [
              {
                label: "Yes",
                onClick: () => confirmDispatch(),
              },
              {
                label: "No",
              },
            ],
          });
    }

    const handleCompleteRequest = () =>{
        confirmAlert({
            title: "Confirm to submit",
            message: `You are about to complete the delivery of this order, Do you wish to continue?`,
            buttons: [
              {
                label: "Yes",
                onClick: () => confirmDelivery(),
              },
              {
                label: "No",
              },
            ],
          });
    }


    const confirmDispatch = () =>{
        dispatchOrder(id)

        setTimeout(()=>{
            history.push('/admin/orders')
        }, 3000)
    }


    const confirmDelivery = () =>{
        completeOrder(id)

        setTimeout(()=>{
            history.push('/admin/orders')
        }, 3000) 
    }

    return ( 
        <>
            <div className="app">
             <AdminSidebar
                
                toggled={toggled}
                handleToggleSidebar={handleToggleSidebar}
                />

            <main>
                <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
                    <FaBars />
                </div>
            

              {/* content of page  layout*/}
              <h5 className="mb-3 mt-3 mt-lg-0" style={{fontWeight: 'bold'}}>Order Details</h5>
              <header> 

                  
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
                                    <p className="mb-0 mt-0 mt-lg-4" style={{fontWeight: 'bold', lineHeight: '25px'}}>Corn</p>
                                    <p className="mb-0 mt-2" style={{fontSize: 14}}>Qty: {order.cartItem.cartQty}</p>
                                    <div className="mt-2">
                                        <p className="mb-0" style={{color: '#ED881C', fontSize: 14, fontWeight: '500'}}>Status: <span style={{color: '#ED881C', fontWeight: 700, lineHeight: '20px'}}>
                                        {order.timeLine.length ? order.timeLine[order.timeLine.length - 1].status : ""} </span></p>
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

                        {/* supplied info */}
                        <div className="mt-lg-4 mt-4 orderDetails" >

                            <div>
                                <p className="mb-0" style={{fontSize: 15, lineHeight: '25px'}}>Supplied by: </p>
                                <p className="mb-0 mt-3" style={{fontSize: 15}}>Phone Number: </p>
                            </div>

                            <div className="ml-4 ml-lg-5">
                              <div className="">
                                    <p className="mb-0" style={{lineHeight: '25px', fontSize: 15, color:'#7BC30A'}}>{order.cartItem.sellerFirstName} {order.cartItem.sellerLastName}</p>
                                    <p className="mb-0 mt-3" style={{fontSize: 15}}>{order.cartItem.sellerphoneNumber}</p>
                                  
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
                                   <p className="mb-0" style={{fontWeight: 500, fontSize: 14}}>
                                   {order.id}</p> 
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
                        {
                            order.status === "Completed" || order.status === "Cancelled" ?
                            ""
                            :
                            <div className="mt-lg-4 mt-4" style={{background: ' rgba(196, 196, 196, 0.2)', borderRadius: '5px', padding: '30px 15px'}}>

                            <div className="text-center mt-2">
                                <h6>Click here to cancel this order for any reason</h6>
                            </div>

                            {/* reason for cancellation input */}
                            <Formik
                                onSubmit={(values, {setSubmitting}) =>
                                    handleSubmit(values, setSubmitting)
                                    }
                                validationSchema={cancelOrderValidator}
                                initialValues={{reason: ""}}
                            >
                                {({
                                    handleChange,
                                    isSubmitting,
                                    handleSubmit,
                                    handleBlur,
                                    values,
                                    touched,
                                    errors
                                })=>(
                                    <Form onSubmit={handleSubmit}>

                                     <div className="form-group mt-4">
                                        <label htmlFor="reason">Reason for cancellation</label>
                                        <textarea className="form-control input-style mt-1"
                                        id="reason"
                                        rows="4"
                                        value={values.reason}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        style={{resize: 'none'}}
                                        
                                        placeholder="" />

                                    <small style={{ color: "#dc3545" }}>
                                         {touched.reason && errors.reason}
                                    </small>
                                        
                                    </div>
                                    
                                    <div className="text-center">
                                        <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="btn btn-cancel mt-4 mr-4">Cancel Order</button>

                                    {
                                        order.timeLine.length === 2 &&
                                        <p  
                                        onClick={() => handleOrderRequest()}
                                        className={
                                            orderloader ? 
                                            "btn btn-oyap mt-4 mb-0 disabled": "btn btn-oyap mt-4 mb-0"
                                        }
                                       >Dispatch Order</p>
                                    }

                                    {
                                        order.timeLine.length === 3 &&
                                        <p  
                                        onClick={() => handleCompleteRequest()}
                                        className={
                                            orderloader ? 
                                            "btn btn-oyap mt-4 mb-0 disabled": "btn btn-oyap mt-4 mb-0"
                                        }
                                       >Complete Order</p>
                                    }
                                       

                                    </div>
                                       
                                            
                                    </Form>
                                )}

                            </Formik>

                        </div>
                        }
                        
         

                    </div>
            </div>

             </header>
            </main>

        </div>
        </>
     );
}


const mapStateToProps = (state) =>{
    return{
        auth: state.auth.isAuthenticated,
        order: state.admin.order,
        order_cancelled: state.admin.order_cancelled,
        orderloader: state.admin.orderLoader
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        cancelOrder: (creds, id) => dispatch(CancelAdminOrder(creds, id)),
        clearCancel: () => dispatch(clearCancelStatus()),
        dispatchOrder: (id) => dispatch(dispatchOrderRequest(id)),
        completeOrder: (id) => dispatch(completeOrderRequest(id)),
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(AdminOrderDetails);