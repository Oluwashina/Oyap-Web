import React from 'react';
import BuyerNavbar from '../../components/BuyerNavbar';
import './BuyerProfile.css'
import Profile from "../../assets/images/account.svg";
import {Form, Formik} from 'formik'
import {ProfileAddressValidator} from '../../validationSchema/validator'
import {updateProfile} from '../../store/actions/auth'
import {connect} from 'react-redux'
import BuyerFooter from '../../components/BuyerFooter';

const BuyerProfile = (props) => {

    const { firstname, lastname, email, phoneNumber, ProfileUpdate, billingDetails } = props


    // Update profile button
  const handleSubmit = async (values, setSubmitting) =>{
    console.log(values)
    await ProfileUpdate(values)
  }


    return ( 
        <>

        <BuyerNavbar/>  

        {/* breadcrumbs */}
          <div style={{background: ' rgba(196, 196, 196, 0.2)', padding: '10px'}}> 
                <div className="container">
                     <p className="mb-0" style={{fontSize: 14}}><span style={{color: '#7BC30A'}}>Home /</span> Account Overview</p>
                </div>
         </div> 

         {/* profile page */}
         <div className="container mt-5 mb-5">

            <div className="profileDiv">

                {/* image */}
                <div>
                    <img src={Profile} alt="profile pic" className="imgCircle" />
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
                <div className="mt-4">
                    <h5 className="mb-0" style={{fontWeight: 'bold'}}>Billing Details</h5>
                </div>
            </div>


            <div className="profileDetails">
            {/* address details form */}
            <Formik
                onSubmit={(values, {setSubmitting}) =>
                    handleSubmit(values, setSubmitting)
                    }
                validationSchema={ProfileAddressValidator}
                initialValues={{store: billingDetails.store ? billingDetails.store : "", street: billingDetails.address ? billingDetails.address : "", state: billingDetails.state ? billingDetails.state : "",  city: billingDetails.city ? billingDetails.city : "", phone: billingDetails.phone ? billingDetails.phone : ""}}
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
                            <div className="form-group">
                              <label htmlFor="password">Street Address</label>
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
                              <label htmlFor="password">Additional Phone Number</label>
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
            

         </div>
         

         <div style={{marginTop: '200px'}}>
                <BuyerFooter />
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
        billingDetails: state.auth.billingDetails
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        ProfileUpdate : (creds) => dispatch(updateProfile(creds)),  
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BuyerProfile);