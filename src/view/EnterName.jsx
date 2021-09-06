import React from 'react';
// import styled from "styled-components";
import { Main, Title } from '../styles/reset.css'

function EnterName({ onChange }) {
  return (
    <Main>
      <Title>What is your name?</Title>

      <input
        type="text"
        placeholder="Enter your name..."
        onChange={(event) => onChange(event.target.value)}
      />
    </Main>
  )
}

export default EnterName

