import React, {useState} from 'react';
import SideBar from '../../../components/SideBar';
import {FaBars } from 'react-icons/fa';
import {Form, Formik} from 'formik'
import {registerValidator} from '../../../validationSchema/validator'


const FarmersWithdraw = () => {
   
    const [toggled, setToggled] = useState(false);
 
    const handleToggleSidebar = (value) => {
      setToggled(value);
    };

     // Sign Up button
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
                    <h5 style={{fontWeight: 'bold'}}>Withdraw</h5>
                </div>   

                <div className="row">
                    <div className="col-lg-8">


                    <Formik
                onSubmit={(values, {setSubmitting}) =>
                    handleSubmit(values, setSubmitting)
                    }
                validationSchema={registerValidator}
                initialValues={{firstName: "", lastName: "", phoneNumber: "",  email: "", password: "", confirm_password: ""}}
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
                          {/* First name */}
                          <div className="form-group mt-3">
                            <label htmlFor="email">Amount</label>
                            <input
                              className="form-control input-style"
                              placeholder="Amount"
                              type="text"
                              onBlur={handleBlur}
                              onChange={handleChange}
                              id="firstName"
                              value={values.firstName}
                            />
                            <small style={{ color: "#dc3545" }}>
                                        {touched.firstName && errors.firstName}
                               </small>
                          </div>
                             
               
                            {/* Account Number */}
                            <div className="form-group">
                              <label htmlFor="password">Account Number</label>
                              <input className="form-control input-style"
                              type="text"
                              id="lastName"
                              value={values.lastName}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              placeholder="Account Number" />
                               <small style={{ color: "#dc3545" }}>
                                  {touched.lastName && errors.lastName}
                              </small>
                            </div>

                            {/* Bank */}
                            <div className="form-group">
                              <label htmlFor="password">Bank</label>
                              <input className="form-control input-style"
                              type="text"
                              id="phoneNumber"
                              value={values.phoneNumber}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              placeholder="Bank" />
                               <small style={{ color: "#dc3545" }}>
                                  {touched.phoneNumber && errors.phoneNumber}
                              </small>
                            </div>

                             {/* Account name */}
                             <div className="form-group">
                              <label htmlFor="password">Account Name</label>
                              <input className="form-control input-style"
                              type="email"
                              id="email"
                              value={values.email}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              placeholder="Account Name" />
                               <small style={{ color: "#dc3545" }}>
                                  {touched.email && errors.email}
                              </small>
                            </div>


                             {/* Narration */}
                             <div className="form-group">
                              <label htmlFor="password">Narration</label>
                              <input className="form-control input-style"
                              type="password"
                              id="password"
                              value={values.password}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              placeholder="Narration" />
                               <small style={{ color: "#dc3545" }}>
                                  {touched.password && errors.password}
                              </small>
                            </div>

                            
                        <div className="text-center">
                            <button
                            type="submit"
                            disabled={isSubmitting}
                             className="btn btn-oyap text-uppercase mt-3">Withdraw</button>
                         </div>
                      </Form>
                  )}

              </Formik>

                    </div>
                </div>               

            </header>
        
            
        </main>
          
     </div>
     );
}
 
export default FarmersWithdraw;