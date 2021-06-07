import React, {useState} from 'react';
import {FaBars } from 'react-icons/fa';
import AdminSidebar from '../../../components/AdminSidebar';
import revenueIcon from '../../../assets/images/revenue.svg'
// import ArrowUp from '../../../assets/images/arrow-up-circle.svg'
import ArrowDown from '../../../assets/images/arrow-down-circle.svg'
// import Moment from "react-moment";
import {Link} from 'react-router-dom'

const AdminWithdrawal = () => {
    const [toggled, setToggled] = useState(false);

    const [initialTab, setTab] = useState(1);

    const handleToggleSidebar = (value) => {
        setToggled(value);
      };

      const [tabData] = useState([
        { id: 1, name: "tab-1", text: "Pending Requests"},
        { id: 2, name: "tab-2", text: "Completed Requests" },
        { id: 3, name: "tab-3", text: "Cancelled Requests" },
      ]);

        //   tab layout
    const tabLayout = tabData.map((item) => (
        <div 
        key={item.id}
          className={initialTab === item.id ? "activeAdminTab tabSpace" : "adminTab tabSpace"}
          onClick={() => handleToggle(item.id)}
            >
          <p className="mb-0 text-center">{item.text}</p>
        </div>
      ));

      const handleToggle = (id) => {
        setTab(id)
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
                                            <h5>NGN 1,020,000</h5>
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
                        <div 
                            className="creditDiv mt-4"
                            >
                                <div className="transactionRow">
                                    <div className="transactionColumn">
                                    <img 
                                    src={ArrowDown}
                                        alt="transactionbar" width="25" height="25" />
                                    </div>
                                    <div className="nameColumn mt-lg-0 mt-3">
                                        <p 
                                        className="mb-0 creditColor"
                                        >Courtney Henry</p>
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
                                            NGN 4,000</p>
                                    </div>
                                    <div className="doubleColumn mt-lg-0 mt-3">
                                        <p className="mb-0" style={{color:'#3A5654'}}>
                                            28 Dec, 2020
                                        </p>
                                    </div>
                                    <div className="transactionColumn mt-lg-0 mt-3">
                                        <Link to='/admin/payments' className="mb-0" style={{color: '#5B9223', textDecoration: 'none'}}>Process Request</Link>
                                    </div>
                                </div>
                     </div>

                     {/* 2nd */}
                     <div 
                            className="creditDiv mt-4"
                            >
                                <div className="transactionRow">
                                    <div className="transactionColumn">
                                    <img 
                                    src={ArrowDown}
                                        alt="transactionbar" width="25" height="25" />
                                    </div>
                                    <div className="nameColumn mt-lg-0 mt-3">
                                        <p 
                                        className="mb-0 creditColor"
                                        >Jackson Pelman</p>
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
                                            NGN 4,000</p>
                                    </div>
                                    <div className="doubleColumn mt-lg-0 mt-3">
                                        <p className="mb-0" style={{color:'#3A5654'}}>
                                            28 Dec, 2020
                                        </p>
                                    </div>
                                    <div className="transactionColumn mt-lg-0 mt-3">
                                        <Link to='/admin/payments' className="mb-0" style={{color: '#5B9223', textDecoration: 'none'}}>Process Request</Link>
                                    </div>
                                </div>
                            </div>

                        <div className="mt-4" style={{display: 'flex', justifyContent: 'flex-end'}}>
                            <Link to="/admin/logistics" className="next-page page-space" style={{textDecoration: 'none', color: '#323335', background: '#F3F3F3'}}>
                                <span>View All <i className="mdi mdi-chevron-right" style={{color: '#5B9223'}}></i></span>
                            </Link>
                        </div>



                </header>
            </main>
         </div>


        </>
     );
}
 
export default AdminWithdrawal;