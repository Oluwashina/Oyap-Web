import React, {useState} from 'react';
import {FaBars } from 'react-icons/fa';
import AdminSidebar from '../../../components/AdminSidebar';
import '../AdminDashboard/AdminDashboard.css'
import {Link} from 'react-router-dom'
import user1 from '../../../assets/images/user2.png'
import user2 from '../../../assets/images/profile.png'
import user3 from '../../../assets/images/seller1.png'
import user4 from '../../../assets/images/user3.png'
import declineIcon from '../../../assets/images/x-circle.svg'
import approveIcon from '../../../assets/images/check-circle.svg'
import ViewIcon from '../../../assets/images/eye.svg'

const AdminUserManage = () => {

    const [toggled, setToggled] = useState(false);


    const handleToggleSidebar = (value) => {
        setToggled(value);
      };
    
      const [initialTab, setTab] = useState(1);
    

      const [tabData] = useState([
        { id: 1, name: "tab-1", text: "Members"},
        { id: 2, name: "tab-2", text: "Farmers" },
        { id: 3, name: "tab-3", text: "Logistics" },
        { id: 4, name: "tab-4", text: "Admins" },
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

                <h5 className="mb-3 mt-3 mt-lg-0" style={{fontWeight: 'bold'}}>User Management</h5>
                <header>


                    {/* counts */}
                    <div className="row">
                        {/* Admin */}
                        <div className="col-lg-3">
                            <div className="adminDash">

                                <div className="text-center adminPendingCircle">
                                </div>

                                <div className="text-center mt-2">
                                    <h5 style={{fontWeight: 'bold'}} className="mb-0">10</h5>
                                </div>

                                <div className="text-center mt-1">
                                    <p className="mb-0">Admin</p>
                                </div>

                            </div>
                        </div>
                        {/* Members */}
                        <div className="col-lg-3 mt-lg-0 mt-3">
                            <div className="adminDash">

                                <div className="text-center adminPendingDeliveryCircle">
                                </div>

                                <div className="text-center mt-2">
                                    <h5 style={{fontWeight: 'bold'}} className="mb-0">200</h5>
                                </div>

                                <div className="text-center mt-1">
                                    <p className="mb-0">Members</p>
                                </div>

                            </div>
                        </div>
                        {/* farmers */}
                        <div className="col-lg-3 mt-lg-0 mt-3">
                            <div className="adminDash">

                                <div className="text-center adminCompletedOrdersCircle">
                                </div>

                                <div className="text-center mt-2">
                                    <h5 style={{fontWeight: 'bold'}} className="mb-0">50</h5>
                                </div>

                                <div className="text-center mt-1">
                                    <p className="mb-0">Farmers</p>
                                </div>

                            </div>
                        </div>
                        {/* logistics */}
                        <div className="col-lg-3 mt-lg-0 mt-3">
                            <div className="adminDash">

                                <div className="text-center adminPendingPaymentCircle">
                                </div>

                                <div className="text-center mt-2">
                                    <h5 style={{fontWeight: 'bold'}} className="mb-0">10</h5>
                                </div>

                                <div className="text-center mt-1">
                                    <p className="mb-0">Logistics</p>
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

                        <div>
                            <Link to="/admin" style={{textDecoration: 'none'}}>
                             <p className="mb-0" style={{color: '#7BC30A'}}>View All</p>
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

                        {/* 4th */}
                        <div className="userTable mt-3">
                            {/* image */}
                            <div className="userImage">
                                <img src={user4} alt="user" style={{width: '40px', height: '40px', borderRadius: '50%'}} />    
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

                    </div>


                </header>

            </main>
        </div>
        </>
     );
}
 
export default AdminUserManage;