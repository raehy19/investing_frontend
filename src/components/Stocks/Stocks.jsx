import StockItem from './StockItem';
import styled from 'styled-components';

function Stocks(props) {
	console.log(props.items);
	return (
		<Container>
			<StockItem name="종목명" price="현재가" change="등락" p_change="등락률" />
			{props.items.map((props) => (
				<StockItem
					ticker={props.ticker}
					name={props.name}
					price={props.price}
					change={props.change}
					p_change={props.p_change}
				/>
			))}
		</Container>
	);
}

export default Stocks;

const Container = styled.div`
	padding: 1rem;
	background-color: rgb(134, 232, 215);
	margin: 2rem auto;
	width: 50rem;
	max-width: 95%;
	border-radius: 12px;
`;
