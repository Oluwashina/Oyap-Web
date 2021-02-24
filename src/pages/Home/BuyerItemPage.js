import React, {useState} from 'react';
import BuyerNav from '../../components/BuyerNavbar';
import Item from "../../assets/images/item4_big.png";
import Item1 from "../../assets/images/item1.png";
import Item2 from "../../assets/images/item2.png";
import Item3 from "../../assets/images/item3.png";
import Item4 from "../../assets/images/item4.png";
import Item5 from "../../assets/images/item5.png";
import Item6 from "../../assets/images/item6.png";
import Default from "../../assets/images/default.png";
import Seller from "../../assets/images/seller1.png";
import './BuyerItemPage.css'
import BuyerFooter from '../../components/BuyerFooter';
import {Link} from 'react-router-dom'

const ItemPage = () => {

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
                     <p className="mb-0"><span style={{color: '#7BC30A'}}>Home/Vegetables</span>/Alligator Pepper</p>
                </div>
            </div>

            {/* details page */}

            <div className="container">

                <div className="mt-4">
                 <h5>1 truck load of nigerian grade alligator pepper</h5>
                </div>

                <div className="mt-4">
                    <hr className="mb-0" style={{borderTop: '1px solid rgba(196, 196, 196, 0.2)'}} />
                </div>

                <div className="row mb-5">
                    <div className="col-lg-4">

                        {/* product image */}
                        <div className="mt-4">
                         <img src={Item} alt="oyap" className="img-fluid itemImage" />
                        </div>

                        {/* smaller images */}
                        <div className="mt-4" style={{display:  'flex', justifyContent: 'space-between'}}>

                            <div>
                                <img src={Item4} alt="oyap" className="smallImages" />
                            </div>

                            <div>
                            <img src={Item6} alt="oyap" className="smallImages" />
                            </div>

                            <div>
                            <img src={Item4} alt="oyap" className="smallImages" />
                            </div>

                            <div>
                            <img src={Default} alt="oyap" className="smallImages" />
                            </div>
                        </div>

                    </div>

                        {/* item desc */}
                    <div className="col-lg-5">
                        {/* amount */}
                        <div className="mt-4">
                            <h5 style={{color: '#5B9223', fontWeight: 'bold'}}>NGN 40,000</h5>
                        </div>

                        {/* status */}
                        <div>
                            <h6>Status: <span style={{color: '#5B9223', fontWeight: 'bold'}}>In Stock</span></h6>
                        </div>

                        <div>
                            <hr />
                        </div>

                        {/* description */}
                        <div className="mt-4">   
                            <h6 style={{fontWeight: 600}}>Description</h6>
                            <p className="mt-2">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                        </div>

                    {/* quantity add */}
                        <div className="mt-4">
                            <h6 style={{fontWeight: 600}}>Quantity</h6>
                            <div className="quantity-div mt-3">
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

                        {/* add to cart and buy buttons */}
                        <div className="mt-2" style={{display: 'flex',}}>
                            <div style={{flex: 1}}>
                            <button className="btn btn-add btn-block mt-4">Add to Cart</button>
                            </div>
                            <div className="ml-4" style={{flex: 1}}>
                        <Link to="/checkout" className="btn btn-buy btn-block mt-4">Buy Now</Link>
                            </div>
                        </div>

                    </div>

                    {/* seller section */}
                    <div className="col-lg-3">
                            <div className="sellersDiv mt-4 mt-lg-0">
                               
                                <div className="text-center">
                                    <h6 style={{fontWeight: 600}}>Seller Details</h6>
                                </div>

                                <div className="text-center mt-3">
                                    <img src={Seller} alt="seller" className="img-fluid seller-image" />
                                </div>

                                <div className="text-center mt-3">
                                    <p className="mb-0" style={{fontWeight: 600}}>Ajagbe Mathew Lemon</p>
                                </div>

                                <div className="text-center mt-2">
                                    <p className="mb-0" style={{fontSize: 14, fontWeight: 500}}>21st Jan 2020</p>
                                </div>

                                <div className="text-center mt-2">
                                    <p className="mb-0"  style={{fontSize: 14, fontWeight: 500}}>08123452345</p>
                                </div>

                                <div className="text-center mt-2">
                                    <p className="mb-0"  style={{fontSize: 14, fontWeight: 500}}>AjagbeFarms@gmail.com</p>
                                </div>

                                <div className="mt-4">
                                 <a  href="tel:+2348123452345" className="btn btn-contact btn-block mt-4" style={{color: 'white'}}>Contact Me</a> 
                                </div>

                            </div>
                    </div>

                </div>


                {/* related products section */}
                <div style={{background: ' rgba(196, 196, 196, 0.2)', padding: '10px 20px'}}> 
                    <div>
                     <p className="mb-0" style={{fontWeight: 600}}>Related Products</p>
                    </div>
                 </div>

                 {/* RELATED products display */}
                   {/* first row */}
                <div className="row mt-4 mb-5">
                    <div className="col-lg-2 col-6 mb-4 productCard">
                        {/* image */}
                        <div className="text-center">
                          <img src={Item1} alt="oyap" className="productImage" />
                        </div>
                        {/* name */}
                        <div className="mt-3">
                            <p className="mb-0 text-center">Green Beans clean and processed 50 kg</p>
                        </div>
                        {/* price */}
                        <div className="mt-2">
                            <p className="mb-0 price text-center">NGN 20,000</p>
                        </div>
                    </div>
                    <div className="col-lg-2 col-6 mb-4 productCard">
                        <div className="text-center">
                          <img src={Item2} alt="oyap" className="productImage" />
                        </div>
                         {/* name */}
                         <div className="mt-3">
                            <p className="mb-0 text-center">Green Beans clean and processed 50 kg</p>
                        </div>
                        {/* price */}
                        <div className="mt-2">
                            <p className="mb-0 price text-center">NGN 8,000</p>
                        </div>
                    </div>
                    <div className="col-lg-2 col-6 mb-4 productCard">
                        <div className="text-center">
                          <img src={Item3} alt="oyap" className="productImage" />
                        </div>
                         {/* name */}
                         <div className="mt-3">
                            <p className="mb-0 text-center">Green Beans clean and processed 50 kg</p>
                        </div>
                        {/* price */}
                        <div className="mt-2">
                            <p className="mb-0 price text-center">NGN 40,000</p>
                        </div>
                    </div>
                    <div className="col-lg-2 col-6 mb-4 productCard">
                        <div className="text-center">
                          <img src={Item4} alt="oyap" className="productImage" />
                        </div>
                         {/* name */}
                         <div className="mt-3">
                            <p className="mb-0 text-center">Green Beans clean and processed 50 kg</p>
                        </div>
                        {/* price */}
                        <div className="mt-2">
                            <p className="mb-0 price text-center">NGN 40,000</p>
                        </div>
                    </div>
                    <div className="col-lg-2 col-6 mb-4 productCard">
                        <div className="text-center">
                          <img src={Item5} alt="oyap" className="productImage" />
                        </div>
                         {/* name */}
                         <div className="mt-3">
                            <p className="mb-0 text-center">Green Beans clean and processed 50 kg</p>
                        </div>
                        {/* price */}
                        <div className="mt-2">
                            <p className="mb-0 price text-center">NGN 10,000</p>
                        </div>
                    </div>
                    <div className="col-lg-2 col-6 mb-4 productCard">
                        <div className="text-center">
                          <img src={Item1} alt="oyap" className="productImage" />
                        </div>
                         {/* name */}
                         <div className="mt-3">
                            <p className="mb-0 text-center">Green Beans clean and processed 50 kg</p>
                        </div>
                        {/* price */}
                        <div className="mt-2">
                            <p className="mb-0 price text-center">NGN 40,000</p>
                        </div>
                    </div>
                </div>

            </div>

             {/* footer */}
             <BuyerFooter />
        </>
     );
}
 
export default ItemPage;