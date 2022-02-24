import React, {useEffect, useState} from 'react';
import {FaBars } from 'react-icons/fa';
import AdminSidebar from '../../../components/AdminSidebar';
import revenueIcon from '../../../assets/images/revenue.svg'
import ArrowUp from '../../../assets/images/arrow-up-circle.svg'
import ArrowDown from '../../../assets/images/arrow-down-circle.svg'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import { getWithdrawalRequests } from '../../../store/actions/admin';
import Moment from 'react-moment'

const AdminWithdrawal = ({fetchRequest, request}) => {
    const [toggled, setToggled] = useState(false);

    const [initialTab, setTab] = useState(1);

    const handleToggleSidebar = (value) => {
        setToggled(value);
      };

      useEffect(()=>{
        fetchRequest('Pending')
      },[fetchRequest])

      const [tabData] = useState([
        { id: 1, name: "tab-1", text: "Pending Requests", tag: "Pending"},
        { id: 2, name: "tab-2", text: "Completed Requests", tag: "Completed" },
        { id: 3, name: "tab-3", text: "Cancelled Requests", tag: "Cancelled" },
      ]);

        //   tab layout
    const tabLayout = tabData.map((item) => (
        <div 
        key={item.id}
          className={initialTab === item.id ? "activeAdminTab tabSpace" : "adminTab tabSpace"}
          onClick={() => handleToggle(item)}
            >
          <p className="mb-0 text-center">{item.text}</p>
        </div>
      ));

      const handleToggle = (val) => {
          const {id, tag} = val
        setTab(id)
        fetchRequest(tag)
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

                <h5 className="mb-3 mt-3 mt-lg-0" style={{fontWeight: 'bold'}}>Withdrawal</h5>
                <header>

                    
                    {/* wallet div */}
                    <div className="row">
                            <div className="col-lg-12">
                                <div className="revenueDiv">
                                        <div style={{display: 'flex', alignItems: 'center'}}>
                                            <div>
                                                <p className="mb-0">Total Available Money for Disbursement</p>
                                            </div>
                                            <div className="ml-3">
                                                <img src={revenueIcon} alt="revenue" style={{width: '20px', height: '20px'}} />
                                            </div>
                                            
                                        </div>
                                        <div className="revenueAmount mt-2">
                                            <h5>NGN 0</h5>
                                        </div>
                                </div>
                            </div>
                        </div>

                        {/* withdrawal request layout */}
                            {/* filters for transactions */}
                            <div className="mt-4" style={{display: 'flex', justifyContent :'space-between'}}>

                                <div style={{display: 'flex'}}>
                                    {tabLayout}
                                </div>

                            </div>

                    
                        {/* transactions layout */}
                        {/* credit */}

                  { request.length ? (
                    request.map((value) => {
                    return (
                        <div 
                        className="creditDiv mt-4"
                        >
                            <div className="transactionRow">
                                <div className="transactionColumn">
                                <img 
                                src={
                                    value.status === "COMPLETED" ? ArrowUp :ArrowDown}
                                    alt="transactionbar" width="25" height="25" />
                                </div>
                                <div className="nameColumn mt-lg-0 mt-3">
                                    <p 
                                    className="mb-0 creditColor"
                                    >{value.userDetails.firstName} {value.userDetails.lastName}</p>
                                </div>
                                <div className="transactionColumn mt-lg-0 mt-3">
                                    <p className="mb-0" style={{color:'#3A5654'}}>
                                        Withdraw
                                    </p>
                                </div>
                                <div className="amountColumn mt-lg-0 mt-3">
                                    <p 
                                    className="mb-0 creditColor" 
                                    >
                                        NGN {value.amount}</p>
                                </div>
                                <div className="doubleColumn mt-lg-0 mt-3">
                                    <p className="mb-0" style={{color:'#3A5654'}}>
                                    <Moment format="MMMM Do, YYYY">
                                            {value.createdAt}
                                         </Moment>
                                    </p>
                                </div>
                                <div className="transactionColumn mt-lg-0 mt-3">
                                    <Link to={`/admin/confirm-request/${value.id}`} className="mb-0" style={{color: '#5B9223', textDecoration: 'none'}}>Process Request</Link>
                                </div>
                            </div>
                      </div>
                    );
                    })
                ) : (
                    <div>
                    <div className="text-center mt-5">
                            <p className="mb-0" style={{fontStyle: 'italic'}}>No withdrawal request made yet</p>
                        </div>
                    </div>
                )
             }

                    {
                        request.length > 0 ? 
                        <div className="mt-4" style={{display: 'flex', justifyContent: 'flex-end'}}>
                            <Link to="/admin/withdrawalrequest" className="next-page page-space" style={{textDecoration: 'none', color: '#323335', background: '#F3F3F3'}}>
                                <span>View All <i className="mdi mdi-chevron-right" style={{color: '#5B9223'}}></i></span>
                            </Link>
                        </div>
                        :
                        ""
                    }
                        



                </header>
            </main>
         </div>


        </>
     );
}

const mapStateToProps = (state)=>{
    return{
        request: state.admin.requests
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        fetchRequest: (status) => dispatch(getWithdrawalRequests(status)),
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(AdminWithdrawal);