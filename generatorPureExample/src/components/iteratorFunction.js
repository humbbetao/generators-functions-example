// const myIterator = createIterator();
// const { value, done } = myIterator.next();

function createColorIterator() {
	let i = 0;
	const colors = ['red', 'yellow', 'blue'];
	return {
		next: () => {
			if (i < colors.length) {
				let value = colors[i];
				i++;
				return {
					value: value,
					done: false,
				};
			} else {
				return {
					value: undefined,
					done: true,
				};
			}
		},
	};
}
export default createColorIterator
// // ?let iterator = createColorIterator();

//   console.log(iterator.next());
//   // { value: "red", done: false }
//   console.log(iterator.next());
//   // { value: "yellow", done: false }
//   console.log(iterator.next());
//   // { value: "blue", done: false }
//   console.log(iterator.next());
//   // { value: undefined, done: true }
