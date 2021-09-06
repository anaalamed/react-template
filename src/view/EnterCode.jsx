import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { startGameB } from '../state/slices/game.slice';
import { Main } from '../styles/reset.css';
import { Redirect } from "react-router-dom";


function EnterCode({ name, onChange }) {
  const [code, setCode] = useState(0);
  const [redirect, setRedirect] = useState(false);
  const dispatch = useDispatch();

  const onStart = () => {
    dispatch(startGameB({ code: code, playerName: name }));
    setTimeout(() => {
      setRedirect(true);
    }, 2000)
  }

  return (
    <Main>
      <h1>What is your code?</h1>

      <input
        type="text"
        placeholder="Enter your code..."
        // onChange={(event) => onChange(event.target.value)}
        onChange={(event) => setCode(event.target.value)}
      />

      <button onClick={onStart}>Start Game</button>
      {redirect ? (<Redirect to="/game" />) : null}
    </Main>
  )
}

export default EnterCode
