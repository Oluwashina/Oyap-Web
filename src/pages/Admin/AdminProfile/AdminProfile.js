import React, {useState, useRef} from 'react';
import {FaBars } from 'react-icons/fa';
import AdminSidebar from '../../../components/AdminSidebar';
import {connect} from 'react-redux'
import Account from '../../../assets/images/account.svg'
import { UploadPhoto } from '../../../store/actions/auth';
import {Form, Formik} from 'formik'
import {ChangePasswordValidator} from '../../../validationSchema/validator'
import './AdminProfile.css'

const AdminProfile = (props) => {

    const { profileUrl, firstname, lastname, email, phoneNumber, photoloader, handlePicture} = props

    const [toggled, setToggled] = useState(false);
    
    const fileRef = useRef(null)

    const handleToggleSidebar = (value) => {
        setToggled(value);
      };

    const [passwordShown, setPasswordShown] = useState(false);
    const [passwordNew, setPasswordNew] = useState(false);
    const [passwordConfirm, setPasswordConfirm] = useState(false);


    
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
      };
    
      const togglePasswordNew = () => {
        setPasswordNew(passwordNew ? false : true);
      };
    
      const togglePasswordConfirm = () => {
        setPasswordConfirm(passwordConfirm ? false : true);
      };


      //   upload profile picture
const handleFile = () =>{
    var file = fileRef.current.files[0]
    // setfileName(fileRef.current.files[0].name)
    handlePicture(file)
  }

   // Password update
   const handleSubmit = async (values, setSubmitting) =>{
    console.log(values)
    // await ProfileUpdate(values)
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
            

              {/* content of page  layout*/}
              <h5 className="mb-3 mt-3 mt-lg-0" style={{fontWeight: 'bold'}}>Profile</h5>
              <header> 

                <div className="profileDiv mt-4">
                        {/* image */}
                        <div style={{position: 'relative'}}>
                            <img src={profileUrl ? profileUrl : Account} alt="profile pic" style={{width: '150px', height: '150px', borderRadius: '50%'}}/>
                        </div>
                </div>

                
             <div className="profileDiv mt-3">
                 
                 {/* edit button to change image */}
                 <div>
                            <label className={photoloader ? "file disabled" : "file"}
                            ><i className="mdi mdi-camera-outline mr-1"></i> Change Photo
                            <input type="file" size="60"
                            className="photo"
                                ref={fileRef}
                                 onChange={() => handleFile()}
                            />
                            </label> 
                 </div>
             </div>

             <div className="profileDiv">
                {/* name */}
                <div className="mt-3">
                    <h6 className="mb-0">{firstname ? firstname : "Admin"} {lastname ? lastname : "Admin"}</h6>
                </div>
            </div>

            <div className="profileDiv">
                {/* email */}
                <div className="mt-1">
                    <p className="mb-0" style={{fontSize: 14}}>{email ? email : "admin@gmail.com"}</p>
                </div>
            </div>

                <div className="profileDiv">
                    {/* phone */}
                    <div className="mt-1">
                        <p className="mb-0" style={{fontSize: 14}}>{phoneNumber ? phoneNumber : "080000admin"}</p>
                    </div>
                </div>

                {/* change password */}
                <div className="profileDiv">
                {/* details */}
                <div className="mt-5">
                    <h5 className="mb-0" style={{fontWeight: 'bold'}}>Change Password?</h5>
                </div>
                </div>

                <div className="profileDetails">

                
                      {/* form submission */}
              <Formik
                onSubmit={(values, { setSubmitting }) =>
                  handleSubmit(values, setSubmitting)
                }
                validationSchema={ChangePasswordValidator}
                initialValues={{ newpassword: "", password: "", confirm_password: "" }}
              >
                {({
                  handleChange,
                  isSubmitting,
                  handleSubmit,
                  handleBlur,
                  values,
                  touched,
                  errors,
                }) => (
                  <Form onSubmit={handleSubmit}>
                    {/* current password */}
                    <div className="user-lay">
                      <div
                        className="form-group mt-3"
                        style={{ position: "relative" }}
                      >
                        <input
                          type={passwordShown ? "text" : "password"}
                          name="password"
                          placeholder="Current Password"
                          style={{ color: "black" }}
                          className="form-control password-style"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          id="password"
                          value={values.password}
                        />
                        <div className="password_icon">
                          <i
                            style={{ fontSize: 18 }}
                            className={
                              passwordShown ? "mdi mdi-eye" : "mdi mdi-eye-off"
                            }
                            onClick={togglePasswordVisiblity}
                          ></i>
                        </div>
                        <small style={{ color: "#dc3545" }}>
                          {touched.password && errors.password}
                        </small>
                      </div>
                    </div>

                    {/* new password */}
                    <div className="user-lay">
                      <div
                        className="form-group mt-3"
                        style={{ position: "relative" }}
                      >
                        <input
                          type={passwordNew ? "text" : "password"}
                          className="form-control password-style"
                          name="newpassword"
                          placeholder="New Password"
                          style={{ color: "black" }}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          id="newpassword"
                          value={values.newpassword}
                        />
                        <div className="password_icon">
                          <i
                            style={{ fontSize: 18 }}
                            className={
                              passwordNew ? "mdi mdi-eye" : "mdi mdi-eye-off"
                            }
                            onClick={togglePasswordNew}
                          ></i>
                        </div>
                        <small style={{ color: "#dc3545" }}>
                          {touched.newpassword && errors.newpassword}
                        </small>
                      </div>
                    </div>

                    {/* confirm password */}
                    <div className="user-lay">
                      <div
                        className="form-group mt-3"
                        style={{ position: "relative" }}
                      >
                        <input
                          type={passwordConfirm ? "text" : "password"}
                          className="form-control password-style"
                          name="confirm_password"
                          placeholder="Confirm New Password"
                          style={{ color: "black" }}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          id="confirm_password"
                          value={values.confirm_password}
                        />
                        <div className="password_icon">
                          <i
                            style={{ fontSize: 18 }}
                            className={
                              passwordConfirm
                                ? "mdi mdi-eye"
                                : "mdi mdi-eye-off"
                            }
                            onClick={togglePasswordConfirm}
                          ></i>
                        </div>
                        <small style={{ color: "#dc3545" }}>
                          {touched.confirm_password && errors.confirm_password}
                        </small>
                      </div>
                    </div>

                    <div className="text-center mt-4">
                      <button 
                       type="submit"
                      disabled={isSubmitting} className="btn btn-oyap">
                        Save Password
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>


                </div>


             </header>
             </main>
          </div>

        </>
     );
}


const mapStateToProps = (state) =>{
    return{
        firstname: state.auth.firstname,
        lastname: state.auth.lastname,
        email: state.auth.email,
        phoneNumber: state.auth.phoneNumber,
        profileUrl: state.auth.profilePic,
        photoloader: state.auth.photoloader
    }
}

const mapDispatchToProps =(dispatch) =>{
    return{ 
        handlePicture: (values) => dispatch(UploadPhoto(values))
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(AdminProfile);