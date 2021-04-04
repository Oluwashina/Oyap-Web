import React, {useState} from 'react';
import SideBar from '../../../components/SideBar';
import {FaBars } from 'react-icons/fa';
import Profile from '../../../assets/images/profile.png'
import {Form, Formik} from 'formik'
import {ProfileAddressValidator} from '../../../validationSchema/validator'


const FarmersProfile = () => {
   
    const [toggled, setToggled] = useState(false);
 
    const handleToggleSidebar = (value) => {
      setToggled(value);
    };

    
    // Profile update
  const handleSubmit = async (values, setSubmitting) =>{
    console.log(values)
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

                
            <div className="profileDiv mt-5">
                    {/* image */}
                    <div>
                        <img src={Profile} alt="profile pic" className="imgCircle" />
                    </div>
             </div>

             <div className="profileDiv">
                {/* name */}
                <div className="mt-3">
                    <h6 className="mb-0">Jackson Adanimagbagbe</h6>
                </div>
            </div>

            <div className="profileDiv">
                {/* email */}
                <div className="mt-1">
                    <p className="mb-0" style={{fontSize: 14}}>Jackson24@gmail.com</p>
                </div>
            </div>

            <div className="profileDiv">
                {/* phone */}
                <div className="mt-1">
                    <p className="mb-0" style={{fontSize: 14}}>081623341222</p>
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
                initialValues={{store: "", street: "", state: "",  city: "", phone: ""}}
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
 
export default FarmersProfile;