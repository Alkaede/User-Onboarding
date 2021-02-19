import React from 'react'
import '../App.css'
import { TOS } from './ToS/ToS'
import styled from 'styled-components'

export default function Form({values, onChange, newForm, disabled, errors}){
  const onSubmit = (e) => {
      e.preventDefault()
      newForm()
  }

   const changeHandler= (e) => {
      const { name, value, type, checked } = e.target
      const values = type === "checkbox" ? checked : value
      onChange(name, values)
  }

  return(
    <TestStyle>
    <div>
      <form onSubmit={onSubmit}>
        <div>{errors.first_name}</div>
      <label>First name:
        <input
          name='first_name'
          type='text'
          placeholder='first name'
          onChange={changeHandler}
          value={values.first_name}
        />
      </label>

        <div>{errors.last_name}</div>
      <label>Last Name:
        <input
          name= 'last_name'
          type='text'
          placeholder='last name'
          onChange={changeHandler}
          value={values.last_name}
        />
      </label>

        <div>{errors.email}</div>
      <label>
        Email:
        <input
          name='email'
          type='email'
          placeholder='email'
          onChange={changeHandler}
          value={values.email}
        />
      </label>

        <div>{errors.password}</div>
      <label>
        Password:
        <input
          name='password'
          type='password'
          placeholder='password'
          onChange={changeHandler}
          value={values.password}
        />
      </label>
      <label>
        Role:
        <select name='role' onChange={changeHandler} value={values.role}>
          <option value=''>--Select Role--</option>
          <option value='Student'>Student</option>
          <option value='Instructor'>Instructor</option>
        </select>
      </label>

        <div>{errors.terms}</div>
      <label>
        <details>
          <summary>Terms of Service</summary>
            <TOS/>
        </details>
          <input
          type='checkbox'
          />
      </label>
          <button disabled={disabled}>Submit</button>
        </form>
    </div>
  </TestStyle>
  )
}

const TestStyle = styled.div`
  display: flex;
  justify-content: center;
  margin: 2% auto;
  text-shadow: 2px 1px 4px white;

  label{
    color: black;
    font-weight: 700;
    margin: 0.5vh;
  }

  input{
    padding: 8px 0;
    margin-left: 10%;
  }

  button{
    width: 25%;
  }

`