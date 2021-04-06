import React, {useState, useEffect} from 'react';
import BuyerNav from '../../components/BuyerNavbar';
// import Item5 from "../../assets/images/item5.png";
import './BuyerCart.css'
import BuyerFooter from '../../components/BuyerFooter';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import { deleteCart, getCart, adjustCartQty } from '../../store/actions/carts';

const Cart = (props) => {

    const {cartItems, Increment, Decrement, auth, getCartItems, CartRemove} = props

    const [totalPrice, setTotalPrice] = useState(0)
   
   

    useEffect(() =>{
        let price = 0;

        cartItems.forEach(item =>{
            price += item.cartQty * item.productPrice
        })

        setTotalPrice(price)
    }, [cartItems, totalPrice, setTotalPrice])

    // make call to fetch cart items
    useEffect(() => {
        if(auth){
            getCartItems();
         }
    }, [getCartItems, auth]);

    const minusAdjust = (id, qty, item)  =>{
        let result = {
            ...item,
            cartQty:  -1,
            subTotal: -1  * item.productPrice
        }
        console.log(result)
        Decrement(result)
    }

    const plusAdjust = (id, qty, item) =>{
        let result = {
            ...item,
            cartQty: +1,
            subTotal: 1 * item.productPrice
        }
        console.log(result)
        Increment(result)
    }


    const itemsCart = cartItems.length ? (
        cartItems.map(items=>{
        return (
            <div key={items.id} className="mt-lg-3 mt-4 cart-div">
            <div style={{flex: 3}}>
                <div style={{display: 'flex'}}>
                    <div>
                        <img src={items.productImages[0]} alt="cart" className="cartImage" />
                    </div>
                    <div className="ml-4">
                        <p className="mb-0 mt-3" style={{width: '80%', lineHeight: '25px'}}>{items.productName}</p>
                        <p className="mb-0 mt-2" style={{color: '#C4C4C4', fontSize: 14}}>Sold by: {items.sellerFirstName ? items.sellerFirstName : "Name"} {items.sellerLastName ? items.sellerLastName : "name1"}</p>
                        <div className="mt-3">
                            <p className="mb-0" 
                            onClick={()=>{CartRemove(items.id)}}
                            style={{color: '#ED881C', cursor: 'pointer'}}>REMOVE</p>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{flex: 1}}>
                <div className="quantitycart-div mt-3 mt-lg-0">
                        <div>
                            <i 
                            className={items.cartQty === 1 ? "mdi mdi-minus disabled" : "mdi mdi-minus"}
                            onClick={()=>{minusAdjust(items.id, items.cartQty - 1, items)}} 
                            ></i>
                        </div>
                        <div style={{fontSize: 20}}>
                             {items.cartQty}
                        </div>
                        <div>
                         <i className="mdi mdi-plus"
                              onClick={()=>{plusAdjust( items.id, items.cartQty + 1, items)}} 
                            style={{fontSize: 20, cursor: 'pointer'}}></i>
                            </div>
                        </div>
                </div>
                <div style={{flex: 1,}}>
                    <h6 className="mt-4 mt-lg-0 mb-4 mb-lg-0" style={{fontWeight: 700}}>NGN {items.productPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h6>
                </div>
                <div style={{flex: 1}}>
                    <h6 className="d-none d-md-block" style={{fontWeight: 700}}>NGN {items.subTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h6>
                </div>
            </div>   
            )
            })
            ) : (
                
            <div className="center">
                {/* icon */}
                <div className="text-center mt-5">
                    <i className="mdi mdi-cart cartIcon" style={{color: '#5FA30E', fontSize: 50}}></i>
                </div>

                <div className="text-center mt-3">
                    <h5 className="mb-0">Your cart is empty!</h5>
                    <p className="mb-0 mt-3">{auth ? "Browse our items and discover our best deals" :
                        <span className="mb-0 mt-3">
                            Already have an account ? <Link to="/login" style={{color: '#ED881C', textDecoration: 'underline'}}>Login</Link> to see the items in your cart.
                        </span> }</p>
                </div>

                <div className="text-center">
                <Link to="/" className="btn btn-sell mt-4">Start Shopping</Link>
                </div>
        
             </div>                       
            )

    return ( 
        <>
            <BuyerNav />

               {/* breadcrumbs */}
               <div style={{background: ' rgba(196, 196, 196, 0.2)', padding: '10px'}}> 
                <div className="container">
                     <p className="mb-0"><span style={{color: '#7BC30A', fontSize: 14}}>Home/</span>Cart</p>
                </div>
             </div>

             {/* cart history */}
             <div className="container mb-5">

                <div className="text-center mt-lg-4 mt-4">
                 <h5 style={{fontWeight: 'bold'}}>CART</h5>
                </div>

            {/* cart title */}
                <div 
                className={cartItems.length ? "mt-5 cart-title" : "no-title"}
                >   
                    <div style={{flex: 3}}>
                        <h6 style={{fontWeight: 700}}>Item</h6>
                    </div>
                    <div style={{flex: 1}}>
                        <h6 style={{fontWeight: 700}}>Quantity</h6>
                    </div>
                    <div style={{flex: 1}}>
                        <h6 style={{fontWeight: 700}}>Unit Price</h6>
                    </div>
                    <div style={{flex: 1}}>
                        <h6 style={{fontWeight: 700}}>Sub Total</h6>
                    </div>
                </div>

                {/* cart history */}

                {itemsCart}

            {/* total layout */}
                <div 
                 className={cartItems.length ? "mt-5 total-div" : "no-title" }
                >   
                    <div>
                        
                    </div>
                    <div>
                       
                    </div>
                    <div>
                        <h5 style={{fontWeight: 700}}>TOTAL</h5>
                    </div>
                    <div>
                        <h5 style={{fontWeight: 700, color: '#5B9223'}}>NGN {totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h5>
                        <p className="mb-0" style={{fontSize: 14, color: '#C4C4C4'}}>Not including shipping fees</p>
                    </div>
                </div>


                <div
                className={cartItems.length ? "mt-4 text-center text-lg-right" : "no-title" }
                 >
                <Link to="/checkout" className="btn btn-checkout mt-4">Proceed to Checkout</Link>
                </div>

            </div>

            <div style={{marginTop: '300px'}}>
                <BuyerFooter />
            </div>

        </>
     );
}

const mapStateToProps = (state) =>{
    return{
        cartItems: state.cart.cartItems,
        auth: state.auth.isAuthenticated,
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        CartRemove: (id) => dispatch(deleteCart(id)),
        Increment : (res) => dispatch(adjustCartQty(res)),
        Decrement : (res) => dispatch(adjustCartQty(res)),
        getCartItems: () => dispatch(getCart()),
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Cart);