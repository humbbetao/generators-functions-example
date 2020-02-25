import React from 'react';
import Iterator from './components/Iterator';
import iteratorFunction from './components/iteratorFunction';
import iteratorWithSymbol from './components/iteratorWithSymbol';
import generatorFunction from './components/generatorFunction';
import GeneratorFull from './components/GeneratorFull';
const iterator = iteratorFunction();
const generator = generatorFunction();
function App() {
	return (
		<ul>
			Teste generators
			<Iterator iterator={iterator} />
			<Iterator iterator={iterator} />
			<Iterator iterator={iterator} />
			<Iterator iterator={iterator} />
			Teste WithSymbol
			<Iterator iterator={iteratorWithSymbol} />
			<Iterator iterator={iteratorWithSymbol} />
			<Iterator iterator={iteratorWithSymbol} />
			Teste Generator
			<Iterator iterator={generator} />
			<Iterator iterator={generator} />
			<Iterator iterator={generator} />
			Teste with hooks and generators
			<GeneratorFull></GeneratorFull>
		</ul>
	);
}

export default App;
