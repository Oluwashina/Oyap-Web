import React, {useState} from "react";
import Logo from "../../assets/images/logo.png";
import WelcomeImg from "../../assets/images/welcome-img.png";
import {Form, Formik} from 'formik'
import {loginValidator} from '../../validationSchema/validator'
import {signIn} from '../../store/actions/auth'
import "./Login.css";
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

const UserLogin = (props) => {

  const {login} = props

  const [initialTab, setTab] = useState(1);
  const [role, setRole ] = useState("Buyer");

  const [tabData] = useState([
    { id: 1, name: "tab-1", text: "Buyer"},
    { id: 2, name: "tab-2", text: "Seller" },
    { id: 3, name: "tab-3", text: "Logistics" },
  ]);


  const handleToggleAndSetRole = (id, role) => {
    setTab(id);
    setRole(role);
  }
  // const ToggleTab = (id) => {
  //   setTab(id)
  // }

  // tab Layout
  const tabLayout = tabData.map((item) => (
    <div 
    key={item.id}
      className={initialTab === item.id ? "active-tab" : "tab"}
      onClick={() => handleToggleAndSetRole(item.id, item.text)}
     style={{flex: 1}}>
      <p className="mb-0 text-center">{item.text}</p>
    </div>
  ));

  // submit login button
  const handleSubmit = async (values) => {
    const credentials = {...values, role}
   console.log(credentials)
     await login(values);
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
            <h3 className="mt-4 login-head">Login as</h3>

            {/* tabs select */}
            <div
              className="mt-4" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              {tabLayout}
              </div>
                

              <Formik
                onSubmit={(values, {setSubmitting}) =>
                    handleSubmit(values, setSubmitting)
                    }
                validationSchema={loginValidator}
                initialValues={{email: "", password: ""}}
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
                          {/* email */}
                          <div className="form-group mt-5">
                            <label htmlFor="email">Enter your email address</label>
                            <input
                              className="form-control input-style"
                              placeholder="sample@example.com"
                              type="text"
                              onBlur={handleBlur}
                              onChange={handleChange}
                              id="email"
                              value={values.email}
                            />
                            <small style={{ color: "#dc3545" }}>
                                        {touched.email && errors.email}
                               </small>
                          </div>
                             
               
                            {/* password */}
                            <div className="form-group">
                              <label htmlFor="password">Enter your password</label>
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
                        
                            <button
                            type="submit"
                            disabled={isSubmitting}
                             className="btn btn-oyap btn-block text-uppercase mt-4">Login</button>
                      </Form>
                  )}

              </Formik>


              <div className="text-center mt-4">
              <Link to="/forgotpassword" style={{textDecoration: 'none', color: '#323335'}}>
                  <p>Forgot password?</p>
                </Link>
                
              </div>
           
            <hr style={{borderTop: '1px solid rgba(123, 195, 10, 0.5)'}} />

            <button className="btn btn-outline-oyap btn-block text-uppercase mt-4">
              Sign Up
            </button>
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
      login: (creds) => dispatch(signIn(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserLogin);
