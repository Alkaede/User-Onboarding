import React from 'react'
import styled from 'styled-components'

const InfoContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  border: 1px black solid;
  max-width: 50%;
  margin: 10px auto;
  background-color: rgba(255, 255, 255, 0.4);
  box-shadow: 0 10px 10px 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  font-weight: 500;
  text-shadow: 2px 2px 5px white;

  h2{
    text-transform: capitalize;
  }
  p{
    border: none;
  }

`

export default function ReturnedForm(props) {
  const { info } = props

  if (!info) {
    return <h3>Working on fetching your info...</h3>
  }

  return (
    <InfoContainer>
      <h2>{info.first_name} {info.last_name}</h2>
      <p>Email: {info.email}</p>
      <p>Role: {info.role}</p>
    </InfoContainer>
  )
}
