import React, {useState, useRef} from 'react';
import SideBar from '../../../components/SideBar';
import {FaBars } from 'react-icons/fa';
// import Profile from '../../../assets/images/profile.png'
import Account from '../../../assets/images/account.svg'
import {Form, Formik} from 'formik'
import {ProfileAddressValidator} from '../../../validationSchema/validator'
import {connect} from 'react-redux'
import { updateFarmersProfile, UploadPhoto } from '../../../store/actions/auth';
import './FarmersProfile.css'

const FarmersProfile = (props) => {

    const {firstname, lastname, email, phoneNumber, profileUrl, pickUpDetails, ProfileUpdate, handlePicture, photoloader} = props
   
    const [toggled, setToggled] = useState(false);

    const fileRef = useRef(null)
 
    const handleToggleSidebar = (value) => {
      setToggled(value);
    };

    
    // Profile update
  const handleSubmit = async (values, setSubmitting) =>{
    console.log(values)
    await ProfileUpdate(values)
  }

//   upload profile picture
const handleFile = () =>{
    var file = fileRef.current.files[0]
    // setfileName(fileRef.current.files[0].name)
    handlePicture(file)

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
                    <h5 style={{fontWeight: 'bold'}}>Profile</h5>
                </div>

                
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
                    <h6 className="mb-0">{firstname} {lastname}</h6>
                </div>
            </div>

            <div className="profileDiv">
                {/* email */}
                <div className="mt-1">
                    <p className="mb-0" style={{fontSize: 14}}>{email}</p>
                </div>
            </div>

            <div className="profileDiv">
                {/* phone */}
                <div className="mt-1">
                    <p className="mb-0" style={{fontSize: 14}}>{phoneNumber}</p>
                </div>
            </div>

            <div className="profileDiv">
                {/* details */}
                <div className="mt-5">
                    <h5 className="mb-0" style={{fontWeight: 'bold'}}>Other Details</h5>
                </div>
            </div>


            <div className="profileDetails">
            {/* address details form */}
            <Formik
                onSubmit={(values, {setSubmitting}) =>
                    handleSubmit(values, setSubmitting)
                    }
                validationSchema={ProfileAddressValidator}
                initialValues={{store: pickUpDetails.store ? pickUpDetails.store : "", street: pickUpDetails.address ? pickUpDetails.address : "", state: pickUpDetails.state ? pickUpDetails.state : "",  city: pickUpDetails.city ? pickUpDetails.city : "", phone: pickUpDetails.phone ? pickUpDetails.phone : ""}}
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
                            {/* Store Name */}
                          <div className="form-group mt-4">
                            <label htmlFor="email">Store Name (Optional)</label>
                            <input
                              className="form-control input-style"
                              placeholder=""
                              type="text"
                              onBlur={handleBlur}
                              onChange={handleChange}
                              id="store"
                              value={values.store}
                            />
                            <small style={{ color: "#dc3545" }}>
                                        {touched.store && errors.store}
                               </small>
                          </div>

                            {/* Street Address */}
                            <div className="form-group mt-3">
                              <label htmlFor="password">PickUp Address</label>
                              <input className="form-control input-style"
                              type="text"
                              id="street"
                              value={values.street}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              placeholder="" />
                               <small style={{ color: "#dc3545" }}>
                                  {touched.street && errors.street}
                              </small>
                            </div>

                            {/* State */}
                            <div className="form-group">
                              <label htmlFor="password">State</label>
                              <input className="form-control input-style"
                              type="text"
                              id="state"
                              value={values.state}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              placeholder="" />
                               <small style={{ color: "#dc3545" }}>
                                  {touched.state && errors.state}
                              </small>
                            </div>

                             {/* City */}
                             <div className="form-group">
                              <label htmlFor="password">City</label>
                              <input className="form-control input-style"
                              type="text"
                              id="city"
                              value={values.city}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              placeholder="" />
                               <small style={{ color: "#dc3545" }}>
                                  {touched.city && errors.city}
                              </small>
                            </div>


                             {/* phone number */}
                             <div className="form-group">
                              <label htmlFor="password">Other Phone Number</label>
                              <input className="form-control input-style"
                              type="text"
                              id="phone"
                              value={values.phone}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              placeholder="+234 800 000 0000" />
                               <small style={{ color: "#dc3545" }}>
                                  {touched.phone && errors.phone}
                              </small>
                            </div>
                        
                            <div className="text-center">
                            <button
                            type="submit"
                            disabled={isSubmitting}
                             className="btn btn-oyap text-uppercase mt-3">Update Profile</button>
                             </div>
                      </Form>
                  )}

              </Formik>

            </div>
   

         </header>
        
            
        </main>
          
     </div>
     );
}

const mapStateToProps = (state) =>{
    return{
        firstname: state.auth.firstname,
        lastname: state.auth.lastname,
        email: state.auth.email,
        phoneNumber: state.auth.phoneNumber,
        profileUrl: state.auth.profilePic,
        pickUpDetails: state.auth.pickUpDetails,
        photoloader: state.auth.photoloader
    }
}

const mapDispatchtoProps =(dispatch) =>{
    return{
        ProfileUpdate : (creds) => dispatch(updateFarmersProfile(creds)),  
        handlePicture: (values) => dispatch(UploadPhoto(values))
    }
}
 
export default connect(mapStateToProps, mapDispatchtoProps)(FarmersProfile);