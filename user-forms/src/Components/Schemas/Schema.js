import * as yup from "yup"

export default yup.object().shape({
    first_name: yup
      .string()
      .required("Name is required"),
    last_name  : yup
      .string()
      .required("Last name is required"),
    email: yup
      .string()
      .email("Must be a valid email address")
      .required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(5, "Password must be 5 characters minimum"),
    tos: yup.boolean().required(),
    button: yup.boolean(),
    role: yup.string().oneOf(['Student','Instructor'])
}); 
