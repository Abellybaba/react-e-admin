import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@mui/icons-material';
import React from 'react'
import { Link } from "react-router-dom";

export const User = () => {
    return (
        <div className="p-2">
            <div className="d-flex align-items-center justify-content-between p-2">
                <h1 className="fw-bold h2">Edit User</h1>
                <Link to="/newUser">
                    <button type="button" class="btn btn-success">Create</button>
                </Link>
            </div>
            <div className="container-fluid">
                <div className='row'>
                    <div className="col-12 col-md-3 p-2 border rounded shadow-lg me-2">
                        <div className="d-flex align-items-center p-2">
                            <img
                                src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                                alt=""
                                width='40px' height='40px'
                                className="rounded-circle me-3"
                            />
                            <div className="d-flex flex-column">
                                <span className="fw-bold">Anna Becker</span>
                                <span className="text-muted ">Software Engineer</span>
                            </div>
                        </div>
                        <div className="p-2">
                            <span className="text-muted fw-bold small">Account Details</span>
                            <div className="d-flex align-items-center m-2">
                                <PermIdentity className="fs-5" />
                                <span className="ms-2 my-1">annabeck99</span>
                            </div>
                            <div className="d-flex align-items-center m-2">
                                <CalendarToday className="fs-5" />
                                <span className="ms-2 my-1">10.12.1999</span>
                            </div>
                            <span className="text-muted fw-bold small">Contact Details</span>
                            <div className="d-flex align-items-center m-2">
                                <PhoneAndroid className="fs-5" />
                                <span className="ms-2 my-1">+1 123 456 67</span>
                            </div>
                            <div className="d-flex align-items-center m-2">
                                <MailOutline className="fs-5" />
                                <span className="ms-2 my-1">annabeck99@gmail.com</span>
                            </div>
                            <div className="d-flex align-items-center m-2">
                                <LocationSearching className="fs-5" />
                                <span className="ms-2 my-1">New York | USA</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-8 p-3 border rounded shadow-lg">
                        <span className="fw-bold h3">Edit</span>
                        <form className="row mt-3">
                            <div className="col">
                                <div class="form-floating mb-3">
                                    <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                    <label for="floatingInput">Username</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                    <label for="floatingInput">Full Name</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                    <label for="floatingInput">Email</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <input type="number" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                    <label for="floatingInput">Phone-number</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <input type="address" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                    <label for="floatingInput">Address</label>
                                </div>
                            </div>
                            <div className="col d-flex flex-column justify-content-between align-items-end">
                                <div className="d-flex align-items-center float-end">
                                    <img
                                        className="rounded me-2 d-none d-md-block"
                                        src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                                        width='100px' height='100px'
                                        alt=""
                                    />
                                    <label htmlFor="file">
                                        <Publish className="fs-2"style={{cursor:"pointer" }}/>
                                    </label>
                                    <input type="file" id="file" style={{ display: "none" }} />
                                </div>
                                <button type="button" class="btn btn-sm w-50 text-white fw-normal" style={{ backgroundColor: "#07008A" }}>Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
