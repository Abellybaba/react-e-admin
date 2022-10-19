import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { userRows } from "../../dummyData";
import '../userList/userList.css'
import { DeleteOutline } from '@mui/icons-material';
import { Link } from "react-router-dom";
import { useState } from "react";



export const UserList = () => {
    const [data, setData] = useState(userRows);

    const handleDelete = (id) => {
      setData(data.filter((item) => item.id !== id));
    };


    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: "user",
          headerName: "User",
          width: 200,
          renderCell: (params) => {
            return (
              <div className="d-flex align-items-center">
                <img className="rounded-circle me-2" width='40px' height='40px' src={params.row.avatar} alt="" />
                {params.row.username}
              </div>
            );
          },
        },
        { field: "email", headerName: "Email", width: 200 },
        {
          field: "status",
          headerName: "Status",
          width: 120,
        },
        {
          field: "transaction",
          headerName: "Transaction Volume",
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
      
      // const rows = [
      //     {
      //         id: 1,
      //         username: "Jon Snow",
      //         avatar:
      //           "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      //         email: "jon@gmail.com",
      //         status: "active",
      //         transaction: "$120.00",
      //       },
      //       {
      //         id: 2,
      //         username: "Jon Snow",
      //         avatar:
      //           "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      //         email: "jon@gmail.com",
      //         status: "active",
      //         transaction: "$120.00",
      //       },
      //       {
      //         id: 3,
      //         username: "Jon Snow",
      //         avatar:
      //           "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      //         email: "jon@gmail.com",
      //         status: "active",
      //         transaction: "$120.00",
      //       },
      //       {
      //       id: 4,
      //       username: "Jon Snow",
      //       avatar:
      //         "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      //       email: "jon@gmail.com",
      //       status: "active",
      //       transaction: "$120.00",
      //     },
      //     {
      //       id: 5,
      //       username: "Jon Snow",
      //       avatar:
      //         "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      //       email: "jon@gmail.com",
      //       status: "active",
      //       transaction: "$120.00",
      //     },
      //     {
      //       id: 6,
      //       username: "Jon Snow",
      //       avatar:
      //         "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      //       email: "jon@gmail.com",
      //       status: "active",
      //       transaction: "$120.00",
      //     },
      //     {
      //       id: 7,
      //       username: "Jon Snow",
      //       avatar:
      //         "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      //       email: "jon@gmail.com",
      //       status: "active",
      //       transaction: "$120.00",
      //     },
      //     {
      //       id: 8,
      //       username: "Jon Snow",
      //       avatar:
      //         "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      //       email: "jon@gmail.com",
      //       status: "active",
      //       transaction: "$120.00",
      //     },
      //     {
      //       id: 9,
      //       username: "Jon Snow",
      //       avatar:
      //         "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      //       email: "jon@gmail.com",
      //       status: "active",
      //       transaction: "$120.00",
      //     },
      //     {
      //       id: 10,
      //       username: "Jon Snow",
      //       avatar:
      //         "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      //       email: "jon@gmail.com",
      //       status: "active",
      //       transaction: "$120.00",
      //     },
      // ];

  return (
    <div style={{ height: 900, width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={10}
       
        checkboxSelection
      />
    </div>
  )
}
