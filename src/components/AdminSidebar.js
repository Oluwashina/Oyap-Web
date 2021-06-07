import React from 'react';
import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from 'react-pro-sidebar'
import { FaHome,FaPowerOff, FaWallet, FaStackOverflow, FaCartPlus } from 'react-icons/fa';
import 'react-pro-sidebar/dist/css/styles.css';
import './SideBar.css'
import {Link} from 'react-router-dom'
import Account from "../assets/images/account.svg";
import {connect} from 'react-redux'
import * as actions from "../store/actions";

const AdminSidebar = ({ toggled, handleToggleSidebar, profileUrl, firstname, logout }) => {


    return ( 
         <ProSidebar
            toggled={toggled}
            breakPoint="md"
            onToggle={handleToggleSidebar}
            >
             <SidebarHeader>
                 
                <div className="profileDiv mt-4">
                    {/* image */}
                    <Link to="/admin/profile">
                        <img src={profileUrl ? profileUrl : Account} alt="profile pic" style={{width: '80px', height: '80px', borderRadius: '50%'}} />
                    </Link>
                </div>

                <div className="profileDiv">
                {/* name */}
                <div className="mt-3">
                    <h6 className="mb-0" style={{color: '#323335'}}>Welcome, {firstname}</h6>
                </div>
            </div>

            </SidebarHeader>
       
      <SidebarContent>
      <Menu className="mt-3" iconShape="circle">
          <MenuItem
            icon={<FaHome />}
          >
            Dashboard
            <Link to="/admin/dashboard" />
          </MenuItem>
          <MenuItem icon={<FaStackOverflow />}> 
            User Management
            <Link to="/admin/users" />
          </MenuItem>

          <MenuItem icon={<FaCartPlus />}> 
            Order Management
            <Link to="/admin/orders" />
          </MenuItem>
         
          <MenuItem icon={<FaWallet />}>
               Logistics
              <Link to="/admin/logistics" />
           </MenuItem>

           <MenuItem icon={<FaWallet />}>
               Payment
              <Link to="/admin/payments" />
           </MenuItem>

           <MenuItem icon={<FaWallet />}>
               Withdrawal
              <Link to="/admin/withdrawalrequest" />
           </MenuItem>

          <MenuItem icon={<FaPowerOff />}>
               Logout
               <Link to="/admin/login"  onClick={logout} />
          </MenuItem>
        </Menu>
        
      </SidebarContent>

      <SidebarFooter style={{ textAlign: 'center' }}>
        <div
          className="sidebar-btn-wrapper"
          style={{
              marginBottom: '30px'
          }}
        >
          <Link
             to="/farmers/addproduct"
            className="sidebar-btn"
          >
           
            <span> Add Admin</span>
          </Link>
        </div>
      </SidebarFooter>


 </ProSidebar>
          
     );
}
 

const mapStateToProps = (state) =>{
  return{
    firstname: state.auth.firstname,
    profileUrl: state.auth.profilePic
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    logout: () => dispatch(actions.logOut()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminSidebar);