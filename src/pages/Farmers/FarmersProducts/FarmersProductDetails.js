import React, {useState} from 'react';
import SideBar from '../../../components/SideBar';
import {FaBars } from 'react-icons/fa';
import Default from "../../../assets/images/default.png";
import {Link, useHistory} from 'react-router-dom'
import {connect} from 'react-redux'
import {deleteProduct} from '../../../store/actions/farmers'



const FarmersProductDetails = (props) => {

   const {product, productDelete, disabledBtn} = props

   const history = useHistory()

    const [toggled, setToggled] = useState(false);
 
    const handleToggleSidebar = (value) => {
      setToggled(value);
    };

    const handleDelete = (id) =>{
        var confirm_flag = window.confirm("Are you sure you wish to delete this product?");

        if(confirm_flag){
            productDelete(id)

            setTimeout(() => {
                history.push('/farmers/products')
              }, 1000);
        }
    }


    return (  
        <div className='app'>
         <SideBar
        
         toggled={toggled}
         handleToggleSidebar={handleToggleSidebar}
          />

        <main>
            <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
                <FaBars />
            </div>
            
            {/* content of page  layout*/}
            <header>

                <div className="mt-4">
                 <h5>{product.productName}</h5>
                </div>

                <div className="mt-4">
                    <hr className="mb-0" style={{borderTop: '1px solid rgba(196, 196, 196, 0.2)'}} />
                </div>

                <div className="row mb-5">
                    <div className="col-lg-5">

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
                    <div className="col-lg-7">
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
                           <p className="mt-2">{product.productQuantity}</p>
                        </div>
                    
                    {/* category */}
                    <div className="mt-4">
                            <h6 style={{fontWeight: 600}}>Category</h6>
                           <p className="mt-2">{product.productCategory}</p>
                        </div>

                        {/* add to cart and buy buttons */}
                        <div className="mt-2" style={{display: 'flex',}}>
                            <div style={{flex: 1}}>
                            <Link to={`/farmers/editproduct/${product.id}`} className="btn btn-add btn-block mt-4">Edit</Link>
                            </div>
                            <div className="ml-4" style={{flex: 1}}>
                            <button 
                            disabled={disabledBtn}
                            onClick={() => handleDelete(product.id)}
                            className="btn btn-oyap btn-block mt-4">Delete</button>
                            </div>
                        </div>

                    </div>


                </div>

            </header>
        
            
        </main>
          
     </div>
     );
}

const mapStateToProps = (state, ownProps) =>{
    const id = ownProps.match.params.id
    const products = state.farmers.products
    const product = products.find(product => product.id === id);
    return{
        product: product,
        disabledBtn: state.farmers.deleteBtn
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        productDelete: (id) => dispatch(deleteProduct(id))
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(FarmersProductDetails);