import React, {useState} from 'react';
import {FaBars } from 'react-icons/fa';
import AdminSidebar from '../../../components/AdminSidebar';
import '../AdminDashboard/AdminDashboard.css'
import './UserPortfolio.css'
import user from '../../../assets/images/peterson.svg'
import item5 from '../../../assets/images/item5.png'
import item1 from '../../../assets/images/item1.png'
// import Moment from "react-moment";
import Arrow from "../../../assets/images/arrow.svg";
import {Link} from 'react-router-dom'

const UserPortfolio = () => {

    const [toggled, setToggled] = useState(false);


    const handleToggleSidebar = (value) => {
        setToggled(value);
      };

      const [initialTab, setTab] = useState(1);
    

      const [tabData] = useState([
        { id: 1, name: "tab-1", text: "New Orders"},
        { id: 2, name: "tab-2", text: "Pending Delivery" },
        { id: 3, name: "tab-3", text: "Completed Orders" }
      ]);

      const handleToggle = (id) => {
        switch(id){
            case 1:
                setTab(id)
                break;
          case 2:
              setTab(id);
              break;
          case 3:
              setTab(id);
              break;
          case 4: 
          setTab(id);
          break;
          default:
              break;
        }
    }

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
            

              {/* content of page  layout*/}
              <h5 className="mb-3 mt-3 mt-lg-0" style={{fontWeight: 'bold'}}>User Information</h5>
              <header> 

            {/* user info layout profile details */}
            <div className="mt-4 mt-lg-5">
                <h6 style={{fontWeight: 'bold'}}>Peterson Aromole</h6>
            </div>

            <div className="portfolioDiv mt-3">
                {/* image */}
                    <div style={{flex: 1}}>
                        <img src={user} style={{width: '80px', height: '80px', borderRadius: '50%'}} alt="user" />
                    </div>
                {/* details */}
                <div className="mt-lg-0 mt-4" style={{flex: 2}}>
                    <div style={{display: 'flex',}}>
                        <div style={{flex: 1}}>
                            <p className="mb-0" style={{fontSize: 14, fontWeight: 'bold'}}>Name:</p>
                        </div>
                        <div style={{flex: 1}}>
                            <p className="mb-0" style={{fontSize:  14}}>Jackson Aromole</p>
                        </div>
                    </div>
                    <div className="mt-2" style={{display: 'flex'}}>
                        <div style={{flex: 1}}>
                            <p className="mb-0" style={{fontSize: 14, fontWeight: 'bold'}}>Phone Number:</p>
                        </div>
                        <div style={{flex: 1}}>
                            <p className="mb-0" style={{fontSize: 14 }}>0815433445223</p>
                        </div>
                    </div>
                    <div  className="mt-2" style={{display: 'flex'}}>
                        <div style={{flex: 1}}>
                            <p className="mb-0" style={{fontSize: 14, fontWeight: 'bold'}}>Email Address:</p>
                        </div>
                        <div style={{flex: 1}}>
                            <p className="mb-0" style={{fontSize: 14,}}>jacksonweb@gmail.com</p>
                        </div>
                    </div>
                    <div  className="mt-2" style={{display: 'flex'}}>
                        <div style={{flex: 1}}>
                            <p className="mb-0" style={{fontSize: 14, fontWeight: 'bold'}}>Portfolio:</p>
                        </div>
                        <div style={{flex: 1}}>
                            <p className="mb-0" style={{fontSize: 14}}>Farmer</p>
                        </div>
                    </div>
                </div>
                {/* block */}
                <div className="mt-lg-0 mt-4"  style={{flex: 2}}>
                    <div style={{display: 'flex', justifyContent:'center'}}>
                            <button className="btn btn-delete mr-3">Delete</button>
                            <button className="btn btn-blocking">Block</button>                       
                    </div>
                </div>
            </div>



                 {/* recent orders head */}
                 <div className="mt-4" style={{display: 'flex', justifyContent :'space-between'}}>
                        <div>
                            <p className="mb-0 recentStyle">Statistics</p>
                        </div>
                       
                    </div>
                    
                    {/* counts */}
                    <div className="row mt-4">
                        {/* pending orders */}
                        <div className="col-lg-3">
                            <div className="adminDash">

                                <div className="text-center adminPendingCircle">
                                </div>

                                <div className="text-center mt-2">
                                    <h5 style={{fontWeight: 'bold'}} className="mb-0">50</h5>
                                </div>

                                <div className="text-center mt-1">
                                    <p className="mb-0">New Orders</p>
                                </div>

                            </div>
                        </div>
                        {/* pending delivery */}
                        <div className="col-lg-3 mt-lg-0 mt-3">
                            <div className="adminDash">

                                <div className="text-center adminPendingDeliveryCircle">
                                </div>

                                <div className="text-center mt-2">
                                    <h5 style={{fontWeight: 'bold'}} className="mb-0">200</h5>
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
                                    <h5 style={{fontWeight: 'bold'}} className="mb-0">50</h5>
                                </div>

                                <div className="text-center mt-1">
                                    <p className="mb-0">Completed Orders</p>
                                </div>

                            </div>
                        </div>
                        {/* farm produce */}
                        <div className="col-lg-3 mt-lg-0 mt-3">
                            <div className="adminDash">

                                <div className="text-center adminPendingPaymentCircle">
                                </div>

                                <div className="text-center mt-2">
                                    <h5 style={{fontWeight: 'bold'}} className="mb-0">10</h5>
                                </div>

                                <div className="text-center mt-1">
                                    <p className="mb-0">Farm Produce</p>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* orders heading */}
                    <div className="mt-5">
                        <div style={{display: 'flex'}}>
                            {tabLayout}
                        </div>
                    </div>

                    {/* orders layout */}
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

                    <div className="mt-4" style={{display: 'flex', justifyContent: 'flex-end'}}>
                        <Link to="/farmers/order/new" className="next-page page-space" style={{textDecoration: 'none', color: '#323335'}}>
                            <span>View All <i className="mdi mdi-chevron-right" style={{color: '#c4c4c4'}}></i></span>
                        </Link>

                    </div>

                </div>

             </header>
            </main>
          </div>
        </>
      );
}
 
export default UserPortfolio;