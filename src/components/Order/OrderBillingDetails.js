import React from "react";

const OrderBillingDetails = ({handleOrderDataChange}) => {
  return (
    <>
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
    </>
  );
};

export default OrderBillingDetails;
