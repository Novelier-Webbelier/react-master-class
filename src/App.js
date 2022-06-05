import React from "react";
import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0px;
    background-color: red;
  }

  50%{
    transform: rotate(180deg);
    border-radius: 100px;
    background-color: green;
  }

  100% {
    transform: rotate(360deg);
    border-radius: 0px;
    background-color: blue;
  }

`;

const Emoji = styled.span`
  font-size: 30px;
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${rotateAnimation} 1s linear infinite;

  ${Emoji} {
    &:hover {
      font-size: 90px;
    }
  }
`;

function App() {
	return (
		<Wrapper>
			<Box>
				<Emoji as="div">🤩</Emoji>
			</Box>
			<Emoji as="div">🥰</Emoji>
			<Box>
				<Emoji as="div">🤪</Emoji>
			</Box>
		</Wrapper>
	);
}

export default App;
