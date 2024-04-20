import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import style from "./SignUp.module.css";
import sky1 from "../../images/c1.png";
import sky2 from "../../images/c2.png";

export default function SignUp() {
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState(null);
  let navigate = useNavigate();

  async function registerSubmit(values) {
    setLoading(true);
    let { data } = await axios.post(`https://note-sigma-black.vercel.app/api/v1/users/signUp`, values).catch((error) => {
      setApiError(error.response.data.msg);
      setLoading(false);
    });
    if (data.msg === "done") {
      setLoading(false);
      navigate("/login");
    }
  }

  let validationSchema = Yup.object({
    name: Yup.string().required("Name Is Required").min(3, "Min Length Is 3").max(10, "Max Length Is 10"),
    email: Yup.string().required("Email Is Required").email("Invalid Email"),
    password: Yup.string()
      .required("Password Is Required")
      .matches(/^[A-Z][\w @]{5,8}$/, "Invalid Password"),
    age: Yup.number().positive("Age must be a positive number").integer("Age must be an integer"),
    phone: Yup.string()
      .required("Name Is Required")
      .matches(/^01[0125][0-9]{8}$/, "we need eg phone"),
  });

  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      age: "",
      phone: "",
    },
    validationSchema,
    onSubmit: registerSubmit,
  });

  return (
    <section className="py-4">
      <div className="container">
        <div className="row d-flex justify-content-center flex-nowrap">
          <div className="col-md-6">
            <div className="info">
              <div className="text">
                <h3>Join to our community</h3>
                <h5>
                  “Sunshine is delicious, rain is refreshing, wind braces up, snow is exhilarating; there is no such thing as bad weather, only
                  different kinds of good weather.”
                </h5>
              </div>
              <div className={`${style.images}`}>
                <img className={`${style.sky1}`} src={sky1} alt="sky1" />
                <img className={`${style.sky2}`} src={sky2} alt="sky2" />
              </div>
            </div>
          </div>
          <div className="col-md-6 bg-main bg-white p-4">
            <form className="mt-4" onSubmit={formik.handleSubmit}>
              <div className="text">
                <h3>Create Account</h3>
              </div>
              {apiError ? <div className="alert alert-danger text-center">{apiError}</div> : ""}
              <div className="form-outline mb-4">
                <input
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="text"
                  id="name"
                  name="name"
                  className="form-control form-control-lg"
                  placeholder="Name"
                />
                {formik.errors.name && formik.touched.name ? <div className="alert alert-danger py-2">{formik.errors.name}</div> : ""}
              </div>
              <div className="form-outline mb-4">
                <input
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="email"
                  id="email"
                  name="email"
                  className="form-control form-control-lg"
                  placeholder="Email"
                />
                {formik.errors.email && formik.touched.email ? <div className="alert alert-danger py-2">{formik.errors.email}</div> : ""}
              </div>
              <div className="form-outline mb-3">
                <input
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="password"
                  id="password"
                  name="password"
                  className="form-control form-control-lg"
                  placeholder="password"
                />
                {formik.errors.password && formik.touched.password ? <div className="alert alert-danger py-2">{formik.errors.password}</div> : ""}
              </div>
              <div className="form-outline mb-4">
                <input
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="text"
                  id="age"
                  name="age"
                  className="form-control form-control-lg"
                  placeholder="Age"
                />
                {formik.errors.age && formik.touched.age ? <div className="alert alert-danger py-2">{formik.errors.age}</div> : ""}
              </div>
              <div className="form-outline mb-4">
                <input
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="tel"
                  id="phone"
                  name="phone"
                  className="form-control form-control-lg"
                  placeholder="Phone"
                />
                {formik.errors.phone && formik.touched.phone ? <div className="alert alert-danger py-2">{formik.errors.phone}</div> : ""}
              </div>

              <div className="text-center text-lg-start mt-4 pt-2 d-flex justify-content-between">
                {loading ? (
                  <button type="button" className="btn text-light">
                    <ThreeDots
                      visible={true}
                      height="30"
                      width="30"
                      color="#0aad0a"
                      radius="9"
                      ariaLabel="three-dots-loading"
                      wrapperStyle={{}}
                      wrapperClass=""
                    />
                  </button>
                ) : (
                  <button
                    disabled={!(formik.isValid && formik.dirty)}
                    type="submit"
                    className="btn btn-main text-white btn-lg"
                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                  >
                    Register
                  </button>
                )}

                <Link className="btn btn-main text-white btn-lg" to={"/login"}>
                  Login
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
