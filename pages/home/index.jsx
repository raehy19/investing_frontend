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
			p_change: '3.26%',
		},
		{
			ticker: '009830',
			name: '한화솔루션',
			price: 45700,
			change: 1350,
			p_change: '3.05%',
		},
		{
			ticker: '009830',
			name: '삼성전자',
			price: 60100,
			change: -800,
			p_change: '-1.31%',
		},
		{
			ticker: '009830',
			name: 'LG디스플레이',
			price: 16000,
			change: -900,
			p_change: '-5.33%',
		},
		{
			ticker: '009830',
			name: 'LG전자',
			price: 100000,
			change: -1000,
			p_change: '-0.99%',
		},
		{
			ticker: '009830',
			name: 'SK',
			price: 230000,
			change: -1500,
			p_change: '-0.65%',
		},
		{
			ticker: '009830',
			name: 'NAVER',
			price: 245500,
			change: -2500,
			p_change: '-1.01%',
		},
	];

	const users = [
		{
			id: 1,
			name: 'SK',
			budget: 92000,
			place: 1,
			p_change: '3.26%',
		},

		{
			ticker: '009830',
			name: '한화',
			price: 45700,
			place: 1,
			p_change: '3.05%',
		},
	];

	return (
		<Container className="App">
			<Header>
				<h1 style={{ fontSize: '30px', marginLeft: '20px' }}>슈퍼개미</h1>
				<Button>로그인</Button>
			</Header>
			<SearchBar stockItems={stocks} />
			<Stocks items={stocks} />
		</Container>
	);
};

export default Home;

const Container = styled.div`
	width: 100%;
	height: 100%;
	padding: 10px;
	height: 60px;
	margin: 10px 0px;
`;

const Header = styled.div`
	width: 100%;
	height: 60px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

const Button = styled.button`
	width: 60px;
	height: 40px;
	border: 2px solid black;
	border-radius: 10px;
`;
