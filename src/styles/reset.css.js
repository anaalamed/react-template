import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import styled from "styled-components";


export const GlobalStyles = createGlobalStyle`
  ${reset}
  html,body,#root{min-height:100%}
  html{font-size:10px;}
  body{
    /* border:deeppink 1px solid; */
    font-size:1.6rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

.App-logo {
  height: 10vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}

.App-header {
  background-color: #2c2c2e;
  min-height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
   width: 100%;
}

.App-link {
  color: #61dafb;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}


html,
/* body { */
   /* height: 100%;  */

html {
  font-size: 10px;
}
body {
  /* display: flex; */
  justify-content: center;
  align-items: center;
  background: #8ed0e2;
}

/*------------------------------------*/

.Game {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* align-items: center; */
  /* align-content: center; */
}
.nameInput {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 250px;
}

.code {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 250px;
}

.headline {
  font-size: 5rem;
  font-weight: normal;
  font-family: "Griffy", cursive;
  text-align: center;
  color: DarkSlateBlue;
  color: mintcream;
}

p {
  font-size: 3.8rem;
  font-weight: 400;
  font-family: "Yanone Kaffeesatz", sans-serif;
  text-align: center;
  color: DarkSlateBlue;
}

button {
  border-style: none;
  background: DarkSlateBlue;
  text-transform: uppercase;
  color: white;
  font-size: 2.8rem;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  cursor: pointer;
  font-family: "Yanone Kaffeesatz", sans-serif;
  margin: 20px;
  margin-top: 40px;

}
button:hover {
  background: blue;
}
button:active {
  background: blueviolet;
}

input {
  border-radius: 0.5rem;
  outline: none;
  border: 10px solid transparent;
  padding: 0 2rem;
  font-size: 2.5rem;
  transition: border 0.5s;
}
input:hover {
  border: 4px DarkSlateBlue solid;
  padding: 2rem;
  transition: 3s;
}

`;


export const Main = styled.main`
  height: 100%;
  /* padding: 5rem 0; */
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  margin-bottom: 1rem;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
  padding: 2.2rem 4.4rem;
  color: darkslateblue;
  font-weight: bold;
`;
