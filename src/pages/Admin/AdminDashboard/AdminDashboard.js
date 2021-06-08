import React, {useState, useEffect} from 'react';
import {FaBars } from 'react-icons/fa';
import AdminSidebar from '../../../components/AdminSidebar';
import './AdminDashboard.css'
import {Link} from 'react-router-dom'
import Arrow from "../../../assets/images/arrow.svg";
import userProfile from '../../../assets/images/userProfile.svg'
import declineIcon from '../../../assets/images/x-circle.svg'
import approveIcon from '../../../assets/images/check-circle.svg'
import ViewIcon from '../../../assets/images/eye.svg'
import { getAdminDashboardCount, getAdminOrderById, getAdminRecentOrders, getAdminRecentUsers, cleanOrderStatus, enableUser, disableUser } from '../../../store/actions/admin';
import {connect} from 'react-redux'
import Moment from "react-moment";
import {useHistory} from 'react-router-dom'

const AdminDashboard = (props) => {

    const {auth, getCount, count, getRecentUsers, recentusers, 
        getRecentOrders, recentorders, getOrder, order_fetched, cleanOrder, handleApprove, handleDisApprove} = props

    const [toggled, setToggled] = useState(false);

    const [orderId, setOrderId] = useState("")

    const history = useHistory()


    const handleToggleSidebar = (value) => {
        setToggled(value);
      };

    const handleRoute = (id) =>{
        setOrderId(id)
        // get Order by id
        getOrder(id)
        
    }

    useEffect(() =>{
        if(order_fetched){
         history.push("/admin/order/"+orderId)
         cleanOrder()
        } 
    }, [order_fetched, history, cleanOrder, orderId])

    useEffect(() =>{
        if(auth){
          getCount()
          getRecentUsers()
          getRecentOrders()
        } 
    }, [auth, getCount, getRecentUsers, getRecentOrders])

    // mapping recent users
    const recentUsersLayout = recentusers.length ? (
        recentusers.map((value) => {
          return (
        <div key={value.id} className="userTable mb-3">
            {/* image */}
            <div className="userImage">
                <img src={value.profilePic ? value.profilePic : userProfile} alt="user" style={{width: '40px', height: '40px', borderRadius: '50%'}} />    
            </div>

            {/* name */}
            <div className="userName">
                <p className="mb-0" style={{color: 'rgba(50, 51, 53, 0.4)', fontSize: 15}}>{value.firstName} {value.lastName}</p>
            </div>

            {/* email */}
            <div className="userEmail">
                <p className="mb-0" style={{color: 'rgba(50, 51, 53, 0.4)', fontSize: 15}}>{value.email}</p>
            </div>

            {/* status */}
            <div className="userStatus">
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <div 
                      className={value.isEnabled ? "approveDiv mr-3" : "pendingApprove mr-3"}
                   ></div>
                    <p className="mb-0" style={{color: 'rgba(50, 51, 53, 0.4)', fontSize: 15}}>
                        {value.isEnabled ? "Approved" : "Pending Approval"}
                    </p>
                </div>
                
            </div>
            
            {/* actions to approve or reject */}
            <div className="userActions">
                <img src={value.isEnabled ? declineIcon : approveIcon} alt="decline"
                onClick={() => HandleUser(value.isEnabled, value.email)}
                 width="30" height="30" style={{cursor: 'pointer'}} />
                <img className="ml-3"
                onClick={() => ViewUser(value.id)}
                 src={ViewIcon} alt="decline" width="30" height="30" style={{cursor: 'pointer'}} />
            </div>
        </div>
    
          );
        })
      ) : (
        <div>
           <div className="text-center">
                <p className="mb-0" style={{fontStyle: 'italic'}}>No users available for display</p>
             </div>
        </div>
      );

    //   mapping recent orders
    const recentOrderLayout = recentorders.length ? (
        recentorders.map((value) => {
          return (
         <div key={value.id} className="mt-3 farmersOrders">
            <div>
                <div>
                    <img src={value.cartItem.productImages[0]} alt="cart" className="cartImage" />
                </div>
            </div>
    
            <div>
                <div className="ml-lg-3 ml-0">
                        <p className="mb-0" style={{fontWeight: 'bold'}}>{value.cartItem.productName}</p>
                        <p className="mb-0 mt-2" style={{fontSize: 14}}>Order date by: 
                             <Moment className="ml-1" format="MMMM Do, YYYY">
                                     {value.createdAt}
                                </Moment></p>
                        <p className="mb-0 mt-2" style={{fontSize: 14}}>Order time:
                                     <Moment className="ml-1" format="LT">
                                        {value.createdAt}
                                        </Moment></p>
                        <p className="mb-0 mt-2" style={{fontSize: 14}}>Quantity: {value.cartItem.cartQty}</p>
    
                        <div className="text-right mt-lg-0 mt-2">
                            <div onClick={()=>{handleRoute(value.id)}} style={{cursor: 'pointer'}} >
                                <img src={Arrow} alt="navigate" style={{width: 20, height: 20}} className="img-fluid" />
                            </div>         
                        </div>
                </div>
            </div>
    
            
        </div> 
          );
        })
      ) : (
        <div className="mb-3">
          <div className="text-center mt-5">
               <i className="mdi mdi-shopping-outline cartIcon" style={{color: '#5FA30E', fontSize: 50, background: 'none'}}></i>
          </div>
      
           <div className="text-center mt-3">
                <h5 className="mb-0">No New Orders Placed Yet!</h5>
                <p className="mb-0 mt-3" style={{fontStyle: 'italic'}}>New orders will appear here as soon as you have any!</p>
             </div>
    
        </div>
      );
    

    // viewing a user
      const ViewUser = (id) =>{
          alert(id)
          history.push('/admin/user/'+id)
      }

    //   suspend and enable a user
    const HandleUser = (status, email) =>{
        let confirm_flag;
        let res;
        // check for the active state of the user
        if(status){
            confirm_flag = window.confirm("You are about to disapprove this user. Are you sure you want to continue ?")
            if(confirm_flag){
                res = {
                    email
                }
                handleDisApprove(res)
            }
        }
        else{
            confirm_flag = window.confirm("You are about to approve this user. Are you sure you want to continue ?")
            if(confirm_flag){
                res = {
                        email
                    }
                handleApprove(res)
            }
        }
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
                        {recentOrderLayout}
                    </div>

                 
                    {/* recent orders head */}
                    <div className="mt-5" style={{display: 'flex', justifyContent :'space-between'}}>
                        <div>
                            <p className="mb-0 recentStyle">Recent Users</p>
                        </div>
                        <div>
                            <Link to="/admin/users" style={{textDecoration: 'none'}}>
                             <p className="mb-0" style={{color: '#465E82'}}>View All</p>
                            </Link>
                        </div>
                    </div>

                    {/* recent users layout */}
                    <div className="newOrders mt-4" style={{padding: '20px'}}>

                        {recentUsersLayout}

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
        count: state.admin.dashboardCount,
        recentusers: state.admin.recentUsers,
        recentorders: state.admin.recentOrders,
        order_fetched: state.admin.order_fetched
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        getCount: () => dispatch(getAdminDashboardCount()),
        getRecentUsers: () => dispatch(getAdminRecentUsers()),
        getRecentOrders: () => dispatch(getAdminRecentOrders()),
        getOrder: (id) => dispatch(getAdminOrderById(id)),
        cleanOrder: () => dispatch(cleanOrderStatus()),
        handleApprove: (val) => dispatch(enableUser(val)),
        handleDisApprove: (val) => dispatch(disableUser(val)),
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboard);