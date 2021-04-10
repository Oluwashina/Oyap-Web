import React from 'react';
import {
    ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from 'react-pro-sidebar'
import { FaHome, FaCartArrowDown,FaPowerOff, FaWallet, FaStackOverflow } from 'react-icons/fa';
import 'react-pro-sidebar/dist/css/styles.css';
import './SideBar.css'
import {Link} from 'react-router-dom'
import Account from "../assets/images/account.svg";
import {connect} from 'react-redux'

const SideBar = ({ toggled, handleToggleSidebar, profileUrl, firstname }) => {


    return ( 
         <ProSidebar
            toggled={toggled}
            breakPoint="md"
            onToggle={handleToggleSidebar}
            >
             <SidebarHeader>
                 
                <Link to="/farmers/profile" className="profileDiv mt-4" style={{cursor: 'pointer'}}>
                    {/* image */}
                    <div>
                        <img src={profileUrl ? profileUrl : Account} alt="profile pic" className="imgCircle" />
                    </div>
                </Link>
                <div className="profileDiv">
                {/* name */}
                <div className="mt-2">
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
            <Link to="/farmers" />
          </MenuItem>
          <MenuItem icon={<FaStackOverflow />}> 
            Products
            <Link to="/farmers/products" />
          </MenuItem>
          <SubMenu
            title="Orders"
            icon={<FaCartArrowDown />}
          >
            <MenuItem>
            New Orders
            <Link to="/farmers/neworder" />
            </MenuItem>
            <MenuItem>
             Confirmed Orders
             <Link to="/farmers/confirmedorder" />
             </MenuItem>
            <MenuItem>
            Completed Orders
            <Link to="/farmers/completedorder" />
            </MenuItem>
          </SubMenu>
          <MenuItem icon={<FaWallet />}>
               Wallet
              <Link to="/farmers/wallet" />
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
           
            <span> Add New Product</span>
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

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);