import React from 'react'
//import { Link } from "react-router-dom";

export const NewProduct = () => {
    return (
        <div className="container-fluid">
            <div className="d-flex align-items-center justify-content-between p-2">
                <h1 className="fw-bold h2">New Product</h1>
                
            </div>
            <form className="row mt-3 w-50">
                <div className="col">
                    <div class="mb-3">
                        <label for="formFile" class="form-label">Image</label>
                        <input class="form-control" type="file" id="formFile" />
                    </div>
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label for="floatingInput">Product Name</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="number" class="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label for="floatingInput">Stock</label>
                    </div>
                    

                    <div class="form-floating mb-3">
                        <input type="address" class="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label for="floatingInput">Address</label>
                    </div>
                    <button type="button" class="btn btn-lg w-50 text-white fw-normal" style={{ backgroundColor: "#07008A" }}>Create</button>
                </div>

            </form>
        </div>
    )
}
