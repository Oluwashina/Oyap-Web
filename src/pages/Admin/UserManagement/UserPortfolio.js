import React, {useState, useEffect} from 'react';
import {FaBars } from 'react-icons/fa';
import AdminSidebar from '../../../components/AdminSidebar';
import '../AdminDashboard/AdminDashboard.css'
import './UserPortfolio.css'
import userProfile from '../../../assets/images/userProfile.svg'
import {useHistory} from 'react-router-dom'


// import Moment from "react-moment";
import Arrow from "../../../assets/images/arrow.svg";
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { cleanOrderStatus, getAdminOrderById, getAdminUserOrder, getUserStatistics, RestoreUser, SuspendUser } from '../../../store/actions/admin';
import Moment from "react-moment";


const UserPortfolio = (props) => {

    const {user, getStats, id, stats, getOrders, role, order, getOrder, order_fetched, cleanOrder, suspend, restore} = props


    const [toggled, setToggled] = useState(false);
    const history = useHistory()

    const [orderId, setOrderId] = useState("")

    const [status, setStatus] = useState(role === "Logistics" ? "Confirmed" : "Pending")

    useEffect(() =>{
        const value = {
            id: id,
            status: role === "Logistics" ? "Confirmed" :  "Pending"
        }
         getStats(id)
        getOrders(value)  
    }, [getStats, getOrders, id, role])


    const handleToggleSidebar = (value) => {
        setToggled(value);
      };

      const [initialTab, setTab] = useState(1);
    

      const [tabData] = useState([
        { id: 1, name: "tab-1", text: "New Orders"},
        { id: 2, name: "tab-2", text: "Pending Delivery" },
        { id: 3, name: "tab-3", text: "Completed Orders" }
      ]);

      const [logisticsData] = useState([
        { id: 1, name: "tab-1", text: "Pending Delivery" },
        { id: 2, name: "tab-2", text: "Completed Delivery" }
      ]);

         //   suspend and enable a user
    const HandleUser = (status, email,id) =>{
        let confirm_flag;
        let res;
        // check for the active state of the user
        if(status){
            confirm_flag = window.confirm("You are about to disapprove this user. Are you sure you want to continue ?")
            if(confirm_flag){
                res = {
                    email,
                    id
                }
                suspend(res)
            }
        }
        else{
            confirm_flag = window.confirm("You are about to approve this user. Are you sure you want to continue ?")
            if(confirm_flag){
                res = {
                        email,
                        id
                    }
                restore(res)
            }
        }
    }

      const handleToggle = (val) => {
        setTab(val)
        var values;
        switch(val){
            case 1:
                setStatus("Pending")
                values = {
                    id: props.match.params.id,
                    status: "Pending"
                }
                getOrders(values)
                break;
          case 2:
              setStatus("Confirmed")
             values = {
                id: props.match.params.id,
                status: "Confirmed"
            }
            getOrders(values)
              break;
          case 3:
              setStatus("Completed")
               values = {
                id: props.match.params.id,
                status: "Completed"
            }
            getOrders(values)
              break;
          default:
              break;
        }
    }

    const handleLogisticsToggle = (val) => {
        setTab(val)
        var values;
        switch(val){
            case 1:
                setStatus("Confirmed")
                values = {
                    id: props.match.params.id,
                    status: "Confirmed"
                }
                getOrders(values)
                break;
          case 2:
              setStatus("Completed")
              values = {
                id: props.match.params.id,
                status: "Completed"
            }
            getOrders(values)
              break;
          default:
              break;
        }
    }


  //   tab layout
  const tabLayout = role !== "Logistics" ?
  tabData.map((item) => (
      <div 
      key={item.id}
        className={initialTab === item.id ? "activeAdminTab tabSpace" : "adminTab tabSpace"}
        onClick={() => handleToggle(item.id)}
          >
        <p className="mb-0 text-center">{item.text}</p>
      </div>
    ))
       :
     logisticsData.map((item) => (
        <div 
        key={item.id}
          className={initialTab === item.id ? "activeAdminTab tabSpace" : "adminTab tabSpace"}
          onClick={() => handleLogisticsToggle(item.id)}
            >
          <p className="mb-0 text-center">{item.text}</p>
        </div>
     ));

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


    // order layout
    const OrderLayout = order.length ? (
        order.map((value) => {
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
                <h5 className="mb-0">No {status} Orders Placed Yet!</h5>
                <p className="mb-0 mt-3" style={{fontStyle: 'italic'}}>{status} orders will appear here as soon as you have any!</p>
             </div>
    
        </div>
      );
   

   const StatsLayout = (role) =>{
       switch(role){
        case 'Buyer':
            return (
                <div className="row mt-4">
                <div className="col-lg-3">
                    <div className="adminDash">
    
                        <div className="text-center adminPendingCircle">
                        </div>
    
                        <div className="text-center mt-2">
                            <h5 style={{fontWeight: 'bold'}} className="mb-0">
                                {stats ? stats.countNewOrder : "0"}
                            </h5>
                        </div>
    
                        <div className="text-center mt-1">
                            <p className="mb-0">New Orders</p>
                        </div>
    
                    </div>
                </div>
                <div className="col-lg-3 mt-lg-0 mt-3">
                    <div className="adminDash">
    
                        <div className="text-center adminPendingDeliveryCircle">
                        </div>
    
                        <div className="text-center mt-2">
                            <h5 style={{fontWeight: 'bold'}} className="mb-0">
                                {stats ?  stats.countConfirmedOrder : "0"}
                            </h5>
                        </div>
    
                        <div className="text-center mt-1">
                            <p className="mb-0">Pending Delivery</p>
                        </div>
    
                    </div>
                </div>
                <div className="col-lg-3 mt-lg-0 mt-3">
                    <div className="adminDash">
    
                        <div className="text-center adminCompletedOrdersCircle">
                        </div>
    
                        <div className="text-center mt-2">
                            <h5 style={{fontWeight: 'bold'}} className="mb-0">
                                {stats ? stats.countCompletedOrder : "0"}
                            </h5>
                        </div>
    
                        <div className="text-center mt-1">
                            <p className="mb-0">Completed Orders</p>
                        </div>
    
                    </div>
                </div>
                </div>
                )
        case 'Seller':
            return (
            <div className="row mt-4">
            <div className="col-lg-3">
                <div className="adminDash">

                    <div className="text-center adminPendingCircle">
                    </div>

                    <div className="text-center mt-2">
                        <h5 style={{fontWeight: 'bold'}} className="mb-0">
                            {stats ? stats.countNewOrder : "0"}
                        </h5>
                    </div>

                    <div className="text-center mt-1">
                        <p className="mb-0">New Orders</p>
                    </div>

                </div>
            </div>
            <div className="col-lg-3 mt-lg-0 mt-3">
                <div className="adminDash">

                    <div className="text-center adminPendingDeliveryCircle">
                    </div>

                    <div className="text-center mt-2">
                        <h5 style={{fontWeight: 'bold'}} className="mb-0">
                            {stats ? stats.countConfirmedOrder : "0"}
                        </h5>
                    </div>

                    <div className="text-center mt-1">
                        <p className="mb-0">Pending Delivery</p>
                    </div>

                </div>
            </div>
            <div className="col-lg-3 mt-lg-0 mt-3">
                <div className="adminDash">

                    <div className="text-center adminCompletedOrdersCircle">
                    </div>

                    <div className="text-center mt-2">
                        <h5 style={{fontWeight: 'bold'}} className="mb-0">
                            {stats ? stats.countCompletedOrder : "0"}
                        </h5>
                    </div>

                    <div className="text-center mt-1">
                        <p className="mb-0">Completed Orders</p>
                    </div>

                </div>
            </div>
            <div className="col-lg-3 mt-lg-0 mt-3">
                <div className="adminDash">

                    <div className="text-center adminPendingPaymentCircle">
                    </div>

                    <div className="text-center mt-2">
                        <h5 style={{fontWeight: 'bold'}} className="mb-0">
                            {stats ? stats.countAllProductSeller : "0"}
                        </h5>
                    </div>

                    <div className="text-center mt-1">
                        <p className="mb-0">Farm Produce</p>
                    </div>

                </div>
            </div>
             </div>
            )
        case 'Logistics':
            return  (
                <div className="row mt-4">
                <div className="col-lg-3 mt-lg-0 mt-3">
                    <div className="adminDash">
    
                        <div className="text-center adminPendingDeliveryCircle">
                        </div>
    
                        <div className="text-center mt-2">
                            <h5 style={{fontWeight: 'bold'}} className="mb-0">
                                {stats? stats.countConfirmedOrder : "0"}
                            </h5>
                        </div>
    
                        <div className="text-center mt-1">
                            <p className="mb-0">Pending Delivery</p>
                        </div>
    
                    </div>
                </div>
                <div className="col-lg-3 mt-lg-0 mt-3">
                    <div className="adminDash">
    
                        <div className="text-center adminCompletedOrdersCircle">
                        </div>
    
                        <div className="text-center mt-2">
                            <h5 style={{fontWeight: 'bold'}} className="mb-0">
                                {stats ? stats.countCompletedOrder : "0"}
                            </h5>
                        </div>
    
                        <div className="text-center mt-1">
                            <p className="mb-0">Completed Delivery</p>
                        </div>
    
                    </div>
                </div>
                </div>
                )
        case 'SubAdmin':
            return (
                <div className="">
                 </div>
                )
        default:
        return 'hello'
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
              <h5 className="mb-3 mt-3 mt-lg-0" style={{fontWeight: 'bold'}}>User Information</h5>
              <header> 

            {/* user info layout profile details */}
            <div className="mt-4 mt-lg-5">
                <h6 style={{fontWeight: 'bold'}}>{user ? user.firstName : "Anonymous"} {user ? user.lastName : "Anonymous"}</h6>
            </div>

            <div className="portfolioDiv mt-3">
                {/* image */}
                    <div style={{flex: 1}}>
                        <img src={user.profilePic ? user.profilePic : userProfile} style={{width: '80px', height: '80px', borderRadius: '50%'}} alt="user" />
                    </div>
                {/* details */}
                <div className="mt-lg-0 mt-4" style={{flex: 2}}>
                    <div style={{display: 'flex',}}>
                        <div style={{flex: 1}}>
                            <p className="mb-0" style={{fontSize: 14, fontWeight: 'bold'}}>Name:</p>
                        </div>
                        <div style={{flex: 1}}>
                            <p className="mb-0" style={{fontSize:  14}}>{user ? user.firstName : "Anonymous"} {user ? user.lastName : "Anonymous"}</p>
                        </div>
                    </div>
                    <div className="mt-2" style={{display: 'flex'}}>
                        <div style={{flex: 1}}>
                            <p className="mb-0" style={{fontSize: 14, fontWeight: 'bold'}}>Phone Number:</p>
                        </div>
                        <div style={{flex: 1}}>
                            <p className="mb-0" style={{fontSize: 14 }}>{user ? user.phoneNumber : ""}</p>
                        </div>
                    </div>
                    <div  className="mt-2" style={{display: 'flex'}}>
                        <div style={{flex: 1}}>
                            <p className="mb-0" style={{fontSize: 14, fontWeight: 'bold'}}>Email Address:</p>
                        </div>
                        <div style={{flex: 1}}>
                            <p className="mb-0" style={{fontSize: 14,}}>{user ? user.email : ""}</p>
                        </div>
                    </div>
                    <div  className="mt-2" style={{display: 'flex'}}>
                        <div style={{flex: 1}}>
                            <p className="mb-0" style={{fontSize: 14, fontWeight: 'bold'}}>Portfolio:</p>
                        </div>
                        <div style={{flex: 1}}>
                            <p className="mb-0" style={{fontSize: 14}}>{user ? user.role: ""}</p>
                        </div>
                    </div>
                </div>
                {/* block */}
                <div className="mt-lg-0 mt-4"  style={{flex: 2}}>
                    <div style={{display: 'flex', justifyContent:'center'}}>
                            <button
                            onClick={() => HandleUser(user.isEnabled, user.email, user.id)}
                             className={
                                user.isEnabled ? "btn btn-delete": "btn btn-oyap"
                            }>{
                                user.isEnabled ? "Suspend" : "Restore"
                            }</button>
                                                
                    </div>
                </div>
            </div>



                 {/* recent orders head */}
                 {
                     role === "SubAdmin" ?
                     ""
                     :
                     <div className="mt-4" style={{display: 'flex', justifyContent :'space-between'}}>
                        <div>
                            <p className="mb-0 recentStyle">Statistics</p>
                        </div>
                       
                    </div>
                 }
                

                    {StatsLayout(user.role)}
                    

                    {/* orders heading */}
                    {
                        role === "SubAdmin" ?
                        ""
                        :
                        <div className="mt-5">
                            <div style={{display: 'flex'}}>
                                {tabLayout}
                            </div>
                          </div>
                        }   
                    

                    {/* orders layout */}
                    {
                        role === "SubAdmin" ?
                        ""
                        :
                        <div className="newOrders mt-4">

                        {OrderLayout}                    

                    <div className="mt-4" style={{display: 'flex', justifyContent: 'flex-end'}}>
                        <Link to="/admin/orders" className="next-page page-space" style={{textDecoration: 'none', color: '#323335'}}>
                            <span>View All <i className="mdi mdi-chevron-right" style={{color: '#c4c4c4'}}></i></span>
                        </Link>

                    </div>

                         </div>

                    }
                   

             </header>
            </main>
          </div>
        </>
      );
}


const mapStateToProps = (state, ownProps) =>{
    const id = ownProps.match.params.id
    const users = state.admin.users
    const user = users.find(val => val.id === id);
    return{
        user: user,
        auth: state.auth.isAuthenticated,
        id: id,
        role: user.role,
        stats: state.admin.stats,
        order: state.admin.userOrder,
        order_fetched: state.admin.order_fetched
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        getStats: (id) => dispatch(getUserStatistics(id)),
        getOrders: (status) => dispatch(getAdminUserOrder(status)),
        getOrder: (id) => dispatch(getAdminOrderById(id)),
        cleanOrder: () => dispatch(cleanOrderStatus()),
        suspend: (val) => dispatch(SuspendUser(val)),
        restore: (val) => dispatch(RestoreUser(val)),
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(UserPortfolio);