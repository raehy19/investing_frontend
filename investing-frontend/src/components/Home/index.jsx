import SearchBar from './SearchBar';
import Stocks from './Stocks';
import styled from 'styled-components';

const Home = () => {
	const stocks = [
		{
			id: 's1',
			title: 'AAPL',
			amount: 891.55,
		},

		{
			id: 's2',
			title: 'TSLA',
			amount: 161.45,
		},
	];

	return (
		<Container className="App">
			<h1>주식</h1>
			<button>로그인</button>
			<SearchBar />
			<Stocks items={stocks} />
		</Container>
	);
};

export default Home;

const Container = styled.div`
	width: 100%;
`;
