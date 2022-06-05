import React from "react";
import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const BoxOne = styled.div`
  background-color: teal;
  height: 100px;
  width: 100px;
`;

const BoxTwo = styled.div`
  background-color: tomato;
  width: 100px;
  height: 100px;
`;

const BoxThree = styled.div`
  background-color: aqua;
  width: 100px;
  height: 100px;
`;

const Text = styled.h1`
  font-size: 20px;
  color: white;
`;

function App() {
	return (
		<Father>
			<BoxOne>
				<Text>Hello World!</Text>
			</BoxOne>
			<BoxTwo />
			<BoxThree />
		</Father>
	);
}

export default App;
