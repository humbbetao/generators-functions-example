import React from 'react';

export default function Iterator({ iterator }) {
	return <li>{JSON.stringify(iterator.next())}</li>;
}
