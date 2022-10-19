/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import "./Topbar.css";
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import LanguageIcon from '@mui/icons-material/Language';
import { Link } from "react-router-dom";


const Topbar = () => {
    return (
        <div>
            <nav className="navbar navbar-light rounded-3 border shadow-smd-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center gap-2">
                    <button className="navbar-burger navbar-toggler d-lg-none" type="button"
                    data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                    aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className='fw-bolder fs-2'>
                        <span className='d-none d-md-block ms-4' style={{ color: "#07008A" }}>OANWAVE</span>
                    </div>
                    </div>
                    <Link to='/'> 
                    <div className='d-sm-block'>
                       <img className="img-fluid rounded-circle" width='40px' height='40px' src="../asset/logo.png" alt="" />
                    </div>
                    </Link>
                    <div className="d-flex align-items-center" style={{cursor:'pointer'}}>
                        <div className="position-relative">
                            <NotificationsIcon className="fs-2" />
                            <span className="badge bg-danger rounded-pill position-absolute top-0 end-0">2</span>
                        </div>
                        <div className="position-relative mx-2">
                            <LanguageIcon className="fs-2" />
                            <span className="badge bg-danger rounded-pill position-absolute top-0 end-0">2</span>
                        </div>
                        <div className="position-relative mx-2">
                            <SettingsIcon className="fs-2" />
                            {/* <span className="badge bg-danger rounded-pill position-absolute top-0 end-0">2</span> */}
                        </div>
                        <div className='me-2'>
                            <img className="img-fluid rounded-circle" width='40px' height='40px' src="../asset/me.png" alt="" />
                        </div>
                    </div>
            </nav>
        </div>
    )
}

export default Topbar