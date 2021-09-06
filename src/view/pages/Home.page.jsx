import React, { useState } from 'react'
import styled from "styled-components";
import Game from "./Game";
import Start from "../Start";
import { Main, Title } from '../../styles/reset.css'

const Home = () => {
  const [game, setGame] = useState(null);

  return (
    <Main>
      {game ? (<Game game={game} />) : (<Start />)}
    </Main>
  )

};
export default Home;


// const Logo = styled.img`
//   width: 42rem;
//   border-radius: 0.6rem;
// `;

// const Description = styled.p`
//   line-height: 2;
//   text-align: center;
//   font-size: 1.6rem;
// `;
