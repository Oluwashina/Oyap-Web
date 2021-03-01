import React, { useState } from "react";
import BuyerFooter from "../../components/BuyerFooter";
import BuyerNav from "../../components/BuyerNavbar";

const Checkout = () => {
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
  const [ products, setProducts ] = useState([])
  const handleOrderDataChange = (e) => {
    const { id, value } = e.target;

    setOrderData((prevState) => {
      return {
        ...prevState,
        [id]: value,
      };
    });
  };

  const handleOrderDataSubmit = (e) => {
    e.preventDefault();
    console.log(orderData);
  };
  return (
    <>
      <BuyerNav />

      {/* breadcrumbs */}
      <div style={{ background: " rgba(196, 196, 196, 0.2)", padding: "10px" }}>
        <div className="container">
          <p className="mb-0">
            <span style={{ color: "#7BC30A" }}>Home/View All/Vegetables</span>
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

            
              {/* first name */}
              <div className="form-group mt-4 mt-lg-4">
                <label htmlFor="email">First name</label>
                <input
                  className="form-control input-style"
                  onChange={handleOrderDataChange}
                  placeholder="First name"
                  type="text"
                  id="firstName"
                />
              </div>

              {/* last name */}
              <div className="form-group mt-4">
                <label htmlFor="lastName">Last name</label>
                <input
                  className="form-control input-style"
                  onChange={handleOrderDataChange}
                  placeholder="Last name"
                  type="text"
                  id="lastName"
                />
              </div>

              {/* store name */}
              <div className="form-group mt-4">
                <label htmlFor="email">Store Name (Optional)</label>
                <input
                  className="form-control input-style"
                  onChange={handleOrderDataChange}
                  placeholder=""
                  type="text"
                  id="store"
                />
              </div>

              {/* state */}
              <div className="form-group mt-4">
                <label htmlFor="state">State</label>
                <input
                  className="form-control input-style"
                  onChange={handleOrderDataChange}
                  placeholder=""
                  type="text"
                  id="state"
                />
              </div>

              {/* city */}
              <div className="form-group mt-4">
                <label htmlFor="city">City</label>
                <input
                  className="form-control input-style"
                  onChange={handleOrderDataChange}
                  placeholder=""
                  type="text"
                  id="city"
                />
              </div>

              {/* Street Address */}
              <div className="form-group mt-4">
                <label htmlFor="street">Street Address</label>
                <input
                  className="form-control input-style"
                  onChange={handleOrderDataChange}
                  placeholder=""
                  type="text"
                  id="street"
                />
              </div>

              {/* phone number */}
              <div className="form-group mt-4">
                <label htmlFor="phone1">Phone Number</label>
                <input
                  className="form-control input-style"
                  onChange={handleOrderDataChange}
                  placeholder=""
                  type="text"
                  id="phone1"
                />
              </div>

              {/* Additional phone number */}
              <div className="form-group mt-4">
                <label htmlFor="phone2">Additional phone number</label>
                <input
                  className="form-control input-style"
                  onChange={handleOrderDataChange}
                  placeholder=""
                  type="text"
                  id="phone2"
                />
              </div>

              {/* order notes */}
              <div className="form-group mt-4">
                <label htmlFor="orderNotes">Order notes (Optional)</label>
                <input
                  className="form-control input-style"
                  onChange={handleOrderDataChange}
                  placeholder=""
                  type="text"
                  id="orderNotes"
                />
              </div>
            
          </div>
          <div className="col-lg-5 mb-5">
            <h6 style={{ fontWeight: "bold" }}>Your Order</h6>

            {/* order summary */}
            <div
              className="mt-lg-5 mt-4"
              style={{
                background: " rgba(196, 196, 196, 0.2)",
                borderRadius: "5px",
                padding: "30px 15px",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <p className="mb-0" style={{ fontWeight: 600 }}>
                    Product
                  </p>
                </div>
                <div>
                  <p className="mb-0" style={{ fontWeight: 600 }}>
                    Sub Total
                  </p>
                </div>
              </div>

              <div>
                <hr
                  className="mt-4 mb-0"
                  style={{ borderTop: "1px solid rgba(196, 196, 196, 0.5)" }}
                />
              </div>

              <div
                className="mt-4"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <div>
                  <p
                    className="mb-0"
                    style={{ fontSize: 14, width: "70%", lineHeight: "21px" }}
                  >
                    1 truck load of nigerian grade alligator pepper
                  </p>
                </div>
                <div>
                  <p className="mb-0" style={{ fontWeight: 600 }}>
                    NGN 40,000
                  </p>
                </div>
              </div>

              <div>
                <hr
                  className="mt-4 mb-0"
                  style={{ borderTop: "1px solid rgba(196, 196, 196, 0.5)" }}
                />
              </div>

              <div
                className="mt-4"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <div>
                  <p
                    className="mb-0"
                    style={{ fontSize: 14, width: "50%", lineHeight: "21px" }}
                  >
                    Shipping Paid
                  </p>
                </div>
                <div>
                  <p className="mb-0" style={{ fontWeight: 600 }}>
                    NGN 2,000
                  </p>
                </div>
              </div>

              <div>
                <hr
                  className="mt-4 mb-0"
                  style={{ borderTop: "1px solid rgba(196, 196, 196, 0.5)" }}
                />
              </div>

              <div
                className="mt-4"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <div>
                  <p className="mb-0" style={{ fontWeight: 700 }}>
                    TOTAL
                  </p>
                </div>
                <div>
                  <h6
                    className="mb-0"
                    style={{ fontWeight: 600, color: "#5B9223" }}
                  >
                    NGN 42,000
                  </h6>
                </div>
              </div>
            </div>

            {/* place order button */}
            <div className="mt-4">
              <button type="submit" className="btn btn-buy btn-block mt-4" onClick={handleOrderDataSubmit}>
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>

      <BuyerFooter />
    </>
  );
};

export default Checkout;
