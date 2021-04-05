import React, {useState} from 'react';
import SideBar from '../../../components/SideBar';
import {FaBars } from 'react-icons/fa';
import {Form, Formik} from 'formik'
import {registerValidator} from '../../../validationSchema/validator'
import Default from "../../../assets/images/default.png";
import item4 from "../../../assets/images/item4.png";
import item6 from "../../../assets/images/item6.png";


const FarmersProductEdit = (props) => {

   
    const [toggled, setToggled] = useState(false);
 
    const handleToggleSidebar = (value) => {
      setToggled(value);
    };

       // Add proiduct button
  const handleSubmit = async (values, setSubmitting) =>{
        console.log(values)
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
                validationSchema={registerValidator}
                initialValues={{firstName: "Maize", lastName: "40,000", phoneNumber: "Vegetables",  email: "2000", password: "Amet minim mollit non deserunt ullamco est.", confirm_password: ""}}
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
                          {/* First name */}
                          <div className="form-group mt-3">
                            <label htmlFor="email">Product Name</label>
                            <input
                              className="form-control input-style"
                              placeholder=""
                              type="text"
                              onBlur={handleBlur}
                              onChange={handleChange}
                              id="firstName"
                              value={values.firstName}
                            />
                            <small style={{ color: "#dc3545" }}>
                                        {touched.firstName && errors.firstName}
                               </small>
                          </div>
                             
               
                            {/* Account Number */}
                            <div className="form-group">
                              <label htmlFor="password">Price</label>
                              <input className="form-control input-style"
                              type="text"
                              id="lastName"
                              value={values.lastName}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              placeholder="" />
                               <small style={{ color: "#dc3545" }}>
                                  {touched.lastName && errors.lastName}
                              </small>
                            </div>

                            {/* Bank */}
                            <div className="form-group">
                              <label htmlFor="password">Category</label>
                              <input className="form-control input-style"
                              type="text"
                              id="phoneNumber"
                              value={values.phoneNumber}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              placeholder="" />
                               <small style={{ color: "#dc3545" }}>
                                  {touched.phoneNumber && errors.phoneNumber}
                              </small>
                            </div>

                             {/* Account name */}
                             <div className="form-group">
                              <label htmlFor="password">Quantity in stock</label>
                              <input className="form-control input-style"
                              type="email"
                              id="email"
                              value={values.email}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              placeholder="" />
                               <small style={{ color: "#dc3545" }}>
                                  {touched.email && errors.email}
                              </small>
                            </div>


                             {/* Narration */}
                             <div className="form-group">
                              <label htmlFor="password">Description</label>
                              <input className="form-control input-style"
                              type="text"
                              id="password"
                              value={values.password}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              placeholder="" />
                               <small style={{ color: "#dc3545" }}>
                                  {touched.password && errors.password}
                              </small>
                            </div>

                        {/* product images */}
                        <div>
                            <h6>Product Images</h6>
                        </div>

                        <div className="mt-2" style={{display: 'flex'}}>

                            <div style={{marginRight: '2%'}}>
                                <img src={item4} width="70" height="70" alt="Default" />
                            </div>

                            <div style={{marginRight: '2%'}}>
                                <img src={item6} width="70" height="70" alt="Default" />
                            </div>

                            <div style={{marginRight: '2%'}}>
                                <img src={item4} width="70" height="70" alt="Default" />
                            </div>

                            <div>
                                <img src={Default} width="70" height="70" alt="Default" />
                            </div>

                        </div>

                            
                        <div className="text-center">
                            <button
                            type="submit"
                            disabled={isSubmitting}
                             className="btn btn-oyap mt-4">Update</button>
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
 
export default FarmersProductEdit;