import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "./Layout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const StudentProfile = () => {
  const param = useParams();
  const navigate = useNavigate();
  console.log(param);
  const [user, setUser] = React.useState({});
  React.useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        `http://localhost:8080/hostel/profile/${param.id}`
      );
      const data = await res.json();
      setUser(data.result[0]);
    };
    getData();
  }, []);
  const deleteStudent = async () => {
    if (confirm("Are you sure ?"))
      try {
        const res = await fetch(
          `http://localhost:8080/hostel/delete/${param.id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await res.json();
        console.log(data);
        if (data && data.success == true) {
          navigate("/getdata");
          toast.success("Student Removed Successfully");
        } else {
          toast.error("Unable to Delete");
        }
      } catch (e) {
        console.log(e);
      }
  };
  return (
    <Layout>
      <ToastContainer limit={2} theme="dark" autoClose={2000} />
      <section className="min-h-screen">
        <h1 className="text-center text-3xl font-bold font-amer pt-4 mt-16 ">
          Student <span className="text-orange-500"> Profile</span>
        </h1>
        <main className=" text-2xl mt-20 px-10 w-full justify-around flex">
          <div className="flex flex-col gap-5">
            <div className="flex gap-3">
              <h1 className="">Student Name : </h1>
              <h1>{user.student_name}</h1>
            </div>
            <div className="flex gap-3">
              <h1 className="">Roll No. : </h1>
              <h1>{user.student_id}</h1>
            </div>
            <div className="flex gap-3">
              <h1 className="">Enrollment No. </h1>
              <h1>{user.enrollment_number}</h1>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex gap-3">
              <h1 className="">Course : </h1>
              <h1>{user.course}</h1>
            </div>
            <div className="flex gap-3">
              <h1 className="">Semester : </h1>
              <h1>{user.semester}</h1>
            </div>
            <div className="flex gap-3">
              <h1 className="">Hostel : </h1>
              <h1>{user.hostel_name}</h1>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex gap-3">
              <h1 className="">Contact No. : </h1>
              <h1>{user.contact_number}</h1>
            </div>
            <div className="flex gap-3">
              <h1 className="">Parent Name : </h1>
              <h1>{user.parent_name}</h1>
            </div>
            <div className="flex gap-3">
              <h1 className="">Parent Contact No.: </h1>
              <h1>{user.parent_contact_number}</h1>
            </div>
          </div>
        </main>
        <div className="flex justify-around  mt-20 items-center">
          <div className="flex gap-5 ">
            <button
              className="px-6 py-3 text-white bg-blue-500 border-0 rounded-lg outline-none"
              onClick={() => navigate(`/update/${param.id}`)}
            >
              Update
            </button>
            <button
              className="px-6 py-3 text-white bg-red-500 border-0 rounded-lg outline-none"
              onClick={() => deleteStudent()}
            >
              Delete
            </button>
          </div>
          <div className="flex gap-3 text-base   justify-end ">
            <h1 className="">Registration Date : </h1>
            <h1>{user.registration_date}</h1>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default StudentProfile;
