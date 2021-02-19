import React from "react";
import Logo from "../../assets/images/logo.png";
import WelcomeImg from "../../assets/images/welcome-img.png";
import {Form, Formik} from 'formik'
import {resetPasswordValidator} from '../../validationSchema/validator'
import {signUp} from '../../store/actions/auth'
import {connect} from 'react-redux'

const UserLogin = (props) => {

//   const {Forgot} = props

  // Reset password submit button
  const handleSubmit = async (values, setSubmitting) =>{
    console.log(values)
  }



  return (
    <div className="">
      <div className="row no-gutters">
        <div className="col-lg-4">
          {/* Logo */}
            <div className="text-center mt-4">
              <img src={Logo} alt="oyap logo" />
            </div>


            {/* Form submission */}
          <div className="login-container mb-4">
            <h3 className="mt-5 login-head">Reset Password?</h3>
              
              <Formik
                onSubmit={(values, {setSubmitting}) =>
                    handleSubmit(values, setSubmitting)
                    }
                validationSchema={resetPasswordValidator}
                initialValues={{ password: "", confirm_password: ""}}
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
                          
                             {/* New Password */}
                             <div className="form-group mt-4">
                              <label htmlFor="password">New Password</label>
                              <input className="form-control input-style"
                              type="password"
                              id="password"
                              value={values.password}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              placeholder="New Password" />
                               <small style={{ color: "#dc3545" }}>
                                  {touched.password && errors.password}
                              </small>
                            </div>

                            {/* confirm password */}
                            <div className="form-group">
                              <label htmlFor="password">Confirm Password</label>
                              <input className="form-control input-style"
                              type="password"
                              id="confirm_password"
                              value={values.confirm_password}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              placeholder="Confirm Password" />
                               <small style={{ color: "#dc3545" }}>
                                  {touched.confirm_password && errors.confirm_password}
                              </small>
                            </div>
                        
                            <button
                            type="submit"
                            disabled={isSubmitting}
                             className="btn btn-oyap btn-block text-uppercase mt-4">Reset Password</button>
                      </Form>
                  )}

              </Formik>
           
          </div>

        </div>
        <div className="col-lg-8 d-none d-md-block">
          <img src={WelcomeImg} alt="oyap" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};


const mapStateToProps = (state) => {
  return {
      
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      Reset: (creds) => dispatch(signUp(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserLogin);
