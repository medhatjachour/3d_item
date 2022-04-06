import React from "react";
import { Formik, Form } from "formik";
import Textfield from "../parts/TextField";
import * as Yup from "yup";
const Signup = () => {
  const validate = Yup.object({
    FirstName:Yup.string()
      .max(15,"must be 15 characters or less")
      .required("Required"),
      LastName:Yup.string()
      .max(20,"must be 20 characters or less")
      .required("Required"),
      Email:Yup.string()
      .email("email is invaild")
      .required("Email is Required"),
      Password:Yup.string()
      .min(8,"must be at least 6")
      .required("password Required"),
      ConfirmPassword:Yup.string()
      .oneOf([Yup.ref('password'),null], "password doesn't match")
      .required("confirm password is Required"),
  })
  
    return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={validate}
      onSubmit={(values)=>{
        console.log(values);
      }}
    >
      {(formik) => (
        <div className="contLog-box">
        <div className="log-box">

          <h1 className="my4"> SignUp</h1>
          {console.log("we are here")}
          {console.log(formik)}
          <Form>
            <Textfield label="First Name" name="FirstName" type="text" />
            <Textfield label="Last Name" name="LastName" type="text" />
            <Textfield label="Email" name="Email" type="email" />
            <Textfield label="Password" name="Password" type="Password" />
            <Textfield
              label="Confirm Password"
              name="ConfirmPassword"
              type="Password"
            />
            <button className="btn btn-dark mt-3" type="submit">Register </button>
          </Form>
        </div></div>
      )}
    </Formik>
  );
};

export default Signup;
