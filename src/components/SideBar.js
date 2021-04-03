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
import Profile from "../assets/images/profile.png";

const SideBar = ({ toggled, handleToggleSidebar }) => {
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
                        <img src={Profile} alt="profile pic" className="imgCircle" />
                    </div>
                </div>
                <div className="profileDiv">
                {/* name */}
                <div className="mt-2">
                    <h6 className="mb-0" style={{color: '#323335'}}>Welcome, Jackson</h6>
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
            <Link to="/farmers/order/new" />
            </MenuItem>
            <MenuItem>
             Confirmed Orders
             <Link to="/farmers/order/confirmed" />
             </MenuItem>
            <MenuItem>
            Completed Orders
            <Link to="/farmers/order/completed" />
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
             to="/farmers/product/add"
            className="sidebar-btn"
          >
           
            <span> Add New Product</span>
          </Link>
        </div>
      </SidebarFooter>


 </ProSidebar>
          
     );
}
 
export default SideBar;