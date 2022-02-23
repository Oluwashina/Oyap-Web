
import React,{useState} from 'react';
import {FaBars } from 'react-icons/fa';
import AdminSidebar from '../../../components/AdminSidebar';
import './AdminWithdrawal.css'
// import RequestUser from '../../../assets/images/request.png'
import { connect } from 'react-redux';
import {useParams, useHistory} from 'react-router-dom'
import Moment from 'react-moment'
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { declineWithdrawalRequest } from '../../../store/actions/admin';

const AdminWithdrawRequest = ({requests, declineRequest,loader}) => {

    const [toggled, setToggled] = useState(false);

    const {id} = useParams()

    const history = useHistory()

    const request = requests.find(val => val.id === id);

    console.log(request)

    const handleToggleSidebar = (value) => {
        setToggled(value);
    };

    const Decline = (id) => {
        confirmAlert({
          title: "Confirm to submit",
          message: `You are about to decline this request, Do you wish to continue?`,
          buttons: [
            {
              label: "Yes",
              onClick: () => confirmDecline(id),
            },
            {
              label: "No",
            },
          ],
        });
    };

    const confirmDecline = (id) => {
        declineRequest(id)

        setTimeout(()=>{
            history.push('/admin/withdrawalrequest')
        }, 3000)
    };

    const Approve = (id) => {
        confirmAlert({
          title: "Confirm to submit",
          message: `You are about to approve this request, Do you wish to continue`,
          buttons: [
            {
                label: "Approve",
                onClick: () => FlutterwavePay(id),
            },
            {
              label: "No",
            }
          ],
        });
    };

    const FlutterwavePay = (id) => {
        // flutterPay(id)
        alert(id)
        // const res = {
        //     account_bank: account.bankCode,
        //     account_number: account.accountNumber,
        //     amount: trade.amount,
        //     narration: "Giftcard Payment from Tacit Exchange",
        //     currency: "NGN",
        //     debit_currency: "NGN",
        //   };
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
                                    <img src={request.userDetails.profilePic} alt="user" className="" style={{width: 140, height: 150}} />
                                </div>

                                <div>
                                    <h5 className="mb-0">{request.userDetails.firstName} {request.userDetails.lastName}</h5>
                                    <p className="mb-0 mt-1">{request.userDetails.role}</p>
                                    <p className="mt-1" style={{color: '#ED881C'}}>Join Date: <Moment format="MMMM Do, YYYY">
                                         {request.userDetails.createdAt}
                                         </Moment></p>
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
                                        <p>
                                        <Moment format="MMMM Do, YYYY">
                                         {request.createdAt}
                                         </Moment></p>
                                    </div>
                                </div>

                                <div className="mt-4" style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <div>
                                        <p>Status:</p>
                                    </div>

                                    <div>
                                        <p style={{color: '#ED881C'}}>{request.status}</p>
                                    </div>
                                </div>

                            </div>

                        {
                            request.status === "CANCELLED" && request.status === "COMPLETED" ?
                            <div className="requestBy mt-4">
                            <p className="text-center" style={{lineHeight: '21px'}}>
                               Click here to confirm when the request has been processed succesfully or cancelled
                           </p>

                           <div className="mt-2" style={{display: 'flex', justifyContent: 'space-between'}}>

                               <div>
                                    <button
                                   type="submit"
                                   disabled={loader}
                                    onClick={() => {
                                        Decline(request.id);
                                    }}
                                   className="btn btn-cancel btn-sm">Cancel Request</button>
                               </div>

                               <div>
                               <button
                                   type="submit"
                                   disabled={loader}
                                   onClick={() => {
                                    Approve(request.id);
                                }}
                                   className="btn btn-oyap btn-sm">Confirm Request</button>

                               </div>

                           </div>

                       </div>
                       :
                       ""
                        }
                           


                        </div>

                        <div className="col-lg-6 mt-lg-0 mt-5">
                                <p style={{fontWeight: 'bold'}}>Beneficiary Details</p>
                              {/* beneficiary details */}
                            <div className="" style={{background: ' rgba(196, 196, 196, 0.2)', borderRadius: '5px', padding: '30px 15px'}}>

                                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <div>
                                        <p className="mb-0" style={{fontWeight: 500, fontSize: 14}}>Request Id</p>
                                    </div>
                                    <div>
                                    <p className="mb-0" style={{fontWeight: 500, fontSize: 14}}>
                                    {request.id}</p> 
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
                                        NGN {request.amount}
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
                                    <p className="mb-0" style={{fontWeight: 600}}>{request.accountNumber}</p> 
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
                                    <p className="mb-0" style={{fontWeight: 600}}>{request.accountName}</p> 
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
                                    <p className="mb-0" style={{fontWeight: 500, fontSize: 14,}}>{request.bankName}</p> 
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
                                    <p className="mb-0" style={{fontWeight: 500, fontSize: 14,}}>{request.narration ? request.narration: "No narration"}</p> 
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
                                    <h6 className="mb-0" style={{fontWeight: 600, color: '#5B9223'}}>NGN {request.amount}</h6> 
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
 
const mapStateToProps = (state)=>{
    return{
        requests: state.admin.requests,
        loader: state.admin.declinedLoader
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        declineRequest: (id) => dispatch(declineWithdrawalRequest(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminWithdrawRequest);