import React, { useState } from 'react'
import EnterName from "./EnterName";
import GetCode from "./GetCode";
import EnterCode from "./EnterCode";
import { Main, Title } from '../styles/reset.css'
import { useSelector, useDispatch } from "react-redux";
import { createCode, startGame } from '../state/slices/game.slice';

function Start() {
  const [name, setName] = useState('');
  const [codeState, setCodeState] = useState(''); // get/enter
  const [code, setCode] = useState(0);
  const dispatch = useDispatch();
  const game = useSelector(state => state.game);

  const onGet = () => {
    setCodeState('get');
    dispatch(createCode({ name }));
    setCode(game.game.code);
  }

  return (
    <div>
      <EnterName onChange={setName} />

      {codeState ? (
        <>
          {codeState === 'get' ?
            (<GetCode onGive={setCode} />) :
            (<EnterCode name={name} onChange={setCode} />)}
        </>) :
        (<div className="buttons">
          <button onClick={onGet}>get a code</button>
          <button onClick={() => setCodeState('enter')}>enter a code</button>
        </div>)
      }
    </div >
  )
}

export default Start;
