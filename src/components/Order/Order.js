import React, {useState} from "react";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import {connect} from 'react-redux'
import { CreateOrder } from "../../store/actions/orders";

import { useHistory } from "react-router-dom";

const Payment = ({
  handleDisabled,
  amount,
  shippingFee,
  billingDetails,
  firstname,
  lastname,
  phonenumber,
  email,
  postOrder, 
}) => {

  let history = useHistory()

  const getCode = () =>{
    var numbers = "0123456789";
    var chars= "abcdefghijklmnopqrstuvwxyz";
  
    var code_length = 6;
    var number_count = 3;
    var letter_count = 3;
  
    var code = '';
  
    for(var i=0; i < code_length; i++) {
       var letterOrNumber = Math.floor(Math.random() * 2);
       if((letterOrNumber === 0 || number_count === 0) && letter_count > 0) {
          letter_count--;
          var rnum = Math.floor(Math.random() * chars.length);
          code += chars[rnum];
       }
       else {
          number_count--;
          var rnum2 = Math.floor(Math.random() * numbers.length);
          code += numbers[rnum2];
       }
    }
    return code
  }

  const config = {
    public_key: process.env.REACT_APP_FLUTTERWAVE_PUBLIC_KEY,
    tx_ref: Date.now() + "-" + getCode(),
    amount: amount,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: email,
      phonenumber: phonenumber,
      name: firstname + " " + lastname,
    },
    customizations: {
      title: "AGRIMART",
      description: "Payment for items in cart",
      logo:
        "https://res.cloudinary.com/dmnghlyic/image/upload/v1614692628/PurpleGoldImages/ztmlbnjddj8bzc5w0ph2.png",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  
  const [modalShow, setModalShow] = useState(false);

  const handleOrderProceed = () =>{
    setModalShow(modalShow ? false : true)
    history.push("/orders");
  }

  return (
    <>

    {/* modal show */}
  <div 
    className={ modalShow ? "modal fade show" : "modal fade" }
    data-backdrop="static"
     id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content" style={{background: '#fff', borderRadius: '10px'}} >
          <div className="" style={{padding: '20px 30px'}}>
            <h5 className="modal-title" id="exampleModalLabel">Order Placed</h5>
          </div>
          <div style={{padding: '2px 30px', lineHeight: '25px'}}>
          Your order has been placed successfully. 
        you can track your order in the orders page
          </div>
          <div className="mt-2" style={{display: 'flex', justifyContent: 'flex-end', padding: '15px 20px'}} >
           <button type="button" 
            onClick={handleOrderProceed}
            id="shutServer" className="btn btn-oyap">OK</button>
        </div>
          
        </div>
      </div>
      </div>

      <button
        className="btn btn-place btn-block mt-4"
        disabled={
          handleDisabled.length === 0 || !billingDetails.address
        }
        onClick={() => {
          handleFlutterPayment({
            callback: (response) => {              
              // handleOrder(customerDetails);
              console.log(response)
              closePaymentModal(); // this will close the modal programmatically
              
              // redirect to a success or failed page based on response / show dialog
              setModalShow(modalShow ? false : true)
              
              // make an API call to backend for products paid for and all
              postOrder(response, shippingFee, amount)

            },
            onClose: () => {},
          });
        }}
      >
        Place Order
      </button>
    </>
  );
};

const mapStateToProps = (state) =>{
  return{
    firstname: state.auth.firstname,
    lastname: state.auth.lastname,
    phonenumber: state.auth.phoneNumber,
    email: state.auth.email
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    postOrder: (response, shippingFee, amount) => dispatch(CreateOrder(response, shippingFee, amount))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Payment);
