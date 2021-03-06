import React from "react";
import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  WorkOutline,
  Report,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem">
                <LineStyle className="sidebarIcon" />
                Home
              </li>
            </Link>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Customer & Vehicle Management</h3>
          <ul className="sidebarList">
            <Link to="/addcustomer" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Add Customer
              </li>
            </Link>

            <Link to="/addvehicle" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Add Vehicle
              </li>
            </Link>

            <Link to="/viewmgt" className="link">
            <li className="sidebarListItem">
              <AttachMoney className="sidebarIcon" />
              Details
            </li>
            <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
              Reports
            </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Service & Work Progress Management</h3>
          <ul className="sidebarList">
            <Link to="/addservice" className="link">
              <li className="sidebarListItem">
                <MailOutline className="sidebarIcon" />
                Add Service
              </li>
            </Link>
            <Link to="/workprogress" className="link">
              <li className="sidebarListItem">
                <DynamicFeed className="sidebarIcon" />
                View Work Progress
              </li>
            </Link>
            <Link to="/service_report" className="link">
              <li className="sidebarListItem">
                <BarChart className="sidebarIcon" />
                Reports
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Employee & Finance Management</h3>
          <ul className="sidebarList">

            <Link to="/addemployee" className="link">
              <li className="sidebarListItem">
                <WorkOutline className="sidebarIcon" />
                Add Employee
              </li>
            </Link>
            <Link to="/viewemployees" className="link">
              <li className="sidebarListItem">
                <Timeline className="sidebarIcon" />
                View Employees
              </li>
            </Link>
            <Link to="/salary_report" className="link">
            <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
              Reports
            </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Supplier & Inventory Management</h3>
          <ul className="sidebarList">

            <Link to="/addsupplier" className="link">
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              Add Supplier
            </li>
            </Link>
            <Link to="/addstock" className="link">
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Add Stocks
            </li>
            </Link>
            <Link to="/placeorder" className="link">
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              Place Order
            </li>
            </Link>
            <Link to="/supplierdetails" className="link">
            <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              Details
            </li>
            </Link>
            <Link to="/reports" className="link">
            <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
              Reports
            </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
