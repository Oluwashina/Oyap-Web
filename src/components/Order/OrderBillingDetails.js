import React from "react";

const OrderBillingDetails = ({ handleOrderDataChange, values }) => {
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
          name="firstName"
          value={values.firstName}
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
          name="lastName"
          value={values.lastName}
        />
      </div>

      {/* store name */}
      <div className="form-group mt-4">
        <label htmlFor="email">Store Name (Optional)</label>
        <input
          className="form-control input-style"
          onChange={handleOrderDataChange}
          placeholder="Store name"
          type="text"
          id="store"
          name="store"
          value={values.store}
        />
      </div>

      {/* state */}
      <div className="form-group mt-4">
        <label htmlFor="state">State</label>
        <input
          className="form-control input-style"
          onChange={handleOrderDataChange}
          placeholder="State"
          type="text"
          id="state"
          name="state"
          value={values.state}
        />
      </div>

      {/* city */}
      <div className="form-group mt-4">
        <label htmlFor="city">City</label>
        <input
          className="form-control input-style"
          onChange={handleOrderDataChange}
          placeholder="City"
          type="text"
          id="city"
          name="city"
          value={values.city}
        />
      </div>

      {/* Street Address */}
      <div className="form-group mt-4">
        <label htmlFor="street">Street Address</label>
        <input
          className="form-control input-style"
          onChange={handleOrderDataChange}
          placeholder="Street Address"
          type="text"
          id="street"
          name="street"
          value={values.street}
        />
      </div>

      {/* phone number */}
      <div className="form-group mt-4">
        <label htmlFor="phone1">Phone Number</label>
        <input
          className="form-control input-style"
          onChange={handleOrderDataChange}
          placeholder="Phone number"
          type="text"
          id="phone1"
          name="phone1"
          value={values.phone1}
        />
      </div>

      {/* Additional phone number */}
      <div className="form-group mt-4">
        <label htmlFor="phone2">Additional phone number</label>
        <input
          className="form-control input-style"
          onChange={handleOrderDataChange}
          placeholder="Additional phone number"
          type="text"
          id="phone2"
          name="phone2"
          value={values.phone2}
        />
      </div>

      {/* order notes */}
      <div className="form-group mt-4">
        <label htmlFor="orderNotes">Order notes (Optional)</label>
        <input
          className="form-control input-style"
          onChange={handleOrderDataChange}
          placeholder="Order notes"
          type="text"
          id="orderNotes"
          name="orderNotes"
          value={values.orderNotes}
        />
      </div>
    </>
  );
};

export default OrderBillingDetails;
