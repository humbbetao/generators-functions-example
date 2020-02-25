import React from 'react';
import { useDispatch } from 'react-redux';
import { getNews } from '../actions';

export default function Button() {
	const dispatch = useDispatch();
	return <button onClick={() => dispatch(getNews)}>Press to see news</button>;
}
