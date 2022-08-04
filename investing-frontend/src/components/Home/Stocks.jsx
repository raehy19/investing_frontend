import StockItem from './StockItem';
import styled from 'styled-components';

function Stocks(props) {
	return (
		<Container>
			<StockItem title={props.items[0].title} amount={props.items[0].amount} />
			<StockItem title={props.items[1].title} amount={props.items[1].amount} />
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
