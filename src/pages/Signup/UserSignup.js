import React from "react";
import Logo from "../../assets/images/logo.png";
import WelcomeImg from "../../assets/images/welcome-img.png";
import {Form, Formik} from 'formik'
import {registerValidator} from '../../validationSchema/validator'
import {signUp} from '../../store/actions/auth'
import "./signup.css";
import {Link, useHistory} from 'react-router-dom'
import {connect} from 'react-redux'

const UserSignup = (props) => {

  const {Register} = props
  const history = useHistory()

  // Sign Up button
  const handleSubmit = async (values, setSubmitting) =>{
    let role = props.match.params.id
    let result = {
      ...values,
      role
    }
   await Register(result)

    setTimeout(() => {
      history.push('/login')
    }, 2000);
  }

  

  return (
    <div className="">
      <div className="row no-gutters">
        <div className="col-lg-4">
          {/* Logo */}
            <div className="text-center mt-4">
              <img src={Logo} alt="oyap logo" />
            </div>

             {/* progress bar */}
             <div className="mt-5" style={{display: 'flex',justifyContent: 'center'}}>
                <div className="bar">
                </div>
                <div className="active-bar ml-2">
                </div>
            </div>

            {/* Form submission */}
          <div className="login-container mb-4">
            <h3 className="mt-4 login-head">Sign Up</h3>
              
              <Formik
                onSubmit={(values, {setSubmitting}) =>
                    handleSubmit(values, setSubmitting)
                    }
                validationSchema={registerValidator}
                initialValues={{firstName: "", lastName: "", phoneNumber: "",  email: "", password: "", confirm_password: ""}}
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
                            <label htmlFor="email">First name</label>
                            <input
                              className="form-control input-style"
                              placeholder="First name"
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
                             
               
                            {/* Last name */}
                            <div className="form-group">
                              <label htmlFor="password">Last name</label>
                              <input className="form-control input-style"
                              type="text"
                              id="lastName"
                              value={values.lastName}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              placeholder="Last name" />
                               <small style={{ color: "#dc3545" }}>
                                  {touched.lastName && errors.lastName}
                              </small>
                            </div>

                            {/* Phone Number */}
                            <div className="form-group">
                              <label htmlFor="password">Phone Number</label>
                              <input className="form-control input-style"
                              type="text"
                              id="phoneNumber"
                              value={values.phoneNumber}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              placeholder="0800 000 0000" />
                               <small style={{ color: "#dc3545" }}>
                                  {touched.phoneNumber && errors.phoneNumber}
                              </small>
                            </div>

                             {/* Email */}
                             <div className="form-group">
                              <label htmlFor="password">Email</label>
                              <input className="form-control input-style"
                              type="email"
                              id="email"
                              value={values.email}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              placeholder="Email" />
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
                              placeholder="Password" />
                               <small style={{ color: "#dc3545" }}>
                                  {touched.password && errors.password}
                              </small>
                            </div>

                            
                             {/* Confirm password */}
                             <div className="form-group">
                              <label htmlFor="password">Confirm password</label>
                              <input className="form-control input-style"
                              type="password"
                              id="confirm_password"
                              value={values.confirm_password}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              placeholder="Confirm password" />
                               <small style={{ color: "#dc3545" }}>
                                  {touched.confirm_password && errors.confirm_password}
                              </small>
                            </div>
                        
                        
                            <button
                            type="submit"
                            disabled={isSubmitting}
                             className="btn btn-oyap btn-block text-uppercase mt-4">Sign Up</button>
                      </Form>
                  )}

              </Formik>


              <div className="text-center mt-5">
                Already have an account? <Link to="/login" style={{textDecoration: 'none', color: '#7BC30A'}}>
                   Sign In
                </Link>
                
              </div>
           
          </div>

        </div>
        <div className="col-lg-8 d-none d-md-block">
          <img src={WelcomeImg} alt="oyap" className="img-fluid" style={{width: '100vw'}} />
        </div>
      </div>
    </div>
  );
};


const mapDispatchToProps = (dispatch) => {
  return {
      Register: (creds) => dispatch(signUp(creds)),
  };
};

export default connect(null, mapDispatchToProps)(UserSignup);
