import React, {useState, useEffect} from 'react';
import SideBar from '../../../components/SideBar';
import {FaBars } from 'react-icons/fa';
import {connect} from 'react-redux'
import { getFarmersProducts } from '../../../store/actions/farmers';
import Image, { Shimmer } from 'react-shimmer'
import Skeleton from 'react-loading-skeleton'


const FarmersProduct = (props) => {

    const {history, ProductsFetch, products} = props
   
    const [toggled, setToggled] = useState(false);
 
    const handleToggleSidebar = (value) => {
      setToggled(value);
    };

// make call to fetch products on load of page
  useEffect(() => {
    ProductsFetch();
  }, [ProductsFetch]);

    const handleRoute = (val) =>{
        history.push('/farmers/product/'+val)
    }

  const AllProducts = !products ?
    (
        <div className="">
        </div>
    )
     : products.map(product =>{
            return(
                <div key={product.id} className="col-lg-3 col-6 mb-4 productCard" onClick={() => handleRoute(product.id)}>
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
            )
        }) 

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

                <div className="mt-lg-1 mt-4">
                    <h5 style={{fontWeight: 'bold'}}>Products</h5>
                </div>

                {/* list of products */}

                  {/* first row */}
                  <div className="row mt-4">
                        {AllProducts}
                     </div>

               
                {/* pagination */}
                 <div className="mt-5" style={{display: 'flex', justifyContent: 'flex-end'}}>

                    <div className="active-pagination page-space">
                        <span>1</span>
                    </div>

                    <div className="pagination page-space">
                        <span>2</span>
                    </div>

                    <div className="next-page page-space">
                        <span>Next Page <i className="mdi mdi-chevron-right" style={{color: '#c4c4c4'}}></i></span>
                    </div>
                </div>

            </header>
        
            
        </main>
          
     </div>
     );
}
 
const mapStateToProps = (state) =>{
    return{
        products: state.farmers.products,
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        ProductsFetch: (value) => dispatch(getFarmersProducts(value)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FarmersProduct);