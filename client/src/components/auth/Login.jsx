import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Input from "../common/Input";
import { useEffect } from "react";
import logo from "../../assets/logo.png";
const loginSchema = Yup.object({
  email: Yup.string().email("* Not a valid email").required("* Email required"),
  password: Yup.string().required("* Password required"),
});

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("key")) {
      navigate("/product/new");
    }
  }, []);

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    submitForm,
    resetForm,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      console.log(values);
      const body = {
        email: values.email,
        password: values.password,
      };
      console.log(body);
      try {
        const { data } = await axios.post(
          "http://localhost:3000/api/v1/auth/login",
          body
        );
        console.log(data);
        if (data && !data.hasError) {
          alert(data.msg);
          resetForm();
          localStorage.setItem("key", data.data.key);
          navigate("/product/new");
        } else {
          alert(data.msg);
        }
      } catch (error) {
        console.log(error);
        alert(data.msg);
      }
    },
  });

  return (
    <div className="w-screen h-screen flex items-center justify-center ">
      <div className=" hidden md:w-1/2 md:h-full md:flex md:justify-center md:items-center">
        <div className="flex justify-center items-center">
          <img src={logo} alt="none" />
        </div>
      </div>

      <div className="h-1/2 w-full flex justify-center items-center md:w-1/2 md:h-full">
        <div className="w-full p-4">
          <h2 className="mb-9 text-2xl font-bold text-black ">Log In to MMS</h2>
          <div>
            <div className="mb-4">
              <label className="mb-2.5 font-medium text-black">Email</label>
              <div className="relative">
                <Input
                  type={"email"}
                  placeholder={"Enter your email"}
                  name={"email"}
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  feedback={[errors.email, touched.email]}
                />
                <span className="absolute right-4 top-4">
                  <svg
                    className="fill-current"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity="0.5">
                      <path
                        d="M11.0008 9.52185C13.5445 9.52185 15.607 7.5281 15.607 5.0531C15.607 2.5781 13.5445 0.584351 11.0008 0.584351C8.45703 0.584351 6.39453 2.5781 6.39453 5.0531C6.39453 7.5281 8.45703 9.52185 11.0008 9.52185ZM11.0008 2.1656C12.6852 2.1656 14.0602 3.47185 14.0602 5.08748C14.0602 6.7031 12.6852 8.00935 11.0008 8.00935C9.31641 8.00935 7.94141 6.7031 7.94141 5.08748C7.94141 3.47185 9.31641 2.1656 11.0008 2.1656Z"
                        fill=""
                      />
                      <path
                        d="M13.2352 11.0687H8.76641C5.08828 11.0687 2.09766 14.0937 2.09766 17.7719V20.625C2.09766 21.0375 2.44141 21.4156 2.88828 21.4156C3.33516 21.4156 3.67891 21.0719 3.67891 20.625V17.7719C3.67891 14.9531 5.98203 12.6156 8.83516 12.6156H13.2695C16.0883 12.6156 18.4258 14.9187 18.4258 17.7719V20.625C18.4258 21.0375 18.7695 21.4156 19.2164 21.4156C19.6633 21.4156 20.007 21.0719 20.007 20.625V17.7719C19.9039 14.0937 16.9133 11.0687 13.2352 11.0687Z"
                        fill=""
                      />
                    </g>
                  </svg>
                </span>
              </div>
            </div>

            <div className="mb-6">
              <label className="mb-2.5 font-medium text-black">Password</label>
              <div className="relative">
                <Input
                  type={"password"}
                  placeholder={"Enter your password"}
                  name={"password"}
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  feedback={[errors.password, touched.password]}
                />

                <span className="absolute right-4 top-4">
                  <svg
                    className="fill-current"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity="0.5">
                      <path
                        d="M16.1547 6.80626V5.91251C16.1547 3.16251 14.0922 0.825009 11.4797 0.618759C10.0359 0.481259 8.59219 0.996884 7.52656 1.95938C6.46094 2.92188 5.84219 4.29688 5.84219 5.70626V6.80626C3.84844 7.18438 2.33594 8.93751 2.33594 11.0688V17.2906C2.33594 19.5594 4.19219 21.3813 6.42656 21.3813H15.5016C17.7703 21.3813 19.6266 19.525 19.6266 17.2563V11C19.6609 8.93751 18.1484 7.21876 16.1547 6.80626ZM8.55781 3.09376C9.31406 2.40626 10.3109 2.06251 11.3422 2.16563C13.1641 2.33751 14.6078 3.98751 14.6078 5.91251V6.70313H7.38906V5.67188C7.38906 4.70938 7.80156 3.78126 8.55781 3.09376ZM18.1141 17.2906C18.1141 18.7 16.9453 19.8688 15.5359 19.8688H6.46094C5.05156 19.8688 3.91719 18.7344 3.91719 17.325V11.0688C3.91719 9.52189 5.15469 8.28438 6.70156 8.28438H15.2953C16.8422 8.28438 18.1141 9.52188 18.1141 11V17.2906Z"
                        fill=""
                      />
                      <path
                        d="M10.9977 11.8594C10.5852 11.8594 10.207 12.2031 10.207 12.65V16.2594C10.207 16.6719 10.5508 17.05 10.9977 17.05C11.4102 17.05 11.7883 16.7063 11.7883 16.2594V12.6156C11.7883 12.2031 11.4102 11.8594 10.9977 11.8594Z"
                        fill=""
                      />
                    </g>
                  </svg>
                </span>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <button
                className="py-2 px-4  bg-[#00A0DE] hover:bg-blue-300 text-white w-full text-center  font-semibold shadow-md   rounded-lg "
                onClick={submitForm}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
