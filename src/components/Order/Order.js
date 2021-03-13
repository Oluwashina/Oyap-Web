import React, { useState, useEffect } from "react";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";

const Payment = ({
  handleOrder,
  handleDisabled,
  amount,
  customerDetails,
  errors,
}) => {
  const config = {
    public_key: process.env.REACT_APP_FLUTTERWAVE_PUBLIC_KEY,
    tx_ref: Date.now(),
    amount: amount,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: "user@gmail.com",
      phonenumber: "07064586146",
      name: "joel ugwumadu",
    },
    customizations: {
      title: "OYAP Payment",
      description: "Payment for items in cart",
      logo:
        "https://res.cloudinary.com/dmnghlyic/image/upload/v1614692628/PurpleGoldImages/ztmlbnjddj8bzc5w0ph2.png",
    },
  };

  const [error, setError] = useState(null);

  // function isNotEmpty(obj) {
  //   return Object.keys(obj).length === 0;
  // }

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      setError(errors);
    }
  }, [errors]);

  // const isEmpty = Object.values(customerDetails).every(
  //   (customerInfo) => customerInfo === null || customerInfo === ""
  // );

  const handleFlutterPayment = useFlutterwave(config);

  return (
    <>
      <button
        className="btn btn-place btn-block mt-4"
        disabled={
          handleDisabled.length === 0 || error ? true : false
        }
        onClick={() => {
          handleFlutterPayment({
            callback: (response) => {
              console.log(response);
              handleOrder(customerDetails);
              closePaymentModal(); // this will close the modal programmatically
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

export default Payment;
