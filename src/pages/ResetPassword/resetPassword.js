import React, {useEffect} from "react";
import Logo from "../../assets/images/logo.png";
import WelcomeImg from "../../assets/images/welcome-img.png";
import {Form, Formik} from 'formik'
import {resetPasswordValidator} from '../../validationSchema/validator'
import {connect} from 'react-redux'
import * as actions from '../../store/actions'
import {useLocation, Link, useHistory} from "react-router-dom";

const UserLogin = (props) => {

  const search = useLocation().search;
  const {Reset, verifyCode, code, isLoading } = props
  const history = useHistory()

  // Verify reset code sent to email if valid!
  useEffect(() => {
    const code = new URLSearchParams(search).get('oobCode');
    verifyCode(code)
  }, [verifyCode, search]);


  // Reset password submit button
  const handleSubmit = async (values, setSubmitting) =>{
    const code = new URLSearchParams(search).get('oobCode');
    var creds = {
      code,
      password: values.password
    }
    await Reset(creds)
    if(!isLoading){
      history.push('/login')
    }
  }


  if (code) {
    return (
      <div className="row no-gutters">
      <div className="col-lg-4">
        {/* Logo */}
          <div className="text-center mt-4">
            <img src={Logo} alt="oyap logo" />
          </div>

            {/* invalid code message */}
          <div className="login-container mb-4">
          <h3 className="mt-5 login-head">Reset Password?</h3>
            <p className="mt-4" style={{lineHeight: '25px'}}>The recovery link you selected has already 
            been used to change your password. Try resetting your password again to receive a new recovery link.</p>

            <hr className="mt-5" style={{borderTop: '1px solid rgba(123, 195, 10, 0.5)'}} />

          </div>

          <div className="text-center mt-2">
                Already have an account? <Link to="/login" style={{textDecoration: 'none', color: '#7BC30A'}}>
                   Sign In
                </Link>
                
              </div>
        </div>
        <div className="col-lg-8 d-none d-md-block">
          <img src={WelcomeImg} alt="oyap" className="img-fluid" />
        </div>
      </div>
    );
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
    code: state.auth.resetcode,
    isLoading: state.auth.isLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      Reset: (creds) => dispatch(actions.ResetPassword(creds)),
      verifyCode: (creds) => dispatch(actions.verifyResetCode(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserLogin);
