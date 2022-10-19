import { Publish } from '@mui/icons-material';
import React from 'react'
import { Link } from "react-router-dom";

export const NewUser = () => {
    return (
        <div className="h-50 w-100">
            <div className="d-flex align-items-center justify-content-between p-2">
                <h1 className="fw-bold h2">New User</h1>

            </div>
            <div className="w-100 ">
                <form className="row gap-1">
                    <div className="col-12 col-md-5">
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control " id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput">Username</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput">Email</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="number" class="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput">Phone-number</label>
                        </div>
                        <div className="mb-1">
                            <span className="text-muted fw-bold">Software Engineer</span>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="radioInline" id="inlineRadioDefault" />
                            <label class="form-check-label" for="inlineRadioDefault">Male</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="radioInline" id="inlineRadioChecked" checked="" />
                            <label class="form-check-label" for="inlineRadioChecked">Female</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="radioInline" id="inlineRadioChecked" checked="" />
                            <label class="form-check-label" for="inlineRadioChecked">Others</label>
                        </div>
                    </div>
                    <div className="col-12 col-md-5">
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput">Full Name</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="password" class="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput">Password</label>
                        </div>
                        <div class="form-floating mb-4">
                            <input type="address" class="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput">Address</label>
                        </div>
                        <div class="form-floating">
                            <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                                <option selected="">Yes</option>
                                <option value="1">No</option>
                            </select>
                            <label for="floatingSelect">Agree with terms</label>
                        </div>
                    </div>
                    <div className="col-12 col-md-1 d-flex flex-lg-column justify-content-between align-items-end my-3">
                        <label htmlFor="file">
                            <Publish className="fs-2" style={{ cursor: "pointer" }} />
                        </label>
                        <Link to="/">
                            <button type="button" class="btn btn-md text-white fw-normal" style={{ backgroundColor: "#07008A" }}>Create</button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
