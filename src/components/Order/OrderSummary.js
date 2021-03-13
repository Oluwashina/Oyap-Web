import React,{useState, useEffect} from "react";
import {connect} from 'react-redux'
import {Link} from 'react-router-dom' 
import Order from "../../components/Order/Order"

const OrderSummary = (props) => {


  const {cartItems, handleOrder, values, errors} = props

  
  const [totalPrice, setTotalPrice] = useState(0)
  const [shippingFee] = useState(2000)

  useEffect(() =>{
      let price = 0;

      cartItems.forEach(item =>{
          price += item.cartQty * item.price
      })

      setTotalPrice(price + shippingFee)
  }, [cartItems, totalPrice, setTotalPrice, shippingFee])


  
  const itemsCart = cartItems.length ? (
    cartItems.map(items=>{
    return (
        <div key={items.id}>
            <div
              className="mt-4"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div>
                <p
                  className="mb-0"
                  style={{ fontSize: 14, width: "70%", lineHeight: "21px" }}
                >
                  {items.name}
                </p>
              </div>
              <div>
                <p className="mb-0" style={{ fontWeight: 600 }}>
                  NGN {items.subTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </p>
              </div>
            </div>

            <div>
              <hr
                className="mt-4 mb-0"
                style={{ borderTop: "1px solid rgba(196, 196, 196, 0.5)" }}
              />
            </div>
        </div>   
        )
        })
        ) : (
            
        <div className="center">
            <div className="text-center mt-4">
                <h5 className="mb-0">Your cart is empty!</h5>
                <p className="mb-0 mt-3">Browse our items and discover our best deals</p>
            </div>
            <div className="text-center">
                <Link to="/" className="btn btn-sell mt-4">Start Shipping</Link>
               </div>
         </div>                       
        )


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

          {itemsCart}

{/* shipping amount section */}
        <div
          className="mt-4"
          style={{ display: cartItems.length ? 'flex' : 'none',
          justifyContent: cartItems.length ? "space-between" : "normal"
        }} 
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
              NGN {shippingFee.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </p>
          </div>
        </div>

        <div>
          <hr
            className="mt-4 mb-0"
            style={{ borderTop: cartItems.length ? '1px solid rgba(196, 196, 196, 0.5)' : 'none',
          }}
          
          />
        </div>

        <div
        className="mt-4"
          style={{ display: cartItems.length ? 'flex' : 'none',
          justifyContent: cartItems.length ? "space-between" : "normal"
        } } 
        > 
          <div>
            <p className="mb-0" style={{ fontWeight: 700 }}>
              TOTAL
            </p>
          </div>
          <div>
            <h6 className="mb-0" style={{ fontWeight: 600, color: "#5B9223" }}>
              NGN {totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </h6>
          </div>
        </div>
      </div>

        {/* place order button */}
      <div className="mt-4">              
            <Order
              handleOrder={handleOrder}
              amount={totalPrice}
                handleDisabled={cartItems}
                customerDetails={values}
                errors={errors}
                 />
        </div>
      

    </>
  );
};

const mapStateToProps = (state) =>{
  return{
      cartItems: state.cart.cartItems,
  }
}

export default connect(mapStateToProps)(OrderSummary);
