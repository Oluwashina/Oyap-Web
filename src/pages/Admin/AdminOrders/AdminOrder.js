import React, {useState, useEffect} from 'react';
import {FaBars } from 'react-icons/fa';
import AdminSidebar from '../../../components/AdminSidebar';
import {connect} from 'react-redux'
import Moment from "react-moment";
import Arrow from "../../../assets/images/arrow.svg";
import { getAdminRecentOrders } from '../../../store/actions/admin';


const AdminOrderManage = (props) => {

    const {count, recentorders, getRecentOrders, auth} = props

    const [toggled, setToggled] = useState(false);

    const [initialTab, setTab] = useState(1);

    const handleToggleSidebar = (value) => {
        setToggled(value);
      };

      useEffect(() =>{
        if(auth){
          getRecentOrders()
        } 
    }, [auth, getRecentOrders])

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
        switch(id){
            case 1:
                setTab(id)
                // getUser('Buyer')
                break;
          case 2:
              setTab(id);
            //   getUser('Seller')
              break;
          case 3:
              setTab(id);
            //   getUser('Logistics')
              break;
          case 4: 
          setTab(id);
        //   getUser('SubAdmin')
          break;
          default:
              break;
        }
    }

     //   mapping orders
     const recentOrderLayout = recentorders.length ? (
        recentorders.map((value) => {
          return (
         <div key={value.id} 
         className={recentorders.length > 1 ? "farmersOrders mb-3" : "farmersOrders"}
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
                <h5 className="mb-0">No New Orders Placed Yet!</h5>
                <p className="mb-0 mt-3" style={{fontStyle: 'italic'}}>New orders will appear here as soon as you have any!</p>
             </div>
    
        </div>
      );
    
  // viewong an order
  const handleRoute = (id) =>{
    alert(id)
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
                                    <h5 style={{fontWeight: 'bold'}} className="mb-0">{count ? count.countAdmin: "200"}</h5>
                                </div>

                                <div className="text-center mt-1">
                                    <p className="mb-0">New Delivery</p>
                                </div>

                            </div>
                        </div>
                        {/* Members */}
                        <div className="col-lg-3 mt-lg-0 mt-3">
                            <div className="adminDash">

                                <div className="text-center adminPendingDeliveryCircle">
                                </div>

                                <div className="text-center mt-2">
                                    <h5 style={{fontWeight: 'bold'}} className="mb-0">{count ? count.countBuyer : "50"}</h5>
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
                                    <h5 style={{fontWeight: 'bold'}} className="mb-0">{count ? count.countSeller : "44"}</h5>
                                </div>

                                <div className="text-center mt-1">
                                    <p className="mb-0">Completed Delivery</p>
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
                                    <h5 style={{fontWeight: 'bold'}} className="mb-0">{count ? count.countLogistics : "10"}</h5>
                                </div>

                                <div className="text-center mt-1">
                                    <p className="mb-0">Cancelled Delivery</p>
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
                        {recentOrderLayout}
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
        recentorders: state.admin.recentOrders,
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        getRecentOrders: () => dispatch(getAdminRecentOrders()),
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(AdminOrderManage);