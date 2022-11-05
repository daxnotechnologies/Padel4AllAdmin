import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./css/styles.css";
import { auth } from "../firebase";
//import {signOut } from "firebase/auth";
import logo from "./logo.png";
import SportsGymnasticsIcon from "@mui/icons-material/SportsGymnastics";
import DomainIcon from "@mui/icons-material/Domain";
import QueueIcon from "@mui/icons-material/Queue";
import LogoutIcon from "@mui/icons-material/Logout";
import StarPurple500Icon from "@mui/icons-material/StarPurple500";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

export default function Navigation() {
  return (
    <React.Fragment>
      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <nav
            class="sb-sidenav accordion bg"
            id="sidenavAccordion"
            style={{
              boxShadow: "rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px",
            }}
          >
            <div
              style={{
                height: "calc(100vh - 0px)",
                overflow: "auto",
              }}
              class="sb-sidenav-menu"
            >
              <div class="nav">
                <div class="sb-sidenav-menu-heading">
                  <div style={{ marginBottom: 40 }}>
                    <img src={logo} width="150px" />
                  </div>
                </div>

                <Link
                  class="nav-link sidenavtext "
                  to="/Dashboard/ManageBookings"
                >
                  <div class="sb-nav-link-icon"></div>
                  <CalendarMonthIcon style={{ marginRight: 10 }} />
                  Manage Bookings
                </Link>

                <Link
                  class="nav-link sidenavtext "
                  to="/Dashboard/AllFeedbacks"
                >
                  <div class="sb-nav-link-icon"></div>
                  <StarPurple500Icon style={{ marginRight: 10 }} />
                  All Feedbacks
                </Link>

                <Link class="nav-link sidenavtext " to="/Dashboard/AllUsers">
                  <div class="sb-nav-link-icon"></div>
                  <SportsGymnasticsIcon style={{ marginRight: 10 }} />
                  All Players
                </Link>
                <Link
                  class="nav-link sidenavtext "
                  to="/Dashboard/WaitingClubs"
                >
                  <div class="sb-nav-link-icon"></div>
                  <QueueIcon style={{ marginRight: 10 }} />
                  Pending Clubs
                </Link>
                <Link class="nav-link sidenavtext " to="/Dashboard/AllClubs">
                  <div class="sb-nav-link-icon"></div>
                  <DomainIcon style={{ marginRight: 10 }} />
                  All Clubs
                </Link>

                <Link class="nav-link sidenavtext " to="/">
                  <div class="sb-nav-link-icon"></div>
                  <LogoutIcon style={{ marginRight: 10 }} />
                  Logout
                </Link>
              </div>
            </div>
          </nav>
        </div>
        <div
          style={{
            width: "100%",
            height: "calc(100vh - 0px)",
            overflow: "auto",
          }}
        >
          <Outlet />
        </div>
      </div>
    </React.Fragment>
  );
}
