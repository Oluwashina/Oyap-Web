import React, {useState, useEffect} from "react";
import Logo from "../../../assets/images/logo.png";
import WelcomeImg from "../../../assets/images/welcome-img.png";
import {Form, Formik} from 'formik'
import {loginValidator} from '../../../validationSchema/validator'
import {loginUser} from '../../../store/actions/auth'
import "../../Login/Login.css";
import { Link, useHistory } from 'react-router-dom'
import { connect } from 'react-redux'

const AdminLogin = (props) => {
  
  const {login, isAuthenticated, userRole} = props

  const history = useHistory()

  const [initialTab, setTab] = useState(1);

  const [role, setRole] = useState("Admin");

  const [tabData] = useState([
    { id: 1, name: "tab-1", text: "Admin"},
    { id: 2, name: "tab-2", text: "SubAdmin" },
  ]);

   // tab Layout
   const tabLayout = tabData.map((item) => (
    <div 
    key={item.id}
      className={initialTab === item.id ? "active-tab" : "tab"}
      onClick={() => handleTabToggleAndSetRole(item.id, item.text)}
     style={{flex: 1}}>
      <p className="mb-0 text-center">{item.text}</p>
    </div>
  ));

  
  const handleTabToggleAndSetRole = (id, role) => {
    setTab(id);
    setRole(role);
  } 

  // submit login button
  const handleSubmit = async (values) => {
    const credentials = 
    {
      ...values,
       role
     }
     await login(credentials);
  }

  useEffect(() =>{
    if(isAuthenticated){
      // check for role sent from api to determine where to route to
          switch(userRole){
            case 'Buyer':
              history.push('/')
              break;
            case 'Seller':
                history.push('/farmers')
                break;
            case 'Logistics':
              history.push('/signup')
              break;
            case 'Admin':
                history.push('/admin/dashboard')
                break;
            case 'SubAdmin':
              history.push('/admin/dashboard')
              break;
            default:
              history.push('/')
              break;
          }
      }
  },[isAuthenticated, history, userRole])

    return ( 
        <>
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
                <Link to="/admin/forgotpassword" style={{textDecoration: 'none', color: '#323335'}}>
                  Forgot password?
                </Link>
                
              </div>

           
          </div>

        </div>
        <div className="col-lg-8 d-none d-md-block">
          <img src={WelcomeImg} alt="oyap" className="img-fluid" style={{width: '100vw'}} />
        </div>
      </div>
    </div>

        </>
     );
}
 

const mapStateToProps = (state) => {
    return {
      isAuthenticated: state.auth.isAuthenticated,
      userRole: state.auth.role
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
        login: (creds) => dispatch(loginUser(creds)),
    };
  };

  
export default connect(mapStateToProps, mapDispatchToProps)(AdminLogin);