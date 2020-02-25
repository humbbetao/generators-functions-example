function* createColorIterator() {
	let i = 0;
	const colors = [
		'#ffffff',
		'#ebfbfa',
		'#d8f8f5',
		'#c5f5f0',
		'#b2f2ec',
		'#9fefe7',
		'#8cece2',
		'#79e9de',
		'#66e6d9',
		'#53e3d4',
		'#40e0d0',
	];
	while (i < colors.length) {
		const color = colors[i];
		i++;
		yield color;
	}
}

export default createColorIterator;
