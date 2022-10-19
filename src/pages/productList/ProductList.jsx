import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { productRows } from "../../dummyData";
import { DeleteOutline } from '@mui/icons-material';
import { Link } from "react-router-dom";
import { useState } from "react";

export const ProductList = () => {
    const [data, setData] = useState(productRows);

    const handleDelete = (id) => {
      setData(data.filter((item) => item.id !== id));
    };


    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: "product",
          headerName: "Product",
          width: 200,
          renderCell: (params) => {
            return (
              <div className="d-flex align-items-center">
                <img className="rounded-circle me-2" width='40px' height='40px' src={params.row.img} alt="" />
                {params.row.name}
              </div>
            );
          },
        },
        { field: "stock", headerName: "Stock", width: 200 },
        {
          field: "status",
          headerName: "Status",
          width: 120,
        },
        {
          field: "price",
          headerName: "Price",
          width: 160,
        },
        {
          field: "action",
          headerName: "Action",
          width: 150,
          renderCell: (params) => {
            return (
              <>
                <Link to={"users" + params.row.id}>
                  <button className="border-0 rounded p-2"
                  style={{ backgroundColor: "#3bb077",cursor:'pointer', color: "white",marginRight:"10px"}}
                  >Edit</button>
                </Link>
                <DeleteOutline
                  className="text-danger"
                  onClick={() => handleDelete(params.row.id)}
                />
              </>
            );
          },
        },
      ];
      



  return (
    <div style={{ height: 700, width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={10}
       
        checkboxSelection
      />
    </div>
  )
}
