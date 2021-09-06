import React, { useState, useEffect } from 'react';
import { Main } from '../styles/reset.css';
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { startGameA } from '../state/slices/game.slice';

function GetCode(onGive) {
  const [redirect, setRedirect] = useState(false);
  const { game } = useSelector(state => state.game);
  const dispatch = useDispatch();

  const onStart = () => {
    console.log(game.playerA.identifier);
    dispatch(startGameA({ id: game.playerA.identifier }));
    setRedirect(true);
  }

  return (
    <Main>
      <p>code: {game.code}</p>
      <button onClick={onStart}>Start Game</button>
      {redirect ? (<Redirect to="/game" />) : null}
    </Main>
  )
}

export default GetCode
