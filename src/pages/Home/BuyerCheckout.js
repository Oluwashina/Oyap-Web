import React from 'react';
import BuyerFooter from '../../components/BuyerFooter';
import BuyerNav from '../../components/BuyerNavbar';

const Checkout = () => {
    return ( 
        <>  

        <BuyerNav />

           {/* breadcrumbs */}
           <div style={{background: ' rgba(196, 196, 196, 0.2)', padding: '10px'}}> 
                <div className="container">
                     <p className="mb-0"><span style={{color: '#7BC30A'}}>Home/View All/Vegetables</span>/Checkout</p>
                </div>
            </div>

            {/* checkout details or summary layout */}
            <div className="container">

                <div className="text-center mt-lg-5 mt-4">
                 <h5 style={{fontWeight: 'bold'}}>CHECKOUT</h5>
                </div>

                <div className="row mt-lg-5 mt-4">
                    <div className="col-lg-7 mb-lg-5 mb-4">

                        <div>
                        <h6  style={{fontWeight: 'bold'}}>Billing Details</h6>
                        </div>

                        {/* billing form details */}

                        {/* first name */}
                        <div className="form-group mt-4 mt-lg-4">
                            <label htmlFor="email">First name</label>
                            <input
                              className="form-control input-style"
                              placeholder="First name"
                              type="text"
                              id="email"
                            />
                          </div>

                          {/* last name */}
                          <div className="form-group mt-4">
                            <label htmlFor="email">Last name</label>
                            <input
                              className="form-control input-style"
                              placeholder="Last name"
                              type="text"
                              id="email"
                            />
                          </div>

                        {/* store name */}
                          <div className="form-group mt-4">
                            <label htmlFor="email">Store Name (Optional)</label>
                            <input
                              className="form-control input-style"
                              placeholder=""
                              type="text"
                              id="email"
                            />
                          </div>

                          {/* state */}
                          <div className="form-group mt-4">
                            <label htmlFor="email">State</label>
                            <input
                              className="form-control input-style"
                              placeholder=""
                              type="text"
                              id="email"
                            />
                          </div>

                          {/* city */}
                          <div className="form-group mt-4">
                            <label htmlFor="email">City</label>
                            <input
                              className="form-control input-style"
                              placeholder=""
                              type="text"
                              id="email"
                            />
                          </div>

                          {/* Street Address */}
                          <div className="form-group mt-4">
                            <label htmlFor="email">Street Address</label>
                            <input
                              className="form-control input-style"
                              placeholder=""
                              type="text"
                              id="email"
                            />
                          </div>

                          {/* phone number */}
                          <div className="form-group mt-4">
                            <label htmlFor="email">Phone Number</label>
                            <input
                              className="form-control input-style"
                              placeholder=""
                              type="text"
                              id="email"
                            />
                          </div>

                          {/* Additional phone number */}
                          <div className="form-group mt-4">
                            <label htmlFor="email">Additional phone number</label>
                            <input
                              className="form-control input-style"
                              placeholder=""
                              type="text"
                              id="email"
                            />
                          </div>

                          {/* order notes */}
                          <div className="form-group mt-4">
                            <label htmlFor="email">Order notes (Optional)</label>
                            <input
                              className="form-control input-style"
                              placeholder=""
                              type="text"
                              id="email"
                            />
                          </div>
                        

                    </div>
                    <div className="col-lg-5 mb-5">
                        <h6  style={{fontWeight: 'bold'}}>Your Order</h6>

                        {/* order summary */}
                        <div className="mt-lg-5 mt-4" style={{background: ' rgba(196, 196, 196, 0.2)', borderRadius: '5px', padding: '30px 15px'}}>

                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <div>
                                    <p className="mb-0" style={{fontWeight: 600}}>Product</p>
                                </div>
                                <div>
                                   <p className="mb-0" style={{fontWeight: 600}}>Sub Total</p> 
                                </div>
                            </div>

                            <div>
                                <hr className="mt-4" style={{borderTop: '1px solid rgba(196, 196, 196, 0.5)'}} />
                            </div>

                            <div className="mt-2" style={{display: 'flex', justifyContent: 'space-between'}}>
                                <div>
                                    <p className="mb-0" style={{fontSize: 14, width: '70%', lineHeight: '21px'}}>1 truck load of nigerian grade alligator pepper</p>
                                </div>
                                <div>
                                   <p className="mb-0" style={{fontWeight: 600}}>NGN 40,000</p> 
                                </div>
                            </div>

                            <div>
                                <hr className="mt-4" style={{borderTop: '1px solid rgba(196, 196, 196, 0.5)'}} />
                            </div>

                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <div>
                                    <p className="mb-0" style={{fontSize: 14, width: '50%', lineHeight: '21px'}}>Shipping Paid</p>
                                </div>
                                <div>
                                   <p className="mb-0" style={{fontWeight: 600}}>NGN 2,000</p> 
                                </div>
                            </div>

                            <div>
                                <hr className="mt-4" style={{borderTop: '1px solid rgba(196, 196, 196, 0.5)'}} />
                            </div>

                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <div>
                                    <p className="mb-0" style={{fontWeight: 700}}>TOTAL</p>
                                </div>
                                <div>
                                   <h6 className="mb-0" style={{fontWeight: 600, color: '#5B9223'}}>NGN 42,000</h6> 
                                </div>
                            </div>
                        </div>

                        {/* place order button */}
                        <div className="mt-4">
                        <button className="btn btn-buy btn-block mt-4">Place Order</button>
                            </div>

                    </div>
                </div>

            </div>

            <BuyerFooter />

        </>
     );
}
 
export default Checkout;