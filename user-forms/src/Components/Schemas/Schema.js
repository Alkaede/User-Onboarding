import * as yup from 'yup';


let schema = yup.object().shape({
  fname: yup.string().required('First name is required.').trim(),
  lname: yup.string().required('Last name is required.').trim(),
  email: yup.email().required(),
  password: yup.string().required(),
  tos: yup.isType()
})