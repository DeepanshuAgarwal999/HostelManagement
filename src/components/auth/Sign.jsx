import React from "react";
import Button from "../shared/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Field, Form } from "houseform";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../../slices/usersApiSlice";
import { setCredentials } from "../../slices/authSlice";
const Sign = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, { isLoading }] = useLoginMutation();
  const { userId } = useSelector((state) => state.auth);
  console.log(userId);
  React.useEffect(() => {
    if (userId) {
      navigate("/getdata");
    }
  }, [userId]);

  return (
    <section>
      <h1 className="text-center md:text-5xl text-3xl font-medium underline pt-10 pb-5">
        Login
      </h1>
      <ToastContainer limit={2} theme="dark" autoClose={1500} />
      <div className="max-w-7xl w-full h-[70vh] flex items-center mx-auto ">
        <div className="sm:w-[420px] w-[350px] pt-2  mx-auto bg-slate-800 flex justify-center cardShadow">
          <Form
            onSubmit={async (values) => {
              // userLogin(values);
              try {
                const res = await login({
                  id: values.id,
                  email: values.email,
                  password: values.password,
                }).unwrap();
                dispatch(setCredentials({ ...res }));
                toast.success("sign in successfully", {
                  onClose: () => navigate("/getdata"),
                });
              } catch (e) {
                console.log(e);
                toast.error("login failed");
              }
            }}
          >
            {({ isValid, submit }) => (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  submit();
                }}
                autoComplete="off"
                className="w-full flex flex-col gap-12 px-10 py-10 "
              >
                <Field
                  name="email"
                  // onBlurValidate={z.string().email("This must be an email")}
                >
                  {({ value, setValue, onBlur, errors }) => {
                    return (
                      <div>
                        <input
                          value={value}
                          onBlur={onBlur}
                          onChange={(e) => setValue(e.target.value)}
                          placeholder={"Email"}
                          autoComplete="none"
                          className="p-4 px-10 w-full outline-0 boxshadow"
                        />
                        {errors.map((error) => (
                          <p key={error} className="text-red-500 text-sm">
                            {error}
                          </p>
                        ))}
                      </div>
                    );
                  }}
                </Field>
                <Field
                  name="id"
                  // onBlurValidate={z.string().email("This must be an email")}
                >
                  {({ value, setValue, onBlur, errors }) => {
                    return (
                      <div>
                        <input
                          value={value}
                          onBlur={onBlur}
                          onChange={(e) => setValue(parseInt(e.target.value))}
                          placeholder={"id"}
                          autoComplete="none"
                          className="p-4 px-10 w-full outline-0 boxshadow"
                        />
                        {errors.map((error) => (
                          <p key={error} className="text-red-500 text-sm">
                            {error}
                          </p>
                        ))}
                      </div>
                    );
                  }}
                </Field>
                <Field
                  name="password"
                  onChangeValidate={z
                    .string()
                    .min(4, "Must be at least 4 characters long")}
                >
                  {({ value, setValue, onBlur, errors }) => {
                    return (
                      <div>
                        <input
                          value={value}
                          onBlur={onBlur}
                          onChange={(e) => setValue(e.target.value)}
                          placeholder={"Password"}
                          type="password"
                          className="p-4 px-10 w-full boxshadow outline-0"
                        />
                        {errors.map((error) => (
                          <p key={error} className="text-red-500 text-sm">
                            {error}
                          </p>
                        ))}
                      </div>
                    );
                  }}
                </Field>

                <Button
                  disabled={!isValid}
                  type="submit"
                  className="bg-sky-500 text-xl"
                >
                  Login
                </Button>
              </form>
            )}
          </Form>
        </div>
      </div>
    </section>
  );
};

export default Sign;
