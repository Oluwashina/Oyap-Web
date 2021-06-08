
import React,{useState} from 'react';
import {FaBars } from 'react-icons/fa';
import AdminSidebar from '../../../components/AdminSidebar';
import './AdminWithdrawal.css'
import RequestUser from '../../../assets/images/request.png'

const AdminWithdrawRequest = () => {
    const [toggled, setToggled] = useState(false);


    const handleToggleSidebar = (value) => {
        setToggled(value);
      };

      

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

                <h5 className="mb-3 mt-3 mt-lg-0" style={{fontWeight: 'bold'}}>Process Withdrawal</h5>
                <header>

                    <div className="row mt-5">
                        <div className="col-lg-6">

                        <p style={{fontWeight: 'bold'}}>Request By</p>

                        <div className="requestBy">

                            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>

                                <div>   
                                    <img src={RequestUser} alt="user" className="" style={{width: 140, height: 150}} />
                                </div>

                                <div>
                                    <h5 className="mb-0">Courtney Henry</h5>
                                    <p className="mb-0 mt-1">Logistic</p>
                                    <p className="mt-1" style={{color: '#ED881C'}}>Join Date: 10/12/2020</p>
                                </div>


                            </div>
                        </div>

                             <p className="mt-5" style={{fontWeight: 'bold'}}>Request Status</p>

                            {/*  */}
                            <div className="requestBy">

                                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <div>
                                        <p>Date Requested</p>
                                    </div>

                                    <div>
                                        <p>10/03/2021</p>
                                    </div>
                                </div>

                                <div className="mt-4" style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <div>
                                        <p>Status:</p>
                                    </div>

                                    <div>
                                        <p style={{color: '#ED881C'}}>Pending</p>
                                    </div>
                                </div>

                            </div>

                            <div className="requestBy mt-4">
                                 <p className="text-center" style={{lineHeight: '21px'}}>
                                    Click here to confirm when the request has been processed succesfully or cancelled
                                </p>

                                <div className="mt-2" style={{display: 'flex', justifyContent: 'space-between'}}>

                                    <div>
                                         <button
                                        type="submit"
                                        className="btn btn-cancel btn-sm">Cancel Request</button>
                                    </div>

                                    <div>
                                    <button
                                        type="submit"
                                        className="btn btn-oyap btn-sm">Confirm Request</button>

                                    </div>

                                </div>


                            </div>


                        </div>

                        <div className="col-lg-6 mt-lg-0 mt-5">
                                <p style={{fontWeight: 'bold'}}>Beneficiary Details</p>
                              {/* beneficiary details */}
                            <div className="" style={{background: ' rgba(196, 196, 196, 0.2)', borderRadius: '5px', padding: '30px 15px'}}>

                                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <div>
                                        <p className="mb-0" style={{fontWeight: 500, fontSize: 14}}>Order Id</p>
                                    </div>
                                    <div>
                                    <p className="mb-0" style={{fontWeight: 500, fontSize: 14}}>
                                    123343432DHG</p> 
                                    </div>
                                </div>

                                <div>
                                    <hr className="mt-4 mb-0" style={{borderTop: '1px solid rgba(196, 196, 196, 0.5)'}} />
                                </div>

                                <div className="mt-4" style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <div>
                                        <p className="mb-0" style={{fontSize: 14, lineHeight: '21px'}}>Amount</p>
                                    </div>
                                    <div>
                                    <p className="mb-0" style={{fontWeight: 600, fontSize: 14,}}>
                                        NGN 40,000
                                            </p> 
                                    </div>
                                </div>

                                <div>
                                    <hr className="mt-4 mb-0" style={{borderTop: '1px solid rgba(196, 196, 196, 0.5)'}} />
                                </div>

                                <div className="mt-4" style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <div>
                                        <p className="mb-0" style={{fontSize: 14, lineHeight: '21px'}}>Account Number</p>
                                    </div>
                                    <div>
                                    <p className="mb-0" style={{fontWeight: 600}}>3042314777</p> 
                                    </div>
                                </div>


                                <div>
                                    <hr className="mt-4 mb-0" style={{borderTop: '1px solid rgba(196, 196, 196, 0.5)'}} />
                                </div>

                                <div className="mt-4" style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <div>
                                        <p className="mb-0" style={{fontSize: 14, lineHeight: '21px'}}>Account Name</p>
                                    </div>
                                    <div>
                                    <p className="mb-0" style={{fontWeight: 600}}>Courtney Henry</p> 
                                    </div>
                                </div>

                                <div>
                                    <hr className="mt-4 mb-0" style={{borderTop: '1px solid rgba(196, 196, 196, 0.5)'}} />
                                </div>

                                <div className="mt-4" style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <div>
                                        <p className="mb-0" style={{fontSize: 14, lineHeight: '21px'}}>Bank</p>
                                    </div>
                                    <div>
                                    <p className="mb-0" style={{fontWeight: 500, fontSize: 14,}}>Firstbank Nigeria</p> 
                                    </div>
                                </div>


                                <div>
                                    <hr className="mt-4 mb-0" style={{borderTop: '1px solid rgba(196, 196, 196, 0.5)'}} />
                                </div>

                                <div className="mt-4" style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <div>
                                        <p className="mb-0" style={{fontSize: 14, lineHeight: '21px'}}>Narration</p>
                                    </div>
                                    <div>
                                    <p className="mb-0" style={{fontWeight: 500, fontSize: 14,}}>Pay me my money</p> 
                                    </div>
                                </div>

                                <div>
                                    <hr className="mt-4 mb-0" style={{borderTop: '1px solid rgba(196, 196, 196, 0.5)'}} />
                                </div>


                                <div className="mt-4" style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <div>
                                        <p className="mb-0" style={{fontWeight: 700}}>TOTAL WITHDRAWAL</p>
                                    </div>
                                    <div>
                                    <h6 className="mb-0" style={{fontWeight: 600, color: '#5B9223'}}>NGN 40,000</h6> 
                                    </div>
                                </div>
                                </div>


                            </div>

                    </div>

                </header>
            </main>
            </div>


        </>
     );
}
 
export default AdminWithdrawRequest;