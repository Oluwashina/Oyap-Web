import React, {useState, useEffect} from 'react';
import {FaBars } from 'react-icons/fa';
import AdminSidebar from '../../../components/AdminSidebar';
import './AdminDashboard.css'
import {Link} from 'react-router-dom'
import item5 from '../../../assets/images/item5.png'
import item1 from '../../../assets/images/item1.png'
// import Moment from "react-moment";
import Arrow from "../../../assets/images/arrow.svg";
import user1 from '../../../assets/images/user2.png'
import user2 from '../../../assets/images/profile.png'
import user3 from '../../../assets/images/seller1.png'
import declineIcon from '../../../assets/images/x-circle.svg'
import approveIcon from '../../../assets/images/check-circle.svg'
import ViewIcon from '../../../assets/images/eye.svg'
import { getAdminDashboardCount } from '../../../store/actions/admin';
import {connect} from 'react-redux'

const AdminDashboard = (props) => {

    const {auth, getCount, count} = props

    const [toggled, setToggled] = useState(false);


    const handleToggleSidebar = (value) => {
        setToggled(value);
      };

    const handleRoute = (id) =>{
        alert(id)
    }

    useEffect(() =>{
        if(auth){
          getCount()
        } 
    }, [auth, getCount])


      
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
            

              {/* content of page  layout*/}
              <h5 className="mb-3 mt-3 mt-lg-0" style={{fontWeight: 'bold'}}>Dashboard</h5>
              <header> 

                    {/* counts */}
                    <div className="row">
                        {/* pending orders */}
                        <div className="col-lg-3">
                            <div className="adminDash">

                                <div className="text-center adminPendingCircle">
                                </div>

                                <div className="text-center mt-2">
                                    <h5 style={{fontWeight: 'bold'}} className="mb-0">{count ? count.countPendingOrder : "0"}</h5>
                                </div>

                                <div className="text-center mt-1">
                                    <p className="mb-0">Pending Orders</p>
                                </div>

                            </div>
                        </div>
                        {/* pending delivery */}
                        <div className="col-lg-3 mt-lg-0 mt-3">
                            <div className="adminDash">

                                <div className="text-center adminPendingDeliveryCircle">
                                </div>

                                <div className="text-center mt-2">
                                    <h5 style={{fontWeight: 'bold'}} className="mb-0">{count ? count.countPendingDelivery : "0"}</h5>
                                </div>

                                <div className="text-center mt-1">
                                    <p className="mb-0">Pending Delivery</p>
                                </div>

                            </div>
                        </div>
                        {/* completed orders */}
                        <div className="col-lg-3 mt-lg-0 mt-3">
                            <div className="adminDash">

                                <div className="text-center adminCompletedOrdersCircle">
                                </div>

                                <div className="text-center mt-2">
                                    <h5 style={{fontWeight: 'bold'}} className="mb-0">{count ? count.countCompletedOrder  : "0"}</h5>
                                </div>

                                <div className="text-center mt-1">
                                    <p className="mb-0">Completed Orders</p>
                                </div>

                            </div>
                        </div>
                        {/* pending payments */}
                        <div className="col-lg-3 mt-lg-0 mt-3">
                            <div className="adminDash">

                                <div className="text-center adminPendingPaymentCircle">
                                </div>

                                <div className="text-center mt-2">
                                    <h5 style={{fontWeight: 'bold'}} className="mb-0">{count ? count.countPendingPayment : "0"}</h5>
                                </div>

                                <div className="text-center mt-1">
                                    <p className="mb-0">Pending Payments</p>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* recent orders head */}
                    <div className="mt-5" style={{display: 'flex', justifyContent :'space-between'}}>
                        <div>
                            <p className="mb-0 recentStyle">Recent Orders</p>
                        </div>
                        <div>
                            <Link to="/admin" style={{textDecoration: 'none'}}>
                             <p className="mb-0" style={{color: '#7BC30A'}}>View All</p>
                            </Link>
                        </div>
                    </div>

                    {/* recent orders layout */}
                    <div className="newOrders mt-4">
                        {/* 1st */}
                        <div className="mt-3 farmersOrders">
                         <div>
                            <div>
                                <img src={item5} alt="cart" className="cartImage" />
                            </div>
                        </div>

                        <div style={{flex: 4}}>
                        <div className="ml-0">
                                <p className="mb-0" style={{fontWeight: 'bold'}}>1 truck load of nigerian grade fresh maize</p>
                                <p className="mb-0 mt-2" style={{fontSize: 14}}>Order date by: 
                                             23rd sept, 2020</p>
                                <p className="mb-0 mt-2" style={{fontSize: 14}}>Order time: 
                                    2:00pm</p>
                                <p className="mb-0 mt-2" style={{fontSize: 14}}>Quantity: 2</p>

                                <div className="text-right mt-lg-0 mt-2">
                                    <div onClick={()=>{handleRoute(2)}} style={{cursor: 'pointer'}}>
                                        <img src={Arrow} alt="navigate" style={{width: 20, height: 20}} className="img-fluid" />
                                    </div>         
                                </div>
                        </div>
                    </div>

                    </div>
                    {/* 2nd */}
                    <div className="mt-3 farmersOrders">
                         <div>
                            <div>
                                <img src={item5} alt="cart" className="cartImage" />
                            </div>
                        </div>

                        <div style={{flex: 4}}>
                        <div className="ml-0">
                                <p className="mb-0" style={{fontWeight: 'bold'}}>1 truck load of nigerian grade fresh maize</p>
                                <p className="mb-0 mt-2" style={{fontSize: 14}}>Order date by: 
                                             23rd sept, 2020</p>
                                <p className="mb-0 mt-2" style={{fontSize: 14}}>Order time: 
                                    2:00pm</p>
                                <p className="mb-0 mt-2" style={{fontSize: 14}}>Quantity: 2</p>

                                <div className="text-right mt-lg-0 mt-2">
                                    <div onClick={()=>{handleRoute(2)}} style={{cursor: 'pointer'}}>
                                        <img src={Arrow} alt="navigate" style={{width: 20, height: 20}} className="img-fluid" />
                                    </div>         
                                </div>
                        </div>
                    </div>

                    </div>

                    {/* 3rd */}
                    <div className="mt-3 farmersOrders">
                         <div>
                            <div>
                                <img src={item1} alt="cart" className="cartImage" />
                            </div>
                        </div>

                        <div style={{flex: 4}}>
                        <div className="ml-0">
                                <p className="mb-0" style={{fontWeight: 'bold'}}>1 truck load of nigerian grade fresh maize</p>
                                <p className="mb-0 mt-2" style={{fontSize: 14}}>Order date by: 
                                             23rd sept, 2020</p>
                                <p className="mb-0 mt-2" style={{fontSize: 14}}>Order time: 
                                    2:00pm</p>
                                <p className="mb-0 mt-2" style={{fontSize: 14}}>Quantity: 2</p>

                                <div className="text-right mt-lg-0 mt-2">
                                    <div onClick={()=>{handleRoute(2)}} style={{cursor: 'pointer'}}>
                                        <img src={Arrow} alt="navigate" style={{width: 20, height: 20}} className="img-fluid" />
                                    </div>         
                                </div>
                        </div>
                    </div>

                    </div>

                 </div>

                 
                    {/* recent orders head */}
                    <div className="mt-5" style={{display: 'flex', justifyContent :'space-between'}}>
                        <div>
                            <p className="mb-0 recentStyle">Recent Users</p>
                        </div>
                        <div>
                            <Link to="/admin" style={{textDecoration: 'none'}}>
                             <p className="mb-0" style={{color: '#465E82'}}>View All</p>
                            </Link>
                        </div>
                    </div>

                    {/* recent users layout */}
                    <div className="newOrders mt-4" style={{padding: '20px'}}>

                    {/* ist */}
                        <div className="userTable">
                            {/* image */}
                            <div className="userImage">
                                <img src={user1} alt="user" style={{width: '40px', height: '40px', borderRadius: '50%'}} />    
                            </div>

                            {/* name */}
                            <div className="userName">
                                <p className="mb-0" style={{color: 'rgba(50, 51, 53, 0.4)', fontSize: 15}}>Cameron Williamson</p>
                            </div>

                            {/* email */}
                            <div className="userEmail">
                                <p className="mb-0" style={{color: 'rgba(50, 51, 53, 0.4)', fontSize: 15}}>cameron@gmail.com</p>
                            </div>

                            {/* status */}
                            <div className="userStatus">
                                <div style={{display: 'flex', alignItems: 'center'}}>
                                    <div className="approveDiv mr-3"></div>
                                    <p className="mb-0" style={{color: 'rgba(50, 51, 53, 0.4)', fontSize: 15}}>Approved</p>
                                </div>
                                
                            </div>
                            
                            {/* actions to approve or reject */}
                            <div className="userActions">
                                <img src={declineIcon} alt="decline" width="30" height="30" style={{cursor: 'pointer'}} />
                                <img className="ml-3" src={ViewIcon} alt="decline" width="30" height="30" style={{cursor: 'pointer'}} />
                            </div>
                        </div>

                        {/* 2nd */}
                        <div className="userTable mt-3">
                            {/* image */}
                            <div className="userImage">
                                <img src={user2} alt="user" style={{width: '40px', height: '40px', borderRadius: '50%'}} />    
                            </div>

                            {/* name */}
                            <div className="userName">
                                <p className="mb-0" style={{color: 'rgba(50, 51, 53, 0.4)', fontSize: 15}}>Jerome Bell</p>
                            </div>

                            {/* email */}
                            <div className="userEmail">
                                <p className="mb-0" style={{color: 'rgba(50, 51, 53, 0.4)', fontSize: 15}}>bell@gmail.com</p>
                            </div>

                            {/* status */}
                            <div className="userStatus">
                                <div style={{display: 'flex', alignItems: 'center'}}>
                                    <div className="pendingApprove mr-3"></div>
                                    <p className="mb-0" style={{color: 'rgba(50, 51, 53, 0.4)', fontSize: 15}}>Pending Approval</p>
                                </div>
                                
                            </div>
                            
                            {/* actions to approve or reject */}
                            <div className="userActions">
                                <img src={approveIcon} alt="decline" width="30" height="30" style={{cursor: 'pointer'}} />
                                <img className="ml-3" src={ViewIcon} alt="decline" width="30" height="30" style={{cursor: 'pointer'}} />
                            </div>
                        </div>

                        {/* 3rd */}
                        <div className="userTable mt-3">
                            {/* image */}
                            <div className="userImage">
                                <img src={user3} alt="user" style={{width: '40px', height: '40px', borderRadius: '50%'}} />    
                            </div>

                            {/* name */}
                            <div className="userName">
                                <p className="mb-0" style={{color: 'rgba(50, 51, 53, 0.4)', fontSize: 15}}>Cameron Williamson</p>
                            </div>

                            {/* email */}
                            <div className="userEmail">
                                <p className="mb-0" style={{color: 'rgba(50, 51, 53, 0.4)', fontSize: 15}}>cameron@gmail.com</p>
                            </div>

                            {/* status */}
                            <div className="userStatus">
                                <div style={{display: 'flex', alignItems: 'center'}}>
                                    <div className="approveDiv mr-3"></div>
                                    <p className="mb-0" style={{color: 'rgba(50, 51, 53, 0.4)', fontSize: 15}}>Approved</p>
                                </div>
                                
                            </div>
                            
                            {/* actions to approve or reject */}
                            <div className="userActions">
                                <img src={declineIcon} alt="decline" width="30" height="30" style={{cursor: 'pointer'}} />
                                <img className="ml-3" src={ViewIcon} alt="decline" width="30" height="30" style={{cursor: 'pointer'}} />
                            </div>
                        </div>

                    </div>

             </header>

             </main>

         </div>
        </>
    );
}

const mapStateToProps = (state) =>{
    return{
        auth: state.auth.isAuthenticated,
        count: state.admin.dashboardCount
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        getCount: () => dispatch(getAdminDashboardCount())
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboard);