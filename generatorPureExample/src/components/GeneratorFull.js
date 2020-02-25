import React, { useState } from 'react';
import generatorFunction from './generatorFunction';
import styled from 'styled-components'
let colors = generatorFunction();
const initialState = colors.next();
const Container = styled.main`
  padding: 1rem;
  font-family: sans-serif;
  background-color: ${props => props.backgroundColor};
`;

const Button = styled.button`
  margin: 0.25rem;
`;

function GeneratorFull() {
	const [colorState, setColorState] = useState(initialState);

	function updateBackgroundColor() {
		setColorState(colors.next());
	}

	function reset() {
		colors = generatorFunction();
		setColorState(initialState);
	}

	const { value, done } = colorState;

	return (
		<Container backgroundColor={value}>
			<h1>Hello!</h1>
			<Button disabled={done} onClick={updateBackgroundColor}>
				Change background color
			</Button>
			<Button onClick={reset}>Reset</Button>
		</Container>
	);
}

export default GeneratorFull