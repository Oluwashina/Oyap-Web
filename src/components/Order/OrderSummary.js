import React from "react";

const OrderSummary = () => {
  return (
    <>
      
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
            <h6 className="mb-0" style={{ fontWeight: 600, color: "#5B9223" }}>
              NGN 42,000
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderSummary;
