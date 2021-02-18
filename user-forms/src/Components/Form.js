import React from 'react'
import '../App.css'
import { TOS } from './ToS/ToS'


export default function Form(){
  
  
  
  return (
    <div>
      <form>
        <label>
          First Name:
          <input 
            type='text'
            id='fname'
          />
        </label>
        <label>
          Last Name:
          <input 
            type='text'
            id='lname'
          />
        </label>
        <label>
          Email:
          <input 
            type='email'
          />
        </label>
        <label>
          Password:
          <input 
            type='password'
          />
        </label>
        <div className='tos-container'>
          <details>
            <summary>Read the Terms of Service</summary>
              <TOS/>
          </details>
          <label>
          Terms of Service Agreement
            <input 
              type='checkbox'
            />
          </label>
        </div>

        <button>Submit</button>
      </form>
    </div>
  )
}