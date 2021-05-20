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

const AdminSidebar = ({ toggled, handleToggleSidebar, profileUrl, firstname }) => {


    return ( 
         <ProSidebar
            toggled={toggled}
            breakPoint="md"
            onToggle={handleToggleSidebar}
            >
             <SidebarHeader>
                 
                <div className="profileDiv mt-4">
                    {/* image */}
                    <div>
                        <img src={profileUrl ? profileUrl : Account} alt="profile pic" style={{width: '80px', height: '80px', borderRadius: '50%'}} />
                    </div>
                </div>

                <div className="profileDiv">
                {/* name */}
                <div className="mt-3">
                    <h6 className="mb-0" style={{color: '#323335'}}>Welcome, Jackson {firstname}</h6>
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

          <MenuItem icon={<FaPowerOff />}>
               Logout
               <Link to="/login" />
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

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminSidebar);