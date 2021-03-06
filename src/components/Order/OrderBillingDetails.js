import React from "react";

const OrderBillingDetails = ({
  handleOrderDataChange,
  handleBlur,
  errors,
  values,
  touched,
}) => {
  return (
    <>
      {/* first name */}
      <div className="form-group mt-4 mt-lg-4">
        <label htmlFor="email">First name</label>
        <input
          className="form-control input-style"
          onChange={handleOrderDataChange}
          onBlur={handleBlur}
          placeholder="First name"
          type="text"
          id="firstName"
          name="firstName"
          value={values.firstName}
        />
        <small style={{ color: "#dc3545" }}>
          {touched.firstName && errors.firstName}
        </small>
      </div>

      {/* last name */}
      <div className="form-group mt-4">
        <label htmlFor="lastName">Last name</label>
        <input
          className="form-control input-style"
          onChange={handleOrderDataChange}
          onBlur={handleBlur}
          placeholder="Last name"
          type="text"
          id="lastName"
          name="lastName"
          value={values.lastName}
        />
        <small style={{ color: "#dc3545" }}>
          {touched.lastName && errors.lastName}
        </small>
      </div>

      {/* store name */}
      <div className="form-group mt-4">
        <label htmlFor="email">Store Name (Optional)</label>
        <input
          className="form-control input-style"
          onChange={handleOrderDataChange}
          onBlur={handleBlur}
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
          onBlur={handleBlur}
          placeholder="State"
          type="text"
          id="state"
          name="state"
          value={values.state}
        />
        <small style={{ color: "#dc3545" }}>
          {touched.state && errors.state}
        </small>
      </div>

      {/* city */}
      <div className="form-group mt-4">
        <label htmlFor="city">City</label>
        <input
          className="form-control input-style"
          onChange={handleOrderDataChange}
          onBlur={handleBlur}
          placeholder="City"
          type="text"
          id="city"
          name="city"
          value={values.city}
          
        />
        <small style={{ color: "#dc3545" }}>
          {touched.city && errors.city}
        </small>
      </div>

      {/* Street Address */}
      <div className="form-group mt-4">
        <label htmlFor="street">Street Address</label>
        <input
          className="form-control input-style"
          onChange={handleOrderDataChange}
          onBlur={handleBlur}
          placeholder="Street Address"
          type="text"
          id="street"
          name="street"
          value={values.street}
        />
        <small style={{ color: "#dc3545" }}>
          {touched.street && errors.street}
        </small>
      </div>

      {/* phone number */}
      <div className="form-group mt-4">
        <label htmlFor="phone1">Phone Number</label>
        <input
          className="form-control input-style"
          onChange={handleOrderDataChange}
          onBlur={handleBlur}
          placeholder="Phone number"
          type="text"
          id="phone1"
          name="phone1"
          value={values.phone1}
        />
        <small style={{ color: "#dc3545" }}>
          {touched.phone1 && errors.phone1}
        </small>
      </div>

      {/* Additional phone number */}
      <div className="form-group mt-4">
        <label htmlFor="phone2">Additional phone number</label>
        <input
          className="form-control input-style"
          onChange={handleOrderDataChange}
          onBlur={handleBlur}
          placeholder="Additional phone number"
          type="text"
          id="phone2"
          name="phone2"
          value={values.phone2}
        />
        <small style={{ color: "#dc3545" }}>
          {touched.phone2 && errors.phone2}
        </small>
      </div>

      {/* order notes */}
      <div className="form-group mt-4">
        <label htmlFor="orderNotes">Order notes (Optional)</label>
        <input
          className="form-control input-style"
          onChange={handleOrderDataChange}
          onBlur={handleBlur}
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
