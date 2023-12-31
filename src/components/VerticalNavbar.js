import React from 'react';
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
  } from 'cdbreact';
import { NavLink } from 'react-router-dom';
  
const VerticalNavbar = () => {
  return (
    <div className='sidebar'>
    <CDBSidebar textColor="#fff" backgroundColor="#4329c4" className='sidebar'>
      <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
        <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
          Sidebar
        </a>
      </CDBSidebarHeader>

      <CDBSidebarContent className="sidebar-content">
        <CDBSidebarMenu>
          <NavLink exact to="/" activeClassName="activeClicked">
            <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
          </NavLink>
          <NavLink exact to="/tables" activeClassName="activeClicked">
            <CDBSidebarMenuItem icon="table">Tables</CDBSidebarMenuItem>
          </NavLink>
          <NavLink exact to="/profile" activeClassName="activeClicked">
            <CDBSidebarMenuItem icon="user">Profile page</CDBSidebarMenuItem>
          </NavLink>
          <NavLink exact to="/analytics" activeClassName="activeClicked">
            <CDBSidebarMenuItem icon="chart-line">Analytics</CDBSidebarMenuItem>
          </NavLink>
        </CDBSidebarMenu>
      </CDBSidebarContent>
    </CDBSidebar>
  </div>
  )
}

export default VerticalNavbar
