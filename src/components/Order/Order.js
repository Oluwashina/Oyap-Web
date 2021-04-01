import React from "react";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";

const Payment = ({
  handleOrder,
  handleDisabled,
  amount,
  customerDetails,
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



  const handleFlutterPayment = useFlutterwave(config);

  return (
    <>
      <button
        className="btn btn-place btn-block mt-4"
        disabled={
          handleDisabled.length === 0
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
