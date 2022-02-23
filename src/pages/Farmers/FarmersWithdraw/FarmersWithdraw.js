import React, {useState, useEffect} from 'react';
import SideBar from '../../../components/SideBar';
import {FaBars } from 'react-icons/fa';
import {Form, Formik} from 'formik'
import {withdrawValidator} from '../../../validationSchema/validator'
import {connect } from 'react-redux'
import { CloseWithdrawModal, getBanks, WithdrawAmount } from '../../../store/actions/farmers';
import { useHistory } from "react-router-dom";


const FarmersWithdraw = (props) => {

    const {handleWithdraw, success, handleClose, fetchBanks, banks} = props

    let history = useHistory()

    const [toggled, setToggled] = useState(false);
 
    const handleToggleSidebar = (value) => {
      setToggled(value);
    };

    const [modalShow, setModalShow] = useState(false);

     // Withdraw button
  const handleSubmit = async (values, setSubmitting) =>{
      var bankCode = values.bank
      var bankName = banks.find(pro=> pro.code === bankCode).name
        var res = {
          ...values,
          bankName
      }
       await handleWithdraw(res)
  }

  const handleProceed = () =>{
    setModalShow(modalShow ? false : true)
    history.push("/farmers/wallet");
    handleClose()
  }

  useEffect(()=>{
    fetchBanks();
  },[fetchBanks])

  useEffect(() =>{
    if(success){
      setModalShow(true)
    } 
}, [success, setModalShow])

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

            
    {/* modal show */}
  <div 
    className={ modalShow ? "modal fade show" : "modal fade" }
    data-backdrop="static"
     id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content" style={{background: '#fff', borderRadius: '10px'}} >
          <div className="" style={{padding: '20px 30px'}}>
            <h5 className="modal-title" id="exampleModalLabel">Processing Withdraw</h5>
          </div>
          <div style={{padding: '2px 30px', lineHeight: '25px'}}>
            Your withdraw order has been received and its been 
           processed. This might take up to to 24 hours
          </div>
          <div className="mt-2" style={{display: 'flex', justifyContent: 'flex-end', padding: '15px 20px'}} >
           <button type="button" 
            onClick={handleProceed}
            id="shutServer" className="btn btn-oyap" style={{width: '30%'}}>OK</button>
        </div>
          
        </div>
      </div>
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
                validationSchema={withdrawValidator}
                initialValues={{amount: "", accountNumber: "", bank: "",  accountName: "", narration: "",}}
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
                          {/* Amount */}
                          <div className="form-group mt-3">
                            <label htmlFor="email">Amount</label>
                            <input
                              className="form-control input-style"
                              placeholder="Amount"
                              type="text"
                              onBlur={handleBlur}
                              onChange={handleChange}
                              id="amount"
                              value={values.amount}
                            />
                            <small style={{ color: "#dc3545" }}>
                                        {touched.amount && errors.amount}
                               </small>
                          </div>
                             
               
                            {/* Account Number */}
                            <div className="form-group">
                              <label htmlFor="password">Account Number</label>
                              <input className="form-control input-style"
                              type="text"
                              id="accountNumber"
                              value={values.accountNumber}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              placeholder="Account Number" />
                               <small style={{ color: "#dc3545" }}>
                                  {touched.accountNumber && errors.accountNumber}
                              </small>
                            </div>


                            <div className="form-group">
                              <label htmlFor="bank">Bank</label>
                              <select
                                 name="bank"
                                 values={values.bank}
                                 onChange={handleChange}
                                    onBlur={handleBlur}
                                    className="form-control select-style" 
                                    id="bank">
                                  <option defaultValue="" disabled selected>--Select--</option>
                                    {banks.map((opt, index) => {
                                            return <option key={index} value={opt.code}>{opt.name}</option>
                                        })}

                                </select>
                                <small style={{ color: "#dc3545" }}>
                                  {touched.bank && errors.bank}
                              </small>
                            </div>

                             {/* Account name */}
                             <div className="form-group">
                              <label htmlFor="password">Account Name</label>
                              <input className="form-control input-style"
                              type="text"
                              id="accountName"
                              value={values.accountName}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              placeholder="Account Name" />
                               <small style={{ color: "#dc3545" }}>
                                  {touched.accountName && errors.accountName}
                              </small>
                            </div>


                             {/* Narration */}
                             <div className="form-group">
                              <label htmlFor="password">Narration</label>
                              <input className="form-control input-style"
                              type="text"
                              id="narration"
                              value={values.narration}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              placeholder="Narration" />
                               <small style={{ color: "#dc3545" }}>
                                  {touched.narration && errors.narration}
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

const mapStateToProps = (state) =>{
  return{
      success: state.farmers.withdrawsuccess,
      banks: state.farmers.banks
  }
}

const mapDispatchToProps =(dispatch) =>{
  return{
    handleWithdraw: (val) => dispatch(WithdrawAmount(val)),
    handleClose: (val) => dispatch(CloseWithdrawModal()),
    fetchBanks: (val) => dispatch(getBanks()),
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(FarmersWithdraw);