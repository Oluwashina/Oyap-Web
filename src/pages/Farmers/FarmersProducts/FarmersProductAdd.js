import React, {useState, useRef, useEffect} from 'react';
import SideBar from '../../../components/SideBar';
import {FaBars } from 'react-icons/fa';
import {Form, Formik} from 'formik'
import {addProductValidator} from '../../../validationSchema/validator'
import Default from "../../../assets/images/default.png";
import {connect} from 'react-redux'
import {addProduct, UploadProductImage, clearProductImages} from '../../../store/actions/farmers'
import cogoToast from "cogo-toast";



const FarmersProductAdd = (props) => {

    const {handlePicture, productZero, productOne, productTwo, productThree, handleAdd, emptyImage} = props
   
    const [toggled, setToggled] = useState(false);

    const fileRef = useRef(null)
    const fileRef2 = useRef(null)
    const fileRef3 = useRef(null)
    const fileRef4 = useRef(null)

    useEffect(() => {
        emptyImage();
      }, [emptyImage]);
    
    
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

       // Add product button
  const handleSubmit = async (values, setSubmitting, resetForm, setFieldValue) =>{
        // check if at least an image of the product  is added
        if(productZero === ''){
            cogoToast.error('Upload at least a first product image!!!')
        }
        else{
            handleAdd(values)
            resetForm({
                name: '',
                price: '',
                quantity: '',
                description: ''
            })
            
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
                    <h5 style={{fontWeight: 'bold'}}>Add new product</h5>
                </div>

                {/* add a products */}
                <div className="row">
                    <div className="col-lg-8">


                    <Formik
                onSubmit={(values, {setSubmitting, resetForm, setFieldValue}) =>
                    handleSubmit(values, setSubmitting, resetForm, setFieldValue)
                    }
                validationSchema={addProductValidator}
                initialValues={{type: "", category: "", name: "",  price: "", quantity: "", description: ""}}
              >
                  {({
                      handleChange,
                      isSubmitting,
                      handleSubmit,
                      handleBlur,
                      handleReset,
                      values,
                      touched,
                      errors
                  })=>(
                      <Form onSubmit={handleSubmit}>
                          {/* Product type */}
                          <div className="form-group mt-3">
                            <label htmlFor="email">Product Type</label>
                            <select
                                 name="type"
                                 values={values.type}
                                 onChange={handleChange}
                                    onBlur={handleBlur}
                                    className="form-control select-style" 
                                    id="type">
                                    <option defaultValue="" >--Select--</option>
                                    <option value="Goods" >Goods</option>
                                    <option value="Services" >Services</option>
                                
                                </select>
                                <small style={{ color: "#dc3545" }}>
                                  {touched.type && errors.type}
                              </small>
                          </div>
                             

                             {/* product category */}
                            <div className="form-group">
                              <label htmlFor="password">Product Category</label>
                              <select
                                 name="category"
                                 values={values.category}
                                 onChange={handleChange}
                                    onBlur={handleBlur}
                                    className="form-control select-style" 
                                    id="category">
                                    <option defaultValue="" >--Select--</option>
                                    <option value="Agro Chemical" >Agro Chemical(organic)</option>
                                    <option value="Agro Chemical" >Agro Chemical(Inorganic)</option>
                                    <option value="Fertilizers" >Fertilizers(organic)</option>
                                    <option value="Services" >Fertilizers(Inorganic)</option>
                                    <option value="Livestock" >Livestock Feeds</option>
                                    <option value="Crop" >Crop Seeds</option>
                                    <option value="Vegetables" >Vegetables</option>
                                    <option value="Spices" >Spices</option>
                                    <option value="Farm Fresh Foods" >Farm Fresh Foods</option>
                                    <option value="Fruits" >Fruits</option>
                                    <option value="Cash Crops" >Cash Crops</option>
                                
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

                        {/* product images */}
                        <div>
                            <h6>Product Images</h6>
                        </div>

                        <div className="mt-2" style={{display: 'flex'}}>

                            <div style={{marginRight: '2%', position: 'relative',}}>
                                <img src={productZero ? productZero : Default} width="70" height="70" alt="Default" />
                                <label>
                                <input type="file"
                                    className="file_upload"
                                    ref={fileRef}
                                    accept="image/*"
                                    onChange={() => handlePic(0)}
                                   />
                                </label>
                            </div>

                            <div style={{marginRight: '2%', position: 'relative'}}>
                                <img src={productOne ? productOne :Default} width="70" height="70" alt="Default" />
                                <input type="file"
                                 className="file_upload"
                                    ref={fileRef2}
                                    accept="image/*"
                                    onChange={() => handlePic2(1)}
                                  />
                            </div>

                            <div style={{marginRight: '2%', position: 'relative',}}>
                                <img src={productTwo ? productTwo : Default} width="70" height="70" alt="Default" />
                                <input type="file" className="file_upload"
                                ref={fileRef3}
                                accept="image/*"
                                onChange={() => handlePic3(2)}
                                />
                            </div>

                            <div style={{position: 'relative'}}>
                                <img src={productThree ? productThree : Default} width="70" height="70" alt="Default" />
                                <input type="file" className="file_upload"
                                ref={fileRef4}
                                accept="image/*"
                                onChange={() => handlePic4(3)}
                                 />
                            </div>

                        </div>

                            
                        <div className="text-center">
                            <button
                            type="submit"
                            disabled={isSubmitting}
                             className="btn btn-oyap mt-4">Add new product</button>
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

const mapStateToProps = (state) =>{
    return{
        productZero: state.farmers.productZero,
        productOne: state.farmers.productOne,
        productTwo: state.farmers.productTwo,
        productThree: state.farmers.productThree
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        handlePicture: (values, index) => dispatch(UploadProductImage(values, index)),
        handleAdd: (values) => dispatch(addProduct(values)),
        emptyImage: (values) => dispatch(clearProductImages(values))

    }
}

 
export default connect(mapStateToProps, mapDispatchToProps)(FarmersProductAdd);