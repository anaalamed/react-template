import React from 'react';
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { move, status } from '../state/slices/game.slice';
import Game from './pages/Game';


function Board({ game, me }) {
  const dispatch = useDispatch();
  // console.log(game._id, me.identifier);

  const onMove = (i, j) => {
    if (game.currentTurn === me.player) {
      if (game.board[i][j] === '') {
        dispatch(move({ code: game.code, id: me.identifier, move: [i, j] }));

        setTimeout(() => {
          dispatch(status({ gameId: game._id, playerId: me.identifier }));
          // dispatch(status({ gameId: "61222abb4672660015acb045", playerId: "61222abb4672660015acb044" }));
        }, 2000);
      }
    }
  }

  return (
    <Box>
      <tbody>
        {game.board.map((line, i) => (
          <Line>
            { line.map((sign, j) => (<Cell key={i, j} onClick={() => onMove(i, j)} >{sign}</Cell>))}
          </Line>
        ))}
      </tbody>
      {/* <button onClick={() => {
        dispatch(status({ gameId: game._id, playerId: me.identifier }));
      }}>status</button> */}
    </Box>
  )
}

export default Board;


const Box = styled.table`
  margin-top: 30px;
  border: 1px solid darkslateblue;   
  width: 50%;
  border: 1rem solid darkslateblue;
`;

const Line = styled.tr`
  display: flex;
`;

const Cell = styled.td`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  font-weight: bold;
  color: white;
  font-size: 50px;

  width: 100px;
  height: 100px;
  font-weight: bold;
  color: white;

  border: 1px solid darkslateblue;
  border-collapse: collapse;
  text-align: center;

  &:hover {
      background-color: darkslateblue;
  }
`;

