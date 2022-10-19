/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import TimelineIcon from '@mui/icons-material/Timeline';
import { AttachMoney, BarChart, ChatBubbleOutline, DynamicFeed, MailOutline, Person, Report, Storefront, Timeline, TrendingUp, WorkOutline } from '@mui/icons-material';
import { Link } from "react-router-dom";


const Sidebar = () => {


    return (
        <div className="container shadow" style={{ overflow: "hidden", backgroundColor: "rgb(251, 251, 255)", height: "100%", cursor:'pointer'}}>
    
            <nav className="nav flex-column d-md-block" id="navbarSupportedContent">
                <div className="mb-2">
                    <h6 className="text-muted mt-3 fw-bold">Dashboard</h6>
                 
                    <ul class="nav flex-column">
                        <li class="nav-link d-flex align-items-center text-decoration-none text-dark hoverable">
                            <HomeIcon className="mx-2 fs-3" />
                            <Link style={{ textDecoration: "none", color: "black" }} to="/">Home</Link>
                        </li>
                   
                        <li class="nav-link d-flex align-items-center text-dark">
                            <TimelineIcon className="mx-2 fs-3" />
                            <span className="">Analytics</span>
                        </li>
                        <li class="nav-link d-flex align-items-center text-dark">
                            <TrendingUp className="mx-2 fs-3" />
                            <span className="">Sales</span>
                        </li>
                    </ul>
                </div>

                <div className="mb-2">
                    <h6 className="text-muted mt-3 fw-bold">Quick Menu</h6>
                    <ul class="nav flex-column">
                        <li class="nav-link d-flex align-items-center text-decoration-none text-dark">
                            <Person className="mx-2 fs-3" />
                            <Link style={{ textDecoration: "none", color: "black" }} to="users">Users</Link>
                        </li>
                        <li class="nav-link d-flex align-items-center text-dark">
                            <Storefront className="mx-2 fs-3" />
                            <Link style={{ textDecoration: "none", color: "black" }} to="products">Products</Link>
                        </li>
                        <li class="nav-link d-flex align-items-center text-dark">
                            <AttachMoney className="mx-2 fs-3" />
                            <span className="">Transactions</span>
                        </li>
                        <li class="nav-link d-flex align-items-center text-dark">
                            <BarChart className="mx-2 fs-3" />
                            <span className="">Reports</span>
                        </li>

                    </ul>
                </div>

                <div className="mb-2">
                    <h6 className="text-muted mt-3 fw-bold">Notification</h6>
                    <ul class="nav flex-column">
                        <li class="nav-link d-flex align-items-center text-decoration-none text-dark">
                            <MailOutline className="mx-2 fs-3" />
                            <span className="">Mail</span>
                        </li>
                        <li class="nav-link d-flex align-items-center text-dark">
                            <DynamicFeed className="mx-2 fs-3" />
                            <span className="">Feedback</span>
                        </li>
                        <li class="nav-link d-flex align-items-center text-dark">
                            <ChatBubbleOutline className="mx-2 fs-3" />
                            <span className="">Message</span>
                        </li>
                    </ul>
                </div>

                <div className="mb-2">
                    <h6 className="text-muted mt-3 fw-bold">Staff</h6>
                    <ul class="nav flex-column">
                        <li class="nav-link d-flex align-items-center text-decoration-none text-dark">
                            <WorkOutline className="mx-2 fs-3" />
                            <span className="">Manage</span>
                        </li>
                        <li class="nav-link d-flex align-items-center text-dark">
                            <Timeline className="mx-2 fs-3" />
                            <span className="">Analytics</span>
                        </li>
                        <li class="nav-link d-flex align-items-center text-dark">
                            <Report className="mx-2 fs-3" />
                            <span className="">Reports</span>
                        </li>

                    </ul>
                </div>
            </nav>
    
        </div>
    )
}

export default Sidebar