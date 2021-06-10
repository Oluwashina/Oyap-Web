import React,{useEffect} from 'react';
import BuyerNav from '../../components/BuyerNavbar';
import Default from "../../assets/images/default.png";
import Seller from "../../assets/images/seller1.png";
import './BuyerItemPage.css'
import BuyerFooter from '../../components/BuyerFooter';
import { connect } from "react-redux";
import { addToCart, Decrement, Increment } from '../../store/actions/carts';
import moment from 'moment'
import ImageZoom from 'react-medium-image-zoom'
import { getRelatedProducts } from '../../store/actions/products';
import Image, { Shimmer } from 'react-shimmer'
import Skeleton from 'react-loading-skeleton'


const ItemPage = (props) => {

    const {product, count, Increment, Decrement, addCartClick, history, auth, RelatedProducts, relatedproducts} = props

    const subId = product.productSubcategory._id

    // make call to fetch related products based on subcategory id
    useEffect(() => {
        RelatedProducts(subId);
    }, [RelatedProducts, subId]);


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
            history.push('/cart')
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


 const relatedProductLayout = relatedproducts.length ? (
    relatedproducts.map((product) => {
          return (
            <div key={product.id} className="col-lg-2 col-6 mb-5 productCard" onClick={() => handleRoute(product.id)}>
                {/* image */}
                <div className="text-center">
                    <Image
                     src={product.productImages[0]} alt="oyap"
                       NativeImgProps={{className: "productImage"}}
                        fallback={<Shimmer width={140} height={150} />}
                     />
                </div>
                {/* name */}
                <div className="mt-3">
                    <p className="mb-0 text-center">{product.productName ||  <Skeleton /> }</p>
                </div>
                {/* price */}
                <div className="mt-2">
                    <p className="mb-0 price text-center">NGN {product.productPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") ||  <Skeleton /> }</p>
                </div>
            </div> 
          );
        })
      ) : (
        <div className="">
            <p></p>
        </div>
      );


    const handleRoute = (id) =>{
        history.push("/item/" + id);
        window.scrollTo(0, 0);
    }

    if(product){
    return ( 
        <>
            <BuyerNav />

            {/* breadcrumbs */}
            <div style={{background: ' rgba(196, 196, 196, 0.2)', padding: '10px'}}> 
                <div className="container">
                     <p className="mb-0" style={{fontSize: 14}}><span style={{color: '#7BC30A'}}>Home/{product.productSubcategory.subcategoryName}</span>/{product.productName}</p>
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
                        <ImageZoom
                                 image={{
                                 src: product.productImages[0],
                                 alt: 'oyap',
                                 className: 'img-fluid itemImage',
                                 
                                 }}  
                                 zoomImage={{
                                 src: product.productImages[1],
                                 alt: 'agriculture'
                                 }}
                            />
                       
                        </div>

                        {/* smaller images */}
                        <div className="mt-4" style={{display:  'flex', justifyContent: 'space-between'}}>

                            <div>
                               {
                                 !product.productImages[0] ? 
                                 <img src={Default} alt="defualt" className="smallImages" />
                                 :
                                 <ImageZoom
                                 image={{
                                 src: product.productImages[0],
                                 alt: 'agriculture',
                                 className: 'smallImages',
                                 
                                 }}  
                                 zoomImage={{
                                 src: product.productImages[0],
                                 alt: 'agriculture'
                                 }}
                             />

                               }  
                         </div>

                            <div>
                            {
                                 !product.productImages[1] ? 
                                 <img src={Default} alt="defualt" className="smallImages" />
                                 :
                                 <ImageZoom
                                 image={{
                                 src: product.productImages[1],
                                 alt: 'agriculture',
                                 className: 'smallImages',
                                 
                                 }}  
                                 zoomImage={{
                                 src: product.productImages[1],
                                 alt: 'agriculture'
                                 }}
                             />

                               }  
                            </div>

                            <div>
                            {
                                 !product.productImages[2] ? 
                                 <img src={Default} alt="defualt" className="smallImages" />
                                 :
                                 <ImageZoom
                                 image={{
                                 src: product.productImages[2],
                                 alt: 'agriculture',
                                 className: 'smallImages',
                                 
                                 }}  
                                 zoomImage={{
                                 src: product.productImages[2],
                                 alt: 'agriculture'
                                 }}
                             />
                               }  
                            </div>

                            <div>
                            {
                                 !product.productImages[3] ? 
                                 <img src={Default} alt="defualt" className="smallImages" />
                                 :
                                 <ImageZoom
                                 image={{
                                 src: product.productImages[3],
                                 alt: 'agriculture',
                                 className: 'smallImages',
                                 
                                 }}  
                                 zoomImage={{
                                 src: product.productImages[3],
                                 alt: 'agriculture'
                                 }}
                             />

                               }  
                           
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
                                {product.productQuantity < 1 ? "Out of Stock" : "In Stock"}
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

                 <div className="row mt-4">
                        {relatedProductLayout}
                 </div>

                 {relatedproducts.length === 0 ?
                    <div className="mt-2 mb-5 text-center">
                        <p>No related products under this category</p>
                    </div>
                        :
                     ""
                     }



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
        auth: state.auth.isAuthenticated,
        relatedproducts: state.products.relatedproducts
    };
};

const mapDispatchToProps = (dispatch) =>{
    return{
        Increment : () => dispatch(Increment()),
        Decrement : () => dispatch(Decrement()),
        addCartClick: (product) => dispatch(addToCart(product)),
        RelatedProducts: (id) => dispatch(getRelatedProducts(id)),
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(ItemPage);