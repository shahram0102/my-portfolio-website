import { useFormik } from "formik";
import React from "react";
import * as yup from "yup";
import Input from "../../common/Input";

// 1.Initial Values
const initialValues = {
  name: "",
  email: "",
  message: "",
};

// 2.validation
const validationSchema = yup.object({
  name: yup
    .string()
    .required("Please Enter Your Name")
    .min(6, "minimum length of name 6 character")
    .max(16, "maximum length of name 16 character"),
  email: yup
    .string()
    .email("Your Email Is Invalid")
    .required("Please Enter Your Email"),
  message: yup
    .string()
    .required()
    .min(25, "you message minimus must have a 25 characters"),
});

const Form = () => {
  const onSubmit = (values) => {};
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <form className="bg-stone-400 rounded-lg  p-2">
      <Input placeholder={"Your Full Name"} formik={formik} name={"name"} />
      <Input
        placeholder={"Your Email"}
        formik={formik}
        type="email"
        name={"email"}
      />

      <div className="flex flex-col mb-12 items-start justify-start">
        <textarea
          placeholder="Your Message"
          value={formik.values.message}
          onChange={formik.handleChange}
          name="message"
          onBlur={formik.handleBlur}
          className={`  mb-2 text-blue-400 text-xl rounded-lg placeholder:text-sm min-h-[120px] min-w-[360px] w-[360px] p-3 ${
            formik.errors.message &&
            formik.touched.message &&
            "border-red-600 border"
          }`}
        ></textarea>
        {formik.errors.message && formik.touched.message && (
          <span className="text-red-600">{formik.errors.message}</span>
        )}
      </div>

      <button
        type="submit"
        className={` disabled:cursor-not-allowed disabled:bg-slate-500 cursor-pointer bg-blue-400 py-2 px-4 rounded-lg`}
        disabled={!formik.isValid}
      >
        Send Message
      </button>
    </form>
  );
};

export default Form;
