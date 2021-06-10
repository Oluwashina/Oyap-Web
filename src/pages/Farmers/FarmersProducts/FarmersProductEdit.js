import React, {useState, useRef, useEffect} from 'react';
import SideBar from '../../../components/SideBar';
import {FaBars } from 'react-icons/fa';
import {Form, Formik} from 'formik'
import {addProductValidator} from '../../../validationSchema/validator'
import Default from "../../../assets/images/default.png";
import {connect} from 'react-redux'
import { EditProduct, UploadProductImage, updateProduct, getProductType, getProductCategory } from '../../../store/actions/farmers';
import cogoToast from "cogo-toast";

const FarmersProductEdit = (props) => {

    const {product, handlePicture, id,
        getType, type, category,getCategory,
         filterProduct, productZero,productOne, productTwo, productThree, handleUpdate} = props

    const [toggled, setToggled] = useState(false);

    const categoryId = product.productCategory._id

    useEffect(() =>{
        getType()
        getCategory(categoryId)
      }, [getType,getCategory,categoryId]);


    const fileRef = useRef(null)
    const fileRef2 = useRef(null)
    const fileRef3 = useRef(null)
    const fileRef4 = useRef(null)
  
    // make call to filter product by id on load of page
  useEffect(() => {
    filterProduct(id);
  }, [filterProduct,id]);
 
    const handleToggleSidebar = (value) => {
      setToggled(value);
    };

    
    //   upload profile picture1
    const handlePic = (index) =>{
        var file = fileRef.current.files[0]
        console.log(file)
        handlePicture(file, index)
  }

  
  //   upload profile picture2
  const handlePic2 = (index) =>{
    var file = fileRef2.current.files[0]
    console.log(file)
    handlePicture(file, index)
}

//   upload profile picture3
const handlePic3 = (index) =>{
    var file = fileRef3.current.files[0]
    console.log(file)
    handlePicture(file, index)
}

//   upload profile picture4
const handlePic4 = (index) =>{
    var file = fileRef4.current.files[0]
    console.log(file)
    handlePicture(file, index)
} 
 

       // update product button
  const handleSubmit = async (values, setSubmitting) =>{
         // check if at least an image of the product  is added
         if(productZero === ''){
            cogoToast.error('Upload at least a first product image!!!')
        }
        else{
            const res = {
                ...values,
                id
            }
           await handleUpdate(res)
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

                <div className="mt-lg-1 mt-4">
                    <h5 style={{fontWeight: 'bold'}}>Edit product</h5>
                </div>

                {/* Edit a products */}
                <div className="row">
                    <div className="col-lg-8">


                    <Formik
                onSubmit={(values, {setSubmitting}) =>
                    handleSubmit(values, setSubmitting)
                    }
                validationSchema={addProductValidator}
                initialValues={{type: product.productCategory._id ? product.productCategory._id  : "", category: product.productSubcategory._id ?  product.productSubcategory._id : "", name: product.productName ? product.productName: "", weight: product.productWeight ? product.productWeight : "",  price: product.productPrice ? product.productPrice : "", quantity: product.productQuantity ? product.productQuantity : "", isLogistics: product.isLogistics === true ? "Yes" : "No", description: product.productDescription ? product.productDescription : ""}}
              >
                  {({
                      handleChange,
                      isSubmitting,
                      handleSubmit,
                      handleBlur,
                      values,
                      touched,
                      errors
                  })=>(
                      <Form onSubmit={handleSubmit}>
                          {/* Product type */}
                          <div className="form-group mt-3">
                            <label htmlFor="type">Product Type</label>
                            <select
                                 name="type"
                                 values={values.type}
                                 onChange={handleChange}
                                    onBlur={handleBlur}
                                    className="form-control select-style" 
                                    id="type">
                                <option value={product.productCategory._id} >{product.productCategory.categoryName}</option>
                                {type.filter(val => val.id !== product.productCategory._id).map((opt, index) => {
                                            return <option key={index}
                                             value={opt.id}>{opt.categoryName}</option>
                                        })}

                                </select>
                                <small style={{ color: "#dc3545" }}>
                                  {touched.type && errors.type}
                              </small>
                          </div>     

                        {/* product category */}
                        <div className="form-group">
                              <label htmlFor="category">Product Category</label>
                              <select
                                 name="category"
                                 values={values.category}
                                 onChange={handleChange}
                                    onBlur={handleBlur}
                                    className="form-control select-style" 
                                    id="category">
                                    <option value={product.productSubcategory._id} >{product.productSubcategory.subcategoryName}</option>
                                    {category.filter(val => val.id !== product.productSubcategory._id).map((opt, index) => {
                                            return <option key={index}
                                             value={opt.id}>{opt.subcategoryName}</option>
                                        })}

                                
                                </select>
                                <small style={{ color: "#dc3545" }}>
                                  {touched.category && errors.category}
                              </small>
                            </div>

                            
                            {/* product name */}
                            <div className="form-group">
                              <label htmlFor="password">Product Name</label>
                              <input className="form-control input-style"
                              type="text"
                              id="name"
                              value={values.name}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              placeholder="" />
                               <small style={{ color: "#dc3545" }}>
                                  {touched.name && errors.name}
                              </small>
                            </div>

                             {/* weight of product */}
                             <div className="form-group">
                              <label htmlFor="password">Product Weight(Kg)</label>
                              <input className="form-control input-style"
                              type="text"
                              id="weight"
                              value={values.weight}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              placeholder="" />
                               <small style={{ color: "#dc3545" }}>
                                  {touched.weight && errors.weight}
                              </small>
                            </div>

                        {/* product price */}
                        <div className="form-group">
                              <label htmlFor="password">Product Price(Naira)</label>
                              <input className="form-control input-style"
                              type="tel"
                              id="price"
                              value={values.price}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              placeholder="" />
                               <small style={{ color: "#dc3545" }}>
                                  {touched.price && errors.price}
                              </small>
                            </div>

                            {/* Quantity */}
                            <div className="form-group">
                              <label htmlFor="password">Quantity in stock</label>
                              <input className="form-control input-style"
                              type="tel"
                              id="quantity"
                              value={values.quantity}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              placeholder="" />
                               <small style={{ color: "#dc3545" }}>
                                  {touched.quantity && errors.quantity}
                              </small>
                            </div>


                             {/* Description */}
                             <div className="form-group">
                              <label htmlFor="password">Description(Features)</label>
                              <textarea className="form-control input-style"
                              id="description"
                              rows="4"
                              style={{resize: 'none'}}
                              value={values.description}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              placeholder="" />
                               <small style={{ color: "#dc3545" }}>
                                  {touched.description && errors.description}
                              </small>
                            </div>

                            
                            {/* logistics */}
                            <div className="form-group">
                              <label htmlFor="password">Do you want Logistics?</label>
                            <div className="form-check form-check">
                                <input className="form-check-input" type="radio" 
                                name="isLogistics" id="Yes" value="Yes" 
                                onChange={handleChange}
                                 defaultChecked={values.isLogistics === "Yes"}
                                 />
                                <label className="form-check-label mt-1" for="Yes">Yes</label>
                            </div>
                            <div className="form-check form-check mt-2">
                                <input className="form-check-input" type="radio"
                                defaultChecked={values.isLogistics === 'No'}
                                onChange={handleChange}
                                 name="isLogistics" id="No" value="No" />
                                <label className="form-check-label mt-1" for="No">No</label>
                            </div>
                            <small style={{ color: "#dc3545" }}>
                                  {touched.isLogistics && errors.isLogistics}
                              </small>
                        </div>


                            
                        {/* product images */}
                        <div>
                            <h6>Product Images</h6>
                        </div>

                        <div className="mt-2" style={{display: 'flex'}}>

                            <div style={{marginRight: '2%', position: 'relative'}}>
                                <img src={productZero ? productZero : Default} width="70" height="70" alt="Default" />
                                <label>
                                <input type="file"
                                    className="file_upload"
                                    ref={fileRef}
                                    onChange={() => handlePic(0)}
                                   />
                                   </label>
                            </div>

                            <div style={{marginRight: '2%', position: 'relative'}}>
                                <img src={productOne ? productOne : Default} width="70" height="70" alt="Default" />
                                <label>
                                <input type="file"
                                    className="file_upload"
                                    ref={fileRef2}
                                    onChange={() => handlePic2(1)}
                                   />
                                   </label>
                            </div>

                            <div style={{marginRight: '2%', position: 'relative'}}>
                                <img src={productTwo ? product.productTwo : Default} width="70" height="70" alt="Default" />
                                <label>
                                <input type="file"
                                    className="file_upload"
                                    ref={fileRef3}
                                    onChange={() => handlePic3(2)}
                                   />
                                   </label>
                            </div>

                            <div style={{position: 'relative'}}>
                                <img src={productThree ? productThree : Default} width="70" height="70" alt="Default" />
                                <label>
                                <input type="file"
                                    className="file_upload"
                                    ref={fileRef4}
                                    onChange={() => handlePic4(3)}
                                   />
                                   </label>
                            </div>

                        </div>

                            
                        <div className="text-center">
                            <button
                            type="submit"
                            disabled={isSubmitting}
                             className="btn btn-oyap mt-4">Update Product</button>
                         </div>
                      </Form>
                  )}

              </Formik>

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
        id: id,
        productZero: state.farmers.productZero,
        productOne: state.farmers.productOne,
        productTwo: state.farmers.productTwo,
        productThree: state.farmers.productThree,
        type: state.farmers.type,
        category: state.farmers.category
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        handlePicture: (values, index) => dispatch(UploadProductImage(values, index)),
        filterProduct: (id) => dispatch(EditProduct(id)),
        handleUpdate: (values) => dispatch(updateProduct(values)),
        getType: () => dispatch(getProductType()),
        getCategory:(id) => dispatch(getProductCategory(id))
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(FarmersProductEdit);