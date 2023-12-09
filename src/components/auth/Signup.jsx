import { Form, Field } from "houseform";
import { z } from "zod";
import Button from "../shared/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useNavigation } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const handleResponse = async (values) => {
    try {
      const response = await fetch("http://localhost:8080/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          password: values.password,
        }),
      });
      const data = await response.json();
      if (data.success === false) {
        toast.error(data.massage);
      } else {
        toast.success("user Registered", {
          onClose: () => navigate("/login"),
        });
      }
    } catch (e) {
      console.warn(e);
    }
  };
  return (
    <section>
      <h1 className="text-center md:text-5xl text-3xl font-medium underline pt-5 sm:mb-5 mb-10 ">
        Register
      </h1>
      <ToastContainer theme="dark" limit={2} autoClose={2000} />
      <div className="max-w-7xl w-full h-[70vh] flex items-center mx-auto">
        <div className="sm:w-[450px] w-[350px] pt-2 px-3 sm:mt-10 mt-10 mx-auto bg-slate-800 flex justify-center cardShadow">
          <Form
            onSubmit={(values) => {
              handleResponse(values);
            }}
          >
            {({ isValid, submit }) => (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  submit();
                }}
                autoComplete="off"
                className="w-full flex flex-col gap-8 px-10 py-10 "
              >
                <Field name="name">
                  {({ value, setValue, onBlur, errors }) => {
                    return (
                      <div>
                        <input
                          value={value}
                          onBlur={onBlur}
                          onChange={(e) => setValue(e.target.value)}
                          placeholder={"name"}
                          autoComplete="none"
                          className="p-4 px-10 w-full outline-0 bg-[#ddd9d9] boxshadow"
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
                  name="email"
                  onBlurValidate={z.string().email("This must be an email")}
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
                <Field name="password">
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
                <Field
                  name="confirmpassword"
                  listenTo={["password"]}
                  onChangeValidate={(val, form) => {
                    if (val === form.getFieldValue("password")?.value) {
                      return Promise.resolve(true);
                    } else {
                      return Promise.reject("Passwords must match");
                    }
                  }}
                >
                  {({ value, setValue, onBlur, errors, isTouched }) => {
                    return (
                      <div>
                        <input
                          value={value}
                          onBlur={onBlur}
                          onChange={(e) => setValue(e.target.value)}
                          placeholder={"Password Confirmation"}
                          type="password"
                          className="p-4 px-10 w-full boxshadow outline-0"
                        />
                        {isTouched &&
                          errors.map((error) => (
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
                  className="bg-red-500 text-xl"
                >
                  Submit
                </Button>
              </form>
            )}
          </Form>
        </div>
      </div>
    </section>
  );
};

export default Signup;
