import React from "react";
import { Field, Form } from "houseform";
import { z } from "zod";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "./Layout";
const UpdateStudent = () => {
  const param = useParams();
  const navigate = useNavigate();
  const handleSubmit = async (values) => {
    console.log(values);
    try {
      const res = await fetch(
        `http://localhost:8080/hostel/update/${param.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: values.name,
            enrol_num: values.enrol_num,
            course: values.course,
            semester: values.semester,
            hostel_name: values.hostel_name,
            room_no: values.room_no,
            contact_no: values.contact_no,
            parent_name: values.parent_name,
            parent_no: values.parent_no,
          }),
        }
      );

      if (res.status === 200) {
        toast.success("Student Updated Successfully", {
          onClose: () => navigate("/"),
        });
      } else {
        toast.error("Invalid Credentials");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <section className="w-full mx-auto bgImg">
        <ToastContainer pauseOnFocusLoss={false} autoClose={1500} />
        <h1 className="text-center text-4xl font-bold  p-6 mt-16 ">
          Update<span className="text-orange-500"> Student</span>
        </h1>
        <div className=" min-h-screen pb-10  w-full ">
          <div className="w-[600px] mx-auto">
            <Form
              onSubmit={(values) => {
                alert("Verify before submiting" + JSON.stringify(values));
                handleSubmit(values);
              }}
            >
              {({ isValid, submit }) => (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    submit();
                  }}
                  className="flex flex-col gap-6"
                >
                  <Field
                    name="name"
                    // onBlurValidate={z.string().email("This must be an email")}
                  >
                    {({ value, setValue, onBlur }) => {
                      return (
                        <div>
                          <input
                            className="px-4 py-3 bg-[#eeeeee] outline-none w-full text-black text-lg "
                            value={value}
                            onBlur={onBlur}
                            onChange={(e) => setValue(e.target.value)}
                            placeholder={"Name"}
                          />
                        </div>
                      );
                    }}
                  </Field>
                  <Field
                    name="enrol_num"
                    // onBlurValidate={z.string().email("This must be an email")}
                  >
                    {({ value, setValue, onBlur, errors }) => {
                      return (
                        <div>
                          <input
                            className="px-4 py-3 bg-[#eeeeee] outline-none w-full text-black text-lg"
                            value={value}
                            onBlur={onBlur}
                            onChange={(e) => setValue(parseInt(e.target.value))}
                            placeholder={"Enrollment Number"}
                          />
                          {errors.map((error) => (
                            <p key={error} className="text-red-500 text-xs">
                              {error}
                            </p>
                          ))}
                        </div>
                      );
                    }}
                  </Field>
                  <Field name="course">
                    {({ value, setValue, onBlur, errors }) => {
                      return (
                        <div>
                          <input
                            className="px-4 py-3 bg-[#eeeeee] outline-none w-full text-black text-lg font-medium"
                            value={value}
                            onBlur={onBlur}
                            onChange={(e) => setValue(e.target.value)}
                            placeholder={"Course"}
                          />
                        </div>
                      );
                    }}
                  </Field>
                  <Field name="semester">
                    {({ value, setValue, onBlur, errors }) => {
                      return (
                        <div>
                          <input
                            type="text"
                            className="px-4 py-3 bg-[#eeeeee] outline-none w-full text-black text-lg"
                            value={value}
                            onBlur={onBlur}
                            onChange={(e) => setValue(parseInt(e.target.value))}
                            placeholder="Semester"
                          />
                          {errors.map((error) => (
                            <p key={error} className="text-red-500 text-xs">
                              {error}
                            </p>
                          ))}
                        </div>
                      );
                    }}
                  </Field>
                  <Field
                    name="hostel_name"
                    // onBlurValidate={z.number().min(12)}
                  >
                    {({ value, setValue, onBlur, errors }) => {
                      return (
                        <div>
                          <input
                            className="px-4 py-3 bg-[#eeeeee] outline-none w-full text-black text-lg"
                            value={value}
                            onBlur={onBlur}
                            onChange={(e) => setValue(e.target.value)}
                            placeholder={"Hostel name"}
                          />
                        </div>
                      );
                    }}
                  </Field>
                  <Field name="room_no">
                    {({ value, setValue, onBlur, errors }) => {
                      return (
                        <div>
                          <input
                            className="px-4 py-3 bg-[#eeeeee] outline-none w-full text-black text-lg"
                            value={value}
                            onBlur={onBlur}
                            onChange={(e) => setValue(parseInt(e.target.value))}
                            placeholder={"Room No."}
                          />
                        </div>
                      );
                    }}
                  </Field>
                  <Field name="contact_no">
                    {({ value, setValue, onBlur, errors }) => {
                      return (
                        <div>
                          <input
                            className="px-4 py-3 bg-[#eeeeee] outline-none w-full text-black text-lg"
                            value={value}
                            onBlur={onBlur}
                            onChange={(e) => setValue(parseInt(e.target.value))}
                            placeholder={"Contact Number"}
                          />
                        </div>
                      );
                    }}
                  </Field>
                  <Field name="parent_name">
                    {({ value, setValue, onBlur, errors }) => {
                      return (
                        <div>
                          <input
                            className="px-4 py-3 bg-[#eeeeee] outline-none w-full text-black text-lg"
                            value={value}
                            onBlur={onBlur}
                            onChange={(e) => setValue(e.target.value)}
                            placeholder="Parent name"
                          />
                        </div>
                      );
                    }}
                  </Field>
                  <Field name="parent_no">
                    {({ value, setValue, onBlur, errors }) => {
                      return (
                        <div>
                          <input
                            className="px-4 py-3 bg-[#eeeeee] outline-none w-full text-black text-lg"
                            value={value}
                            onBlur={onBlur}
                            onChange={(e) => setValue(parseInt(e.target.value))}
                            placeholder="Parent's number"
                          />
                        </div>
                      );
                    }}
                  </Field>
                  <button
                    disabled={!isValid}
                    type="submit"
                    className="bg-[#f97140] text-white py-3 rounded-lg text-2xl hover:opacity-90 "
                  >
                    Submit
                  </button>
                </form>
              )}
            </Form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default UpdateStudent;
