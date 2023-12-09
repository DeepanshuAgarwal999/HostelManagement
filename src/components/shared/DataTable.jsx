import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Layout from "../Layout";
import StudentRegister from "../StudentRegister";
import { NavLink, useNavigate } from "react-router-dom";
import { useGetAllUsersQuery } from "../../slices/apiSlice";
const columns = [
  { field: "student_id", headerName: "ID", width: 70 },
  { field: "student_name", headerName: "name", width: 130 },
  {
    field: "enrollment_number",
    headerName: "enroll_no",
    type: "number",
    width: 90,
  },
  {
    field: "course",
    headerName: "course",
    sortable: false,
    width: 160,
    // valueGetter: (params) =>
    //   `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
  {
    field: "semester",
    headerName: "semester",
    width: 100,
  },
  {
    field: "hostel_name",
    headerName: "hostelName",
    width: 100,
  },
  {
    field: "room_number",
    headerName: "room No.",
    width: 130,
  },
  {
    field: "contact_number",
    headerName: "contactNo.",
    width: 150,
  },
  {
    field: "registration_date",
    headerName: "Registration Date",
    width: 150,
  },
  {
    field: "actions",
    headerName: "Actions",
    sortable: false,
    width: 240,
    renderCell: (params) => (
      <div>
        <NavLink
          to={`/profile/${params.row.student_id}`}
          className="px-4 py-3 text-white bg-green-500 border-0 rounded-lg outline-none"
        >
          Visit Student
        </NavLink>
      </div>
    ),
  },
];

const getRowId = (row) => row.student_id;
export default function DataTable() {
  const { data, isError, isLoading } = useGetAllUsersQuery();
  if (isError) return console.log("something went wrong");
  if (isLoading) {
    return <h1 className="text-center text-4xl mt-16">Loading...</h1>;
  }

  return (
    <Layout>
      <div className="pb-20">
        <div
          style={{
            height: "100vh",
            width: "100%",
            paddingTop: "50px",
            marginTop: "30px",
          }}
        >
          <h1 className="text-4xl font-medium text-center pb-10">
            Student's Detail
          </h1>
          <DataGrid
            getRowId={getRowId}
            rows={data.result}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
          />
        </div>
      </div>
    </Layout>
  );
}
