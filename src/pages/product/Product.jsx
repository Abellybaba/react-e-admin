import { Publish } from '@mui/icons-material';
import React from 'react'
import { Link } from "react-router-dom";
import Chart from '../../components/userchart/UserChart';
//import Chart from "react-apexcharts";


export const Product = () => {

    // var info = {
    //     chart: {
    //       height: 280,
    //       type: "area"
    //     },
    //     dataLabels: {
    //       enabled: false
    //     },
    //     series: [
    //       {
    //         name: "Series 1",
    //         data: [45, 52, 38, 45, 19, 23, 2]
    //       }
    //     ],
    //     fill: {
    //       type: "gradient",
    //       gradient: {
    //         shadeIntensity: 1,
    //         opacityFrom: 0.7,
    //         opacityTo: 0.9,
    //         stops: [0, 90, 100]
    //       }
    //     },
    //     xaxis: {
    //       categories: [
    //         "01 Jan",
    //         "02 Jan",
    //         "03 Jan",
    //         "04 Jan",
    //         "05 Jan",
    //         "06 Jan",
    //         "07 Jan"
    //       ]
    //     }
    //   };



    return (
        <div className="container-fluid py-2">
            <div className="d-flex align-items-center justify-content-between p-2">
                <h1 className="fw-bold h2">Edit User</h1>
                <Link to="/newProduct">
                    <button type="button" class="btn btn-success">Create</button>
                </Link>
            </div>
            <div className="row gap-2">
                <div className="col-12 col-md rounded" style={{ overflow: "scroll" }}>
                    <Chart
                        type="line"
                    />

                </div>
                <div className="col-12 col-md rounded shadow-lg p-2">
                    <div className="d-flex align-items-center">
                        <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                            alt=""
                            width='40px' height='40px'
                            className="rounded-circle me-3" />
                        <span className="fw-bold text-muted">Apple Airpods</span>
                    </div>
                    <div className="mt-2">
                        <div className="fs-5 px-2 d-flex align-items-center justify-content-between" style={{ width: "150px" }}>
                            <span className="">Id:</span>
                            <span className="">123</span>
                        </div>
                        <div className="fs-5 px-2 d-flex align-items-center justify-content-between" style={{ width: "150px" }}>
                            <span className="">Sales:</span>
                            <span className="">5123</span>
                        </div>
                        <div className="fs-5 px-2 d-flex align-items-center justify-content-between" style={{ width: "150px" }}>
                            <span className="">Active:</span>
                            <span className="">yes</span>
                        </div>
                        <div className="fs-5 px-2 d-flex align-items-center justify-content-between" style={{ width: "150px" }}>
                            <span className="">In stock:</span>
                            <span className="">No</span>
                        </div>
                    </div>
                </div>


                <div className="row mt-5" style={{ height: "220px" }}>
                    <div className="col-12 col-md-6 py-3">
                        <input class="form-control form-control-sm w-50 mb-2" type="text" placeholder="Product Name" aria-label=".form-control-sm example" />
                        <span className="fs-6 text-muted">In stock</span>
                        <select class="form-select w-50 mt-1 mb-2" aria-label="Default select">
                            <option selected="">Yes</option>
                            <option value="1">No</option>
                        </select>
                        <span className="fs-6 text-muted ">Active</span>
                        <select class="form-select w-50 mt-1 mb-2" aria-label="Default select">
                            <option selected="">Yes</option>
                            <option value="1">No</option>
                        </select>
                    </div>
                    <div className="col-12 col-md-6 d-flex flex-column justify-content-evenly align-items-end my-3">
                        <div className="d-flex align-items-center float-end">
                            <img
                                className="rounded me-2 d-none d-md-block"
                                src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                                width='100px' height='100px'
                                alt=""
                            />
                            <label htmlFor="file">
                                <Publish className="fs-2" style={{ cursor: "pointer" }} />
                            </label>
                            <input type="file" id="file" style={{ display: "none" }} />
                        </div>

                        <button type="button" class="btn btn-sm w-25 text-white fw-normal" style={{ backgroundColor: "#07008A" }}>Update</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
