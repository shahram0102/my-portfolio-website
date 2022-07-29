import React from "react";

const Input = ({ formik, name, placeholder, type = "text" }) => {
  return (
    <div className="flex flex-col mb-4 items-start justify-start">
      <input
        className={`mb-2 text-xl shadow-[rgba(0 0 10px,0.8)] placeholder:text-gray-400 placeholder:text-sm text-blue-400 placeholder:font-thin   py-2 px-4 min-w-[300px] flex-1 w-full rounded-lg ${
          formik.errors[name] && formik.touched[name] && "border-red-600 border"
        }`}
        name="name"
        value={formik.values}
        {...formik.getFieldProps({ name })}
        type={type}
        placeholder={placeholder}
      />
      {formik.errors[name] && formik.touched[name] && (
        <span className="text-red-600">{formik.errors[name]}</span>
      )}
    </div>
  );
};

export default Input;
