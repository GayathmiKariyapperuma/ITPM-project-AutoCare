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
            <Link to="/" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Add Customer
              </li>
            </Link>

            <Link to="/" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Add Vehicle
              </li>
            </Link>
            <li className="sidebarListItem">
              <AttachMoney className="sidebarIcon" />
              Details
            </li>
            <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
              Reports
            </li>
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
            <Link to="/" className="link">
              <li className="sidebarListItem">
                <DynamicFeed className="sidebarIcon" />
                View Work Progress
              </li>
            </Link>
            <Link to="/" className="link">
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

            <Link to="/" className="link">
              <li className="sidebarListItem">
                <WorkOutline className="sidebarIcon" />
                Add Employee
              </li>
            </Link>
            <Link to="/" className="link">
              <li className="sidebarListItem">
                <Timeline className="sidebarIcon" />
                View Payments
              </li>
            </Link>
            <Link to="/" className="link">
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
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              Add Supplier
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Add Stocks
            </li>
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              Place Order
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              Details
            </li>
            <Link to="/" className="link">
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
