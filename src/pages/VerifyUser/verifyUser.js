import React, {useRef} from "react";
import Logo from "../../assets/images/logo.png";
import WelcomeImg from "../../assets/images/welcome-img.png";
import {Form, Formik} from 'formik'
import {verifyCodeValidator} from '../../validationSchema/validator'
import* as actions from '../../store/actions/auth'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

const VerifyUser = (props) => {

  const { verify } = props

  const ref = useRef()

  // Verify code button functionality
  const handleSubmit = async (values, setSubmitting) =>{
    await verify(values)

     // reset the form
     setTimeout(() => {
      ref.current.reset()
     }, 500);
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
            <h3 className="mt-5 login-head">Verification Code</h3>
              
              <Formik
                onSubmit={(values, {setSubmitting}) =>
                    handleSubmit(values, setSubmitting)
                    }
                validationSchema={verifyCodeValidator}
                initialValues={{ code: "",}}
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
                              <label htmlFor="password">Code</label>
                              <input className="form-control input-style"
                              type="text"
                              id="code"
                              value={values.code}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              placeholder="Please enter verification code" />
                               <small style={{ color: "#dc3545" }}>
                                  {touched.code && errors.code}
                              </small>
                            </div>
                        
                            <button
                            type="submit"
                            disabled={isSubmitting}
                             className="btn btn-oyap btn-block text-uppercase mt-4">Verify</button>
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
      verify: (val) => dispatch(actions.verifyUser(val)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VerifyUser);
