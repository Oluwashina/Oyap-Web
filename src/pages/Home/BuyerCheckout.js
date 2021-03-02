import React, { useState, useEffect } from "react";
import BuyerFooter from "../../components/BuyerFooter";
import BuyerNav from "../../components/BuyerNavbar";
import OrderBillingDetails from "../../components/Order/OrderBillingDetails"
import OrderSummary from "../../components/Order/OrderSummary"
import {connect} from 'react-redux'

const Checkout = (props) => {

  const {cartItems} = props

  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() =>{
      let price = 0;

      cartItems.forEach(item =>{
          price += item.cartQty * item.price
      })

      setTotalPrice(price)
  }, [cartItems, totalPrice, setTotalPrice])

  
  const [ orderData, setOrderData ] = useState({
    firstName: "",
    lastName: "",
    store: "",
    state: "",
    city: "",
    street: "",
    phone1: "",
    phone2: "",
    orderNotes: "",
  });
  // const [ products, setProducts ] = useState([])
  const handleOrderDataChange = (e) => {
    const { id, value } = e.target;

    setOrderData((prevState) => {
      return {
        ...prevState,
        [id]: value,
      };
    });
  };

  const handleOrderDataSubmit = () => {    
    console.log(orderData);
  };
  return (
    <>
      <BuyerNav />

      {/* breadcrumbs */}
      <div style={{ background: " rgba(196, 196, 196, 0.2)", padding: "10px" }}>
        <div className="container">
          <p className="mb-0" style={{fontSize: 14}}>
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

            {/* billing form details */}
            <OrderBillingDetails handleOrderDataChange={handleOrderDataChange} />                         
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

      <BuyerFooter />
    </>
  );
};

const mapStateToProps = (state) =>{
  return{
      cartItems: state.cart.cartItems,
  }
}

export default connect(mapStateToProps)(Checkout);
