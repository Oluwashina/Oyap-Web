import React, {useState} from 'react';
import SideBar from '../../../components/SideBar';
import {FaBars } from 'react-icons/fa';
import {connect} from 'react-redux'
import Moment from "react-moment";


const FarmersCreditTransactions = (props) => {

    const {transaction} = props

    console.log(transaction)
   
    const [toggled, setToggled] = useState(false);
 
    const handleToggleSidebar = (value) => {
      setToggled(value);
    };
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
                    <h5 style={{fontWeight: 'bold'}}>Transaction Details</h5>
                </div>

                {/* details */}
                <div className="row mt-lg-0 mt-1">

                        {
                            transaction && transaction.hasOwnProperty("productDetails") ?
                                
                                <div className="col-lg-7 mb-4">

                                <div className="mt-lg-4 mt-4">
                                    <h6 style={{fontWeight: 'bold'}}>Payed for</h6>
                                </div>

                            {/* order details */}
                            <div className=" orderDetails" >

                                <div>
                                    <img src={transaction.productDetails.cartItem.productImages[0]} alt="cart" className="cartImage" />
                                </div>

                                <div className="ml-4 ml-lg-5">
                                <div className="">
                                        <p className="mb-0 mt-0 mt-lg-4" style={{fontWeight: 'bold', lineHeight: '25px'}}>{transaction.productDetails.cartItem.productName}</p>
                                        <p className="mb-0 mt-2" style={{fontSize: 14}}>Qty: {transaction.productDetails.cartItem.cartQty}</p>
                                        <div className="mt-2">
                                            <p className="mb-0" style={{color: '#ED881C', fontSize: 14, fontWeight: '500'}}>Status: <span style={{color: '#ED881C', fontWeight: 700, lineHeight: '20px'}}>
                                            {transaction.status}</span></p>
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
                                        <p className="mb-0" style={{lineHeight: '25px', fontSize: 15}}>{transaction.productDetails.billingDetails.address} {transaction.productDetails.billingDetails.state}</p>
                                        <p className="mb-0 mt-3" style={{fontSize: 15}}>{transaction.productDetails.billingDetails.phone}</p>
                                    
                                    </div>
                                </div>
                            </div> 

                            

                        </div>
                        :
                        <>
                         <div className="col-lg-6">

                            <div className="mt-lg-4 mt-4">
                                <h6 style={{fontWeight: 'bold'}}>Payment Summary</h6>
                            </div>

                          {/* order summary */}
                          <div className="" style={{background: ' rgba(196, 196, 196, 0.2)', borderRadius: '5px', padding: '30px 15px'}}>

                          <div style={{display: 'flex', justifyContent: 'space-between'}}>
                              <div>
                                  <p className="mb-0" style={{fontWeight: 500, fontSize: 14}}>Transaction Id</p>
                              </div>
                              <div>
                                 <p className="mb-0" style={{fontWeight: 500, fontSize: 14}}>{transaction.id}</p> 
                              </div>
                          </div>

                          <div>
                              <hr className="mt-4 mb-0" style={{borderTop: '1px solid rgba(196, 196, 196, 0.5)'}} />
                          </div>

                          <div className="mt-4" style={{display: 'flex', justifyContent: 'space-between'}}>
                              <div>
                                  <p className="mb-0" style={{fontSize: 14, lineHeight: '21px'}}>Date Requested</p>
                              </div>
                              <div>
                                 <p className="mb-0" style={{fontWeight: 500, fontSize: 14,}}>
                                  <Moment format="MMMM Do, YYYY">
                                              {transaction.createdAt}
                                      </Moment>
                                     </p> 
                              </div>
                          </div>

                          <div>
                              <hr className="mt-4 mb-0" style={{borderTop: '1px solid rgba(196, 196, 196, 0.5)'}} />
                          </div>

                          <div className="mt-4" style={{display: 'flex', justifyContent: 'space-between'}}>
                              <div>
                                  <p className="mb-0" style={{fontSize: 14, lineHeight: '21px'}}>Status</p>
                              </div>
                              <div>
                                 <p 
                                 style={ { color: transaction.status.includes('P') ? '#FF0000' : '#5B9223', fontWeight: 500, fontSize: 14} } 
                                 className="mb-0">
                                   {transaction.status}
                                     </p> 
                              </div>
                          </div>

                          <div>
                              <hr className="mt-4 mb-0" style={{borderTop: '1px solid rgba(196, 196, 196, 0.5)'}} />
                          </div>

                          <div className="mt-4" style={{display: 'flex', justifyContent: 'space-between'}}>
                              <div>
                                  <p className="mb-0" style={{fontSize: 14, lineHeight: '21px'}}>Account No</p>
                              </div>
                              <div>
                                 <p className="mb-0">{transaction.accountNumber}</p> 
                              </div>
                          </div>
                          

                          <div>
                              <hr className="mt-4 mb-0" style={{borderTop: '1px solid rgba(196, 196, 196, 0.5)'}} />
                          </div>

                          <div className="mt-4" style={{display: 'flex', justifyContent: 'space-between'}}>
                              <div>
                                  <p className="mb-0" style={{fontSize: 14, lineHeight: '21px'}}>Bank</p>
                              </div>
                              <div>
                                 <p className="mb-0">{transaction.bankName}</p> 
                              </div>
                          </div>

                          <div>
                              <hr className="mt-4 mb-0" style={{borderTop: '1px solid rgba(196, 196, 196, 0.5)'}} />
                          </div>

                          <div className="mt-4" style={{display: 'flex', justifyContent: 'space-between'}}>
                              <div>
                                  <p className="mb-0" style={{fontSize: 14, lineHeight: '21px'}}>Account Name</p>
                              </div>
                              <div>
                                 <p className="mb-0" style={{fontWeight: 500, fontSize: 14,}}>{transaction.accountName}</p> 
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
                                 <p className="mb-0" style={{fontWeight: 600, fontSize: 14,}}>NGN {transaction.amount}</p> 
                              </div>
                          </div>

                          <div>
                              <hr className="mt-4 mb-0" style={{borderTop: '1px solid rgba(196, 196, 196, 0.5)'}} />
                          </div>

                          <div className="mt-4" style={{display: 'flex', justifyContent: 'space-between'}}>
                              <div>
                                  <p className="mb-0" style={{fontSize: 14, lineHeight: '21px'}}>Narration</p>
                              </div>
                              <div>
                                 <p className="mb-0" style={{fontWeight: 500, fontSize: 14,}}>{transaction.narration}</p> 
                              </div>
                          </div>

                          
                          <div>
                              <hr className="mt-4 mb-0" style={{borderTop: '1px solid rgba(196, 196, 196, 0.5)'}} />
                          </div>


                          <div className="mt-4" style={{display: 'flex', justifyContent: 'space-between'}}>
                              <div>
                                  <p className="mb-0" style={{fontWeight: 700}}>TOTAL DEBIT</p>
                              </div>
                              <div>
                                 <h6 className="mb-0" style={{fontWeight: 600, color: '#5B9223'}}>NGN {transaction.amount}</h6> 
                              </div>
                          </div>
                      </div>
                      </div>
                      </>
                    
                     }

                    {
                       transaction && transaction.hasOwnProperty("productDetails") ?
                       <div className="col-lg-5">

                       <div className="mt-lg-4 mt-4">
                              <h6 style={{fontWeight: 'bold'}}>Payment Summary</h6>
                          </div>

                      {/* order summary */}
                      <div className="" style={{background: ' rgba(196, 196, 196, 0.2)', borderRadius: '5px', padding: '30px 15px'}}>

                          <div style={{display: 'flex', justifyContent: 'space-between'}}>
                              <div>
                                  <p className="mb-0" style={{fontWeight: 500, fontSize: 14}}>Order Id</p>
                              </div>
                              <div>
                                 <p className="mb-0" style={{fontWeight: 500, fontSize: 14}}>{transaction.orderId}</p> 
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
                                 <Moment format="MMMM Do, YYYY">
                                          {transaction.createdAt}
                                  </Moment></p> 
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
                                 <p className="mb-0" style={{fontWeight: 600}}>NGN {transaction.productDetails.cartItem.productPrice}</p> 
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
                                 <p className="mb-0" style={{fontWeight: 600}}>NGN {transaction.productDetails.shippingFee}</p> 
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
                                  <p className="mb-0" style={{fontWeight: 700}}>TOTAL CREDIT</p>
                              </div>
                              <div>
                                 <h6 className="mb-0" style={{fontWeight: 600, color: '#5B9223'}}>NGN {transaction.productDetails.subTotal}</h6> 
                              </div>
                          </div>
                      </div>

                    </div>
                    :
                    ""
                    }
                  

            </div>

             </header>
        
            
        </main>
          
     </div>
     );
}

const mapStateToProps = (state, ownProps) =>{
    let id = ownProps.match.params.id
    const transactions = state.farmers.transactions
    const transaction = transactions.find(val => val.id === id);
    return{
        transaction:  transaction,
        id: id
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{

    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(FarmersCreditTransactions);