import React, {useState} from 'react';
import BuyerNav from '../../components/BuyerNavbar';
import Item5 from "../../assets/images/item5.png";
import Item1 from "../../assets/images/item1.png";
import './BuyerCart.css'
import BuyerFooter from '../../components/BuyerFooter';
import { Link } from 'react-router-dom';


const Cart = () => {

    const [count, setCount] = useState(1);

    // Create handleIncrement event handler
 const handleIncrement = () => {
   setCount(prevCount => prevCount + 1);
 };

  //Create handleDecrement event handler
  const handleDecrement = () => {
   setCount(prevCount => prevCount - 1);
 };

    return ( 
        <>
            <BuyerNav />

               {/* breadcrumbs */}
               <div style={{background: ' rgba(196, 196, 196, 0.2)', padding: '10px'}}> 
                <div className="container">
                     <p className="mb-0"><span style={{color: '#7BC30A'}}>Home /</span> Cart</p>
                </div>
             </div>

             {/* cart history */}
             <div className="container mb-5">

                <div className="text-center mt-lg-4 mt-4">
                 <h5 style={{fontWeight: 'bold'}}>CART</h5>
                </div>

            {/* cart title */}
                <div className="mt-5 cart-title">   
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

                {/* 1st item */}
                <div className="mt-lg-3 mt-4 cart-div">
                    <div style={{flex: 3}}>
                        <div style={{display: 'flex'}}>
                            <div>
                                <img src={Item5} alt="cart" className="cartImage" />
                            </div>
                            <div className="ml-4">
                                <p className="mb-0 mt-3" style={{width: '80%', lineHeight: '25px'}}>1 truck load of nigerian grade fresh maize</p>
                                <p className="mb-0 mt-2" style={{color: '#C4C4C4', fontSize: 14}}>Sold by: Layake Farms</p>
                                <div className="mt-3">
                                    <p className="mb-0" style={{color: '#ED881C', cursor: 'pointer'}}>REMOVE</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{flex: 1}}>
                        <div className="quantity-div mt-3 mt-lg-0">
                                <div>
                                    <i 
                                    className={count === 1 ? "mdi mdi-minus disabled" : "mdi mdi-minus"}
                                    onClick={handleDecrement}
                                    ></i>
                                </div>
                                <div style={{fontSize: 20}}>
                                     {count}
                                </div>
                                <div>
                                 <i className="mdi mdi-plus"
                                 onClick={handleIncrement}
                                  style={{fontSize: 20, cursor: 'pointer'}}></i>
                                </div>
                            </div>
                    </div>
                    <div style={{flex: 1,}}>
                        <h6 className="mt-4 mt-lg-0 mb-4 mb-lg-0" style={{fontWeight: 700}}>NGN 40,000</h6>
                    </div>
                    <div style={{flex: 1}}>
                        <h6 className="d-none d-md-block" style={{fontWeight: 700}}>NGN 80,000</h6>
                    </div>
                </div>

                {/* 2nd item */}
                <div className="mt-3 cart-div">
                    <div style={{flex: 3}}>
                        <div style={{display: 'flex'}}>
                            <div>
                                <img src={Item1} alt="cart" className="cartImage" />
                            </div>
                            <div className="ml-4">
                                <p className="mb-0 mt-3" style={{width: '80%', lineHeight: '25px'}}>Green Beans clean and processed 50 kg</p>
                                <p className="mb-0 mt-2" style={{color: '#C4C4C4', fontSize: 14}}>Sold by: Layake Farms</p>
                                <div className="mt-3">
                                    <p className="mb-0" style={{color: '#ED881C', cursor: 'pointer'}}>REMOVE</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{flex: 1}}>
                        <div className="quantity-div mt-3 mt-lg-0">
                                <div>
                                    <i 
                                    className={count === 1 ? "mdi mdi-minus disabled" : "mdi mdi-minus"}
                                    onClick={handleDecrement}
                                    ></i>
                                </div>
                                <div style={{fontSize: 20}}>
                                     {count}
                                </div>
                                <div>
                                 <i className="mdi mdi-plus"
                                 onClick={handleIncrement}
                                  style={{fontSize: 20, cursor: 'pointer'}}></i>
                                </div>
                            </div>
                    </div>
                    <div style={{flex: 1,}}>
                        <h6 className="mt-4 mt-lg-0 mb-4 mb-lg-0" style={{fontWeight: 700}}>NGN 20,000</h6>
                    </div>
                    <div style={{flex: 1}}>
                        <h6 className="d-none d-md-block" style={{fontWeight: 700}}>NGN 20,000</h6>
                    </div>
                </div>


            {/* total layout */}
                <div className="mt-5 total-div">   
                    <div>
                        
                    </div>
                    <div>
                       
                    </div>
                    <div>
                        <h6 style={{fontWeight: 700}}>TOTAL</h6>
                    </div>
                    <div>
                        <h6 style={{fontWeight: 700, color: '#5B9223'}}>NGN 100,000</h6>
                        <p className="mb-0" style={{fontSize: 14, color: '#C4C4C4'}}>Not including shipping fees</p>
                    </div>
                </div>


                <div className="mt-4 text-center text-lg-right">
                <Link to="/checkout" className="btn btn-checkout mt-4">Proceed to Checkout</Link>
                </div>

            </div>

            <div style={{marginTop: '300px'}}>
                <BuyerFooter />
            </div>

        </>
     );
}
 
export default Cart;