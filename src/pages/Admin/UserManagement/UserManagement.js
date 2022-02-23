import React, {useState, useEffect} from 'react';
import {FaBars } from 'react-icons/fa';
import AdminSidebar from '../../../components/AdminSidebar';
import '../AdminDashboard/AdminDashboard.css'
// import {Link} from 'react-router-dom'
import declineIcon from '../../../assets/images/x-circle.svg'
import approveIcon from '../../../assets/images/check-circle.svg'
import ViewIcon from '../../../assets/images/eye.svg'
import {connect} from 'react-redux'
import {useHistory} from 'react-router-dom'
import userProfile from '../../../assets/images/userProfile.svg'
import { getAdminUsers, getAdminUsersCount } from '../../../store/actions/admin';

const AdminUserManage = (props) => {

    const {getCount, auth, count, getUser, users} = props

    const [toggled, setToggled] = useState(false);

    const history = useHistory();


    const handleToggleSidebar = (value) => {
        setToggled(value);
      };
    
      const [initialTab, setTab] = useState(1);
    

      const [tabData] = useState([
        { id: 1, name: "tab-1", text: "Members"},
        { id: 2, name: "tab-2", text: "Farmers" },
        { id: 4, name: "tab-4", text: "Admins" },
      ]);

      useEffect(() =>{
        if(auth){
          getCount()
          getUser('Buyer')
        } 
    }, [auth, getCount, getUser])

      
      const handleToggle = (id) => {
          switch(id){
              case 1:
                  setTab(id)
                  getUser('Buyer')
                  break;
            case 2:
                setTab(id);
                getUser('Seller')
                break;
            case 4: 
            setTab(id);
            getUser('SubAdmin')
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

    

    // mapping recent users
    const UsersLayout = users.length ? (
        users.map((value) => {
          return (
        <div key={value.id} className="userTable">
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
                <img src={value.isEnabled ? declineIcon : approveIcon} alt="decline" width="30" height="30" style={{cursor: 'pointer'}} />
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

      // viewing a user
      const ViewUser = (id) =>{
        history.push('/admin/user/'+id)
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

                <h5 className="mb-3 mt-3 mt-lg-0" style={{fontWeight: 'bold'}}>User Management</h5>
                <header>


                    {/* counts */}
                    <div className="row">
                        {/* Admin */}
                        <div className="col-lg-4">
                            <div className="adminDash">

                                <div className="text-center adminPendingCircle">
                                </div>

                                <div className="text-center mt-3">
                                    <h5 style={{fontWeight: 'bold'}} className="mb-0">{count ? count.countAdmin: "0"}</h5>
                                </div>

                                <div className="text-center mt-1">
                                    <p className="mb-0">Admin</p>
                                </div>

                            </div>
                        </div>
                        {/* Members */}
                        <div className="col-lg-4 mt-lg-0 mt-3">
                            <div className="adminDash">

                                <div className="text-center adminPendingDeliveryCircle">
                                </div>

                                <div className="text-center mt-3">
                                    <h5 style={{fontWeight: 'bold'}} className="mb-0">{count ? count.countBuyer : "0"}</h5>
                                </div>

                                <div className="text-center mt-1">
                                    <p className="mb-0">Members</p>
                                </div>

                            </div>
                        </div>
                        {/* farmers */}
                        <div className="col-lg-4 mt-lg-0 mt-3">
                            <div className="adminDash">

                                <div className="text-center adminCompletedOrdersCircle">
                                </div>

                                <div className="text-center mt-3">
                                    <h5 style={{fontWeight: 'bold'}} className="mb-0">{count ? count.countSeller : "0"}</h5>
                                </div>

                                <div className="text-center mt-1">
                                    <p className="mb-0">Farmers</p>
                                </div>

                            </div>
                        </div>
                    
                    </div>

                    {/* users layout */}
                     <div className="mt-5" style={{display: 'flex', justifyContent :'space-between'}}>

                        <div style={{display: 'flex'}}>
                            {tabLayout}
                        </div>

                        {/* <div>
                            <Link to="/admin" style={{textDecoration: 'none'}}>
                             <p className="mb-0" style={{color: '#7BC30A'}}>View All</p>
                            </Link>
                        </div> */}
                    </div>

                    
                    {/*  users layout */}
                    <div className="newOrders mt-4" style={{padding: '20px'}}>

                        {UsersLayout}

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
        count: state.admin.usersCount,
        users: state.admin.users
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        getCount: () => dispatch(getAdminUsersCount()),
        getUser: (value) => dispatch(getAdminUsers(value))
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(AdminUserManage);