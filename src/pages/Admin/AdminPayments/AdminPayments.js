import React, {useState} from 'react';
import {FaBars } from 'react-icons/fa';
import AdminSidebar from '../../../components/AdminSidebar';
import {connect} from 'react-redux'
import './AdminPayments.css'
import revenueIcon from '../../../assets/images/revenue.svg'
import ArrowUp from '../../../assets/images/arrow-up-circle.svg'
import ArrowDown from '../../../assets/images/arrow-down-circle.svg'
// import Moment from "react-moment";
import {Link} from 'react-router-dom'


const AdminPayments = () => {

    const [toggled, setToggled] = useState(false);

    const [initialTab, setTab] = useState(1);

    const handleToggleSidebar = (value) => {
        setToggled(value);
      };

      const [tabData] = useState([
        { id: 1, name: "tab-1", text: "All Transactions"},
        { id: 2, name: "tab-2", text: "Farmers Earnings" },
        { id: 3, name: "tab-3", text: "Logistics Earnings" },
        { id: 4, name: "tab-4", text: "Oyap Earnings" },
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

    //   const transactionsLayout = transactions.length ? (
    //     transactions.map((value) => {
            
    //       return (
    //      <div key={value.id} 
    //       className={value.type === 'Credit' ? "creditDiv mt-3" : "debitDiv mt-3"}
    //      >
    //         <div className="transactionRow">
    //             <div className="transactionColumn">
    //                <img 
    //                src={value.type === 'Credit' ? ArrowUp  : ArrowDown}
    //                 alt="transactionbar" width="25" height="25" />
    //             </div>
    //             <div className="nameColumn mt-lg-0 mt-3">
    //                 <p 
    //                  className={value.type === 'Credit' ? "mb-0 creditColor" : "mb-0 debitColor"}
    //                  >{value.status.toUpperCase()}</p>
    //             </div>
    //             <div className="transactionColumn mt-lg-0 mt-3">
    //                 <p className="mb-0" style={{color:'#3A5654'}}>
    //                     {value.type === 'Credit' ? "Credit" : "Debit"}
    //                 </p>
    //             </div>
    //             <div className="amountColumn mt-lg-0 mt-3">
    //                 <p 
    //                 className={value.type === 'Credit' ? "mb-0 creditColor" : "mb-0 debitColor"}
    //                  >
    //                     NGN {value.amount}</p>
    //             </div>
    //             <div className="doubleColumn mt-lg-0 mt-3">
    //                 <p className="mb-0" style={{color:'#3A5654'}}>
    //                      <Moment format="MMMM Do, YYYY">
    //                              {value.createdAt}
    //                         </Moment>
    //                 </p>
    //             </div>
    //             <div className="transactionColumn mt-lg-0 mt-3">
    //                 <Link to={value.type === 'Credit' ? `/farmers/transactions/credit/${value.id}` : `/farmers/transactions/debit/${value.id}`} className="mb-0" style={{color: '#5B9223', textDecoration: 'none'}}>View more</Link>
    //             </div>`
    //         </div>
    //     </div>

    //       );
    //     })
    //   ) : (
    //     <div className="mb-3">
    //        <div className="text-center mt-5">
    //             <p className="mb-0 mt-3" style={{fontStyle: 'italic'}}>No transactions available for display!</p>
    //          </div>
    //     </div>
    //   );



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

                <h5 className="mb-3 mt-3 mt-lg-0" style={{fontWeight: 'bold'}}>Wallet</h5>
                <header>

                    {/* wallett div */}
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="revenueDiv">
                                        <div style={{display: 'flex', alignItems: 'center'}}>
                                            <div>
                                                <p className="mb-0">Total Revenue</p>
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

                        {/* earnings section */}
                        <div className="row mt-3">
                            <div className="col-lg-4 mb-3 mb-lg-0">
                                <div className="earnings">
                                        <div>
                                            <p>Farmer's Earnings</p>
                                        </div>
                                        <div className="mt-2">
                                            <h5>NGN 620,000</h5>
                                        </div>
                                </div>
                            </div>

                            <div className="col-lg-4  mb-3 mb-lg-0">
                                <div className="earnings">
                                        <div>
                                            <p>Logistic's Earnings</p>
                                        </div>
                                        <div className="mt-2">
                                            <h5>NGN 350,000</h5>
                                        </div>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="earnings">
                                        <div>
                                            <p>Oyap Earnings</p>
                                        </div>
                                        <div className="mt-2">
                                            <h5>NGN 150,000</h5>
                                        </div>
                                </div>
                            </div>
                        </div>

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
                                    src={ArrowUp}
                                        alt="transactionbar" width="25" height="25" />
                                    </div>
                                    <div className="nameColumn mt-lg-0 mt-3">
                                        <p 
                                        className="mb-0 creditColor"
                                        >Courtney Henry</p>
                                    </div>
                                    <div className="transactionColumn mt-lg-0 mt-3">
                                        <p className="mb-0" style={{color:'#3A5654'}}>
                                            Credit
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
                                        <Link to='/admin/payments' className="mb-0" style={{color: '#5B9223', textDecoration: 'none'}}>View more</Link>
                                    </div>
                                </div>
                            </div>

                            {/* debit */}
                            <div 
                            className="debitDiv mt-3"
                            >
                                <div className="transactionRow">
                                    <div className="transactionColumn">
                                    <img 
                                    src={ArrowDown}
                                        alt="transactionbar" width="25" height="25" />
                                    </div>
                                    <div className="nameColumn mt-lg-0 mt-3">
                                        <p 
                                        className="mb-0 debitColor"
                                        >Courtney Henry</p>
                                    </div>
                                    <div className="transactionColumn mt-lg-0 mt-3">
                                        <p className="mb-0" style={{color:'#3A5654'}}>
                                            Debit
                                        </p>
                                    </div>
                                    <div className="amountColumn mt-lg-0 mt-3">
                                        <p 
                                        className="mb-0 debitColor" 
                                        >
                                            NGN 4,000</p>
                                    </div>
                                    <div className="doubleColumn mt-lg-0 mt-3">
                                        <p className="mb-0" style={{color:'#3A5654'}}>
                                            28 Dec, 2020
                                        </p>
                                    </div>
                                    <div className="transactionColumn mt-lg-0 mt-3">
                                        <Link to='/admin/payments' className="mb-0" style={{color: '#5B9223', textDecoration: 'none'}}>View more</Link>
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

const mapStateToProps = (state) =>{
    return{

    }
}

const mapDispatchToProps = (dispatch) =>{
    return{

    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(AdminPayments);