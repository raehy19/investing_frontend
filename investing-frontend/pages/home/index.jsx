import SearchBar from '../../src/components/SearchBar';
import Stocks from '../../src/components/Stocks/Stocks';
import styled from 'styled-components';

const Home = () => {
	const stocks = [
		{
			ticker: '000660',
			name: 'SK하이닉스',
			price: 92000,
			change: -3100,
			p_change: '3.26%'
		},

		{
			ticker: '009830',
			name: '한화솔루션',
			price: 45700,
			change: 1350,
			p_change: '3.05%'
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
