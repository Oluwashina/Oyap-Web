import React,{useState, useRef} from 'react';
import {FaBars } from 'react-icons/fa';
import AdminSidebar from '../../../components/AdminSidebar';
import {Form, Formik} from 'formik'
import {registerAdminValidator} from '../../../validationSchema/validator'
import { adminRegister } from '../../../store/actions/admin';
import { connect } from 'react-redux';


const AddAdminPage = ({add}) => {

    const [toggled, setToggled] = useState(false);

    const ref = useRef()

    const handleToggleSidebar = (value) => {
        setToggled(value);
    };

    const handleSubmit = async (values) =>{
        let role = "SubAdmin"
        let result = {
            ...values,
            role
        }
        console.log(result)

       await add(result)

        setTimeout(()=>{
            ref.current.reset();
        }, 3000)
    }

    return ( 
        <>
         <div className="app">
             <AdminSidebar
                
                toggled={toggled}
                handleToggleSidebar={handleToggleSidebar}
                />

            <main>
                <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
                    <FaBars />
                </div>

                <h5 className="mb-3 mt-3 mt-lg-0" style={{fontWeight: 'bold'}}>Add Admin</h5>
            <header>


              {/* add a products */}
              <div className="row">
                    <div className="col-lg-8">


                    <Formik
                onSubmit={(values, {setSubmitting, setFieldValue}) =>
                    handleSubmit(values, setSubmitting, setFieldValue)
                    }
                validationSchema={registerAdminValidator}
                initialValues={{firstName: "", lastName: "", phoneNumber: "", email: "", password: "", confirm_password:""}}
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
                      <Form ref={ref} onSubmit={handleSubmit}>
                
                            {/* firstname */}
                            <div className="form-group mt-4">
                              <label htmlFor="firstName">First Name</label>
                              <input className="form-control input-style"
                              type="text"
                              id="firstName"
                              value={values.firstName}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              placeholder="" />
                               <small style={{ color: "#dc3545" }}>
                                  {touched.firstName && errors.firstName}
                              </small>
                            </div>


                            {/* lastname */}
                            <div className="form-group">
                              <label htmlFor="lastName">Last Name</label>
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

               
                            {/* phone */}
                            <div className="form-group">
                              <label htmlFor="phoneNumber">Phone Number</label>
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

                            
                             {/* email */}
                             <div className="form-group">
                              <label htmlFor="email">Email Address</label>
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

                               {/* password */}
                               <div className="form-group">
                              <label htmlFor="password">Password</label>
                              <input className="form-control input-style"
                              type="password"
                              id="password"
                              value={values.password}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              placeholder="" />
                               <small style={{ color: "#dc3545" }}>
                                  {touched.password && errors.password}
                              </small>
                            </div>

                            
                            {/* confirm password */}
                            <div className="form-group">
                              <label htmlFor="confirm_password">Confirm Password</label>
                              <input className="form-control input-style"
                              type="password"
                              id="confirm_password"
                              value={values.confirm_password}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              placeholder="" />
                               <small style={{ color: "#dc3545" }}>
                                  {touched.confirm_password && errors.confirm_password}
                              </small>
                            </div>

                        

                            
                        <div className="text-center">
                            <button
                            type="submit"
                            disabled={isSubmitting}
                             className="btn btn-oyap mt-4">Add Admin</button>
                         </div>
                      </Form>
                  )}

              </Formik>

                    </div>
                </div>      


            </header>
         </main>
        </div>
        </>
     );
}

const mapStateToProps = (state)=>{
    return{
       
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        add: (creds) => dispatch(adminRegister(creds))
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(AddAdminPage);