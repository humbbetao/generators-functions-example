import React from 'react';
import Button from './components/Button';
import NewsItem from './components/NewsItem';
import Loading from './components/Loading';
export default function App() {
	return (
		<React.Fragment>
			<Button />
			<Loading />
			<NewsItem />
		</React.Fragment>
	);
}
