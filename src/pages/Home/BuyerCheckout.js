import React, { useState, useEffect } from "react";
import BuyerFooter from "../../components/BuyerFooter";
import BuyerNav from "../../components/BuyerNavbar";
// import OrderBillingDetails from "../../components/Order/OrderBillingDetails";
import OrderSummary from "../../components/Order/OrderSummary";
import { connect } from "react-redux";
import {Link} from 'react-router-dom'


const Checkout = (props) => {
  const { cartItems, firstname, lastname, phoneNumber, billingDetails } = props;

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let price = 0;

    cartItems.forEach((item) => {
      price += item.cartQty * item.productprice;
    });

    setTotalPrice(price);
  }, [cartItems, totalPrice, setTotalPrice]);


  const handleOrderDataSubmit = (values) => {    
    console.log(values);
  };
  return (
    <>
      <BuyerNav />

      {/* breadcrumbs */}
      <div style={{ background: " rgba(196, 196, 196, 0.2)", padding: "10px" }}>
        <div className="container">
          <p className="mb-0" style={{ fontSize: 14 }}>
            <span style={{ color: "#7BC30A", fontSize: 14 }}>Home</span>
            /Checkout
          </p>
        </div>
      </div>

      {/* checkout details or summary layout */}
      <div className="container">
        <div className="text-center mt-lg-5 mt-4">
          <h5 style={{ fontWeight: "bold" }}>CHECKOUT</h5>
        </div>


        <div className="row mt-lg-5 mt-4">
          <div className="col-lg-7 mb-lg-5 mb-4">
            <div>
              <h6 style={{ fontWeight: "bold" }}>Billing Details</h6>
            </div>

            <div 
              className={!billingDetails.address ? "alert alert-warning mt-lg-4 mt-4" : "no-title"}
             role="alert">
              Billing details update required!!!
            </div>

            {/* billing form details */}
            <div
            className="mt-lg-4 mt-4"
            style={{
              background: " rgba(196, 196, 196, 0.2)",
              borderRadius: "5px",
              padding: "30px 15px",
            }}
          >

        <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <p className="mb-0" style={{ fontWeight: 600 }}>
                    Address Details
                  </p>
                </div>
                <div>
                  <Link to="/customer/account" className="mb-0" style={{ fontWeight: 600, color:'#ED881C', cursor: 'pointer', textDecoration: 'none' }}>
                    CHANGE
                  </Link>
                </div>
          </div>

          
        <div>
          <hr
            className="mt-4 mb-0"
            style={{ borderTop: "1px solid rgba(196, 196, 196, 0.5)" }}
          />
        </div>

        <div className="mt-3">
          {/* name */}
          <p
              className="mb-0"
              style={{lineHeight: '23px', fontWeight: 600}}
              >
                {firstname} {lastname}
              </p>

          {/* address */}
          <p
            className="mb-0 mt-1"
            style={{lineHeight: '23px'}}
            >
              {!billingDetails.address ?
               <span style={{color: 'red', fontStyle: 'italic'}}>Kindly update your billing address</span>
                : `${billingDetails.address},`}  {!billingDetails.city ? "" : billingDetails.city} {!billingDetails.state ? "" : billingDetails.state}
            </p>
            {/* phone */}
            <p
            className="mb-0 mt-1"
            style={{lineHeight: '23px'}}
            >
              {phoneNumber}
            </p>
        </div>

        </div>
            {/* <OrderBillingDetails
              handleOrderDataChange={handleChange}
              handleBlur={handleBlur}
              touched={touched}
              errors={errors}
              values={values}
            /> */}
          </div>
          <div className="col-lg-5 mb-5">
            <h6 style={{ fontWeight: "bold" }}>Your Order</h6>

            {/* order summary */}
            <OrderSummary
             handleOrder={handleOrderDataSubmit}
               />
          </div>
        </div>
      </div>
          
      <div style={{marginTop: '200px'}}>
                <BuyerFooter />
       </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart.cartItems,
    firstname: state.auth.firstname,
    lastname: state.auth.lastname,
    billingDetails: state.auth.billingDetails,
    phoneNumber: state.auth.phoneNumber
  };
};

export default connect(mapStateToProps)(Checkout);
