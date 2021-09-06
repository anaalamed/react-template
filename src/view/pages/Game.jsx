import React, { useState, useEffect } from "react";
import { Main } from '../../styles/reset.css';
import Board from "../Board";
import { getGame } from '../../state/slices/game.slice';
import { useSelector, useDispatch } from "react-redux";

function Game() {
  const dispatch = useDispatch();
  const { game, me } = useSelector(state => state.game);
  // console.log(game);

  useEffect(() => {
    if (Object.keys(game).length !== 0) {
      const interval = setInterval(() => {
        dispatch(getGame({ id: game._id }))
      }, 3000);
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <Main>
      <p>Code: {game.code}</p>
      <br></br>

      <p>Me: {me.name}</p>
      <p>Opposite: {(me.name === game.playerA?.name) ? (game.playerB?.name) : (game.playerA?.name)}</p>

      {(Object.keys(game).length !== 0) ?
        (<>
          <Board game={game} me={me} />
        </>)
        : null}

      <p>Turn: {(game.currentTurn === me.player) ? ('my') : ("opposite's")}</p>
      <p>My sign: {(game.xSign === me.player) ? ('X') : ("O")}</p>
    </Main>
  )
}

export default Game;
