import React,{useRef, useEffect} from "react";
import Logo from "../../assets/images/logo.png";
import WelcomeImg from "../../assets/images/welcome-img.png";
import {Form, Formik} from 'formik'
import {forgotPasswordValidator} from '../../validationSchema/validator'
import* as actions from '../../store/actions/auth'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

const AdminForgot = (props) => {

  const { forgot, forgot_success } = props

  const ref = useRef()

  // Forgot password submit button
  const handleSubmit = async (values, setSubmitting) =>{
    await forgot(values)
      
  }

  useEffect(() =>{
      if(!forgot_success){
        // reset the form
        setTimeout(() => {
            ref.current.reset()
        }, 500);
      }
  },[forgot_success])



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
            <h3 className="mt-5 login-head">Forgot Password?</h3>
              
              <Formik
                onSubmit={(values, {setSubmitting}) =>
                    handleSubmit(values, setSubmitting)
                    }
                validationSchema={forgotPasswordValidator}
                initialValues={{ email: "",}}
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
                      <Form ref={ref} onSubmit={handleSubmit}>
                          
                             {/* Email */}
                             <div className="form-group mt-4">
                              <label htmlFor="password">Email Address</label>
                              <input className="form-control input-style"
                              type="emai
                              l"
                              id="email"
                              value={values.email}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              placeholder="Please type in your email-address" />
                               <small style={{ color: "#dc3545" }}>
                                  {touched.email && errors.email}
                              </small>
                            </div>
                        
                            <button
                            type="submit"
                            disabled={isSubmitting}
                             className="btn btn-oyap btn-block text-uppercase mt-4">Submit</button>
                      </Form>
                  )}

              </Formik>


              <div className="text-center mt-5">
                Remember password? <Link to="/admin/login" style={{textDecoration: 'none', color: '#7BC30A'}}>
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


const mapStateToProps = (state) => {
  return {
    forgot_success: state.auth.forgot_sucsess
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      forgot: (val) => dispatch(actions.forgotPassword(val)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminForgot);
