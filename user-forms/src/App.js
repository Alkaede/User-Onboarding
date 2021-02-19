import React, { useState, useEffect } from 'react';
import { v4 } from 'uuid';
import axios from 'axios';
import './App.css';
import Form from './Components/Form';
import *  as yup from 'yup'
import schema from './Components/Schemas/Schema';
import ReturnedForm from './Components/ReturnedForm';

// Initial consts
const url = 'https://reqres.in/api/users'

const initialValues = {
  first_name:'',
  last_name:'',
  email:'',
  password:'',
  role:'',
  terms: false
}

const initialErrors ={
  first_name:'',
  last_name:'',
  email:'',
  password:'',
  role:'',
}

// app w/ state management
export default function App() {
  const [dataInput, setDataInput] = useState([])
  const [formValues, setFormValues] = useState (initialValues)
  const [formErrors, setFormErrors] = useState (initialErrors)
  const [disabled, setDisabled] = useState(true)

//new form submission
  const newForm = (

  ) =>{
      const newDataInput = {
        first_name:formValues.first_name.trim(),
        last_name:formValues.last_name.trim(),
        email:formValues.email.trim(),
        role:formValues.role.trim(),
        terms:formValues.terms,
        id:v4()
      }
      postDataInput(newDataInput)
    }

//axios post
    const postDataInput = (newdataInput) =>{
      axios
      .post(url, newdataInput)
      .then((res)=>{
        setDataInput([res.data, ...dataInput])
        setFormValues(initialValues)
      })
      .catch(err => {
        console.log(err)
      })
    }

// change
  const onChange = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({...formErrors,[name]: "",})
      })
      .catch((err) => {
        setFormErrors({...formErrors,[name]: err.errors[0],
        })
      })
    setFormValues({...formValues, [name]: value,})
  }

// side effect
    useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);



  return (
    <div className="App">
      <Form
        values={formValues}
        onChange={onChange}
        newForm={newForm}
        disabled={disabled}
        errors={formErrors}
      />
      {
        dataInput.map(info => {
          return(
            <ReturnedForm key={info.id} info={info}/>
          )
        })
      };
    </div>
  );
}