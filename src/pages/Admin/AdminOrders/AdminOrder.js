import React, {useState, useEffect} from 'react';
import {FaBars } from 'react-icons/fa';
import AdminSidebar from '../../../components/AdminSidebar';
import {connect} from 'react-redux'
import Moment from "react-moment";
import Arrow from "../../../assets/images/arrow.svg";
import { cleanOrderStatus, getAdminDashboardCount, getAdminOrderById, getAdminOrders } from '../../../store/actions/admin';
import {useHistory} from 'react-router-dom'


const AdminOrderManage = (props) => {

    const {count, getCount, orders, getAdminOrders, auth, getOrder,order_fetched, cleanOrder} = props

    const history = useHistory()

    const [toggled, setToggled] = useState(false);

    const [initialTab, setTab] = useState(1);

    const [status, setStatus] = useState("Pending")

    const [orderId, setOrderId] = useState("")

    const handleToggleSidebar = (value) => {
        setToggled(value);
      };

      useEffect(() =>{
          let val = 'Pending'
        if(auth){
          getAdminOrders(val)
          getCount()
        } 
    }, [auth, getAdminOrders, getCount])

      const [tabData] = useState([
        { id: 1, name: "tab-1", text: "New Orders"},
        { id: 2, name: "tab-2", text: "Pending Delivery" },
        { id: 3, name: "tab-3", text: "Completed Orders" },
        { id: 4, name: "tab-4", text: "Cancelled Orders" },
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
          var values;
        switch(id){
            case 1:
                setStatus("Pending")
                values = 'Pending'
                getAdminOrders(values)
                break;
          case 2:
            setStatus("Confirmed")
              values = 'Confirmed'
              getAdminOrders(values)
              break;
          case 3:
            setStatus("Completed")
              values = 'Completed'
              getAdminOrders(values)
              break;
          case 4: 
          setStatus("Cancelled")
          values = 'Cancelled'
          getAdminOrders(values)
          break;
          default:
              break;
        }
    }

     //   mapping orders
     const OrderLayout = orders.length ? (
        orders.map((value) => {
          return (
         <div key={value.id} 
         className={orders.length > 1 ? "farmersOrders mb-3" : "farmersOrders"}
         >
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
                <h5 className="mb-0">No {status} Orders Yet!</h5>
                <p className="mb-0 mt-3" style={{fontStyle: 'italic'}}>{status} orders will appear here as soon as you have any!</p>
             </div>
    
        </div>
      );
    
  // viewong an order
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

                <h5 className="mb-3 mt-3 mt-lg-0" style={{fontWeight: 'bold'}}>Order Management</h5>
                <header>

                    

                    {/* counts */}
                    <div className="row">
                        {/* Admin */}
                        <div className="col-lg-3">
                            <div className="adminDash">

                                <div className="text-center adminPendingCircle">
                                </div>

                                <div className="text-center mt-2">
                                    <h5 style={{fontWeight: 'bold'}} className="mb-0">{count ? count.countPendingOrder: "200"}</h5>
                                </div>

                                <div className="text-center mt-1">
                                    <p className="mb-0">New Orders</p>
                                </div>

                            </div>
                        </div>
                        {/* Members */}
                        <div className="col-lg-3 mt-lg-0 mt-3">
                            <div className="adminDash">

                                <div className="text-center adminPendingDeliveryCircle">
                                </div>

                                <div className="text-center mt-2">
                                    <h5 style={{fontWeight: 'bold'}} className="mb-0">{count ? count.countPendingDelivery : "50"}</h5>
                                </div>

                                <div className="text-center mt-1">
                                    <p className="mb-0">Pending Delivery</p>
                                </div>

                            </div>
                        </div>
                        {/* farmers */}
                        <div className="col-lg-3 mt-lg-0 mt-3">
                            <div className="adminDash">

                                <div className="text-center adminCompletedOrdersCircle">
                                </div>

                                <div className="text-center mt-2">
                                    <h5 style={{fontWeight: 'bold'}} className="mb-0">{count ? count.countCompletedOrder : "44"}</h5>
                                </div>

                                <div className="text-center mt-1">
                                    <p className="mb-0">Completed Orders</p>
                                </div>

                            </div>
                        </div>
                        {/* logistics */}
                        <div className="col-lg-3 mt-lg-0 mt-3">
                            <div className="adminDash">

                                <div className="text-center adminPendingPaymentCircle"
                                style={{backgroundColor: 'rgba(255, 0, 0, 0.2)'}}>
                                </div>

                                <div className="text-center mt-2">
                                    <h5 style={{fontWeight: 'bold'}} className="mb-0">{count ? count.countCancelledOrder : "10"}</h5>
                                </div>

                                <div className="text-center mt-1">
                                    <p className="mb-0">Cancelled Orders</p>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* users layout */}
                     {/* recent orders head */}
                     <div className="mt-5" style={{display: 'flex', justifyContent :'space-between'}}>

                        <div style={{display: 'flex'}}>
                            {tabLayout}
                        </div>

                    </div>

                     {/* recent orders layout */}
                     <div className="newOrders mt-4">
                        {OrderLayout}
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
        orders: state.admin.adminOrders,
        order_fetched: state.admin.order_fetched
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        getCount: () => dispatch(getAdminDashboardCount()),
        getAdminOrders: (val) => dispatch(getAdminOrders(val)),
        getOrder: (id) => dispatch(getAdminOrderById(id)),
        cleanOrder: () => dispatch(cleanOrderStatus()),
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(AdminOrderManage);