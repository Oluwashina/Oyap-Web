import React from 'react';
import BuyerNav from '../../components/BuyerNavbar';
import Item1 from "../../assets/images/item1.png";
import Item2 from "../../assets/images/item2.png";
import Item3 from "../../assets/images/item3.png";
import Item4 from "../../assets/images/item4.png";
import Item5 from "../../assets/images/item5.png";
import Default from "../../assets/images/default.png";
import Seller from "../../assets/images/seller1.png";
import './BuyerItemPage.css'
import BuyerFooter from '../../components/BuyerFooter';
import { connect } from "react-redux";
import { addToCart, Decrement, Increment } from '../../store/actions/carts';
import moment from 'moment'

const ItemPage = (props) => {

    const {product, count, Increment, Decrement, addCartClick, history, auth} = props


      const BuyNow = (product) =>{
        if(auth){
            let result = {
                ...product,
                cartQty: count,
                subTotal: count * product.productPrice
            }
            console.log(result)
            addCartClick(result)
            history.push('/checkout')
          }
          else{
            history.push('/checkout')
          }
      }
      
      const addToCart = (product) =>{
          if(auth){
            let result = {
                ...product,
                cartQty: count,
                subTotal: count * product.productPrice
            }
            console.log(result)
            addCartClick(result)
          }
          else{
            history.push('/cart')  
            
          }
      }

    if(product){
    return ( 
        <>
            <BuyerNav />

            {/* breadcrumbs */}
            <div style={{background: ' rgba(196, 196, 196, 0.2)', padding: '10px'}}> 
                <div className="container">
                     <p className="mb-0" style={{fontSize: 14}}><span style={{color: '#7BC30A'}}>Home/{product.productCategory}</span>/{product.productName}</p>
                </div>
            </div>

            {/* details page */}

            <div className="container">
                

                <div className="mt-4">
                 <h5>{product.productName}</h5>
                </div>

                <div className="mt-4">
                    <hr className="mb-0" style={{borderTop: '1px solid rgba(196, 196, 196, 0.2)'}} />
                </div>

                <div className="row mb-5">
                    <div className="col-lg-4">

                        {/* product image */}
                        <div className="mt-4">
                         <img src={product.productImages[0]} alt="oyap" className="img-fluid itemImage" />
                        </div>

                        {/* smaller images */}
                        <div className="mt-4" style={{display:  'flex', justifyContent: 'space-between'}}>

                            <div>
                                <img src={!product.productImages[0] ? Default : product.productImages[0] } alt="oyap" className="smallImages" />
                            </div>

                            <div>
                            <img src={!product.productImages[1] ? Default : product.productImages[1]} alt="oyap" className="smallImages" />
                            </div>

                            <div>
                            <img src={!product.productImages[2] ? Default : product.productImages[2]} alt="oyap" className="smallImages" />
                            </div>

                            <div>
                            <img src={!product.productImages[3] ? Default : product.productImages[3]} alt="oyap" className="smallImages" />
                            </div>
                        </div>

                    </div>

                        {/* item desc */}
                    <div className="col-lg-5">
                        {/* amount */}
                        <div className="mt-4">
                            <h5 style={{color: '#5B9223', fontWeight: 'bold'}}>NGN {product.productPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h5>
                        </div>

                        {/* status */}
                        <div>
                            <h6>Status: <span style={{color: '#5B9223', fontWeight: 'bold'}}>
                                {product.productPrice < 1 ? "Out of Stock" : "In Stock"}
                                </span></h6>
                        </div>

                        <div>
                            <hr />
                        </div>

                        {/* description */}
                        <div className="mt-4">   
                            <h6 style={{fontWeight: 600}}>Description</h6>
                            <p className="mt-2">{product.productDescription}</p>
                        </div>

                    {/* quantity add */}
                        <div className="mt-4">
                            <h6 style={{fontWeight: 600}}>Quantity</h6>
                            <div className="quantity-div mt-3">
                                <div>
                                    <i 
                                    className={count === 1 ? "mdi mdi-minus disabled" : "mdi mdi-minus"}
                                    onClick={Decrement}
                                    ></i>
                                </div>
                                <div style={{fontSize: 20}}>
                                     {count}
                                </div>
                                <div>
                                 <i className="mdi mdi-plus"
                                 onClick={Increment}
                                  style={{fontSize: 20, cursor: 'pointer'}}></i>
                                </div>
                            </div>
                        </div>

                        {/* items display when added to cart */}
                        {/* <div className="mt-3">
                            <p className="mb-0">( {count} item(s) added)</p>
                        </div> */}

                        {/* add to cart and buy buttons */}
                        <div className="mt-2" style={{display: 'flex',}}>
                            <div style={{flex: 1}}>
                            <button className="btn btn-add btn-block mt-4"
                              onClick={()=>{addToCart(product)}}
                            >Add to Cart</button>
                            </div>
                            <div className="ml-4" style={{flex: 1}}>
                        <button
                        onClick={()=>{BuyNow(product)}}
                         className="btn btn-buy btn-block mt-4">Buy Now</button>
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
                                    <img src={!product.sellerProfilePic ? Seller : product.sellerProfilePic} alt="seller" className="img-fluid seller-image" />
                                </div>

                                <div className="text-center mt-3">
                                    <p className="mb-0" style={{fontWeight: 600}}>{product.sellerFirstName ? product.sellerFirstName : "Name"} {product.sellerLastName ? product.sellerLastName : "Name1"}</p>
                                </div>

                                <div className="text-center mt-2">
                                    <p className="mb-0" style={{fontSize: 14, fontWeight: 500}}>Reg Date: {moment(product.sellerRegDate).format('Do MMM YYYY')}</p>
                                </div>

                                <div className="text-center mt-2">
                                    <p className="mb-0"  style={{fontSize: 14, fontWeight: 500}}>{product.sellerphoneNumber}</p>
                                </div>

                                <div className="text-center mt-2">
                                    <p className="mb-0"  style={{fontSize: 14, fontWeight: 500}}>{product.sellerEmail}</p>
                                </div>

                                <div className="mt-4">
                                 <a  href={`tel:${product.sellerphoneNumber}`} className="btn btn-contact btn-block mt-4" style={{color: 'white'}}>Contact Me</a> 
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
     )
    }
    else{
        return (
            <div className="container">
              <p></p>
            </div>
          );
    }
}


const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id
    const products = state.products.products
    const product = products.find(product => product.id === id);
    return {
        product: product,
        products: state.products.products,
        count: state.cart.count,
        id: id,
        cartItems: state.cart.cartItems,
        auth: state.auth.isAuthenticated
    };
};

const mapDispatchToProps = (dispatch) =>{
    return{
        Increment : () => dispatch(Increment()),
        Decrement : () => dispatch(Decrement()),
        addCartClick: (product) => dispatch(addToCart(product)),
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(ItemPage);