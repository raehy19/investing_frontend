import StockItem from './StockItem';
import styled from 'styled-components';

function Stocks(props) {
	return (
		<Container>
			<StockItem name='종목명' price='현재가' change='등락' p_change='등락률'/>
			<StockItem name={props.items[0].name} price={props.items[0].price} 
			change={props.items[0].change} p_change={props.items[0].p_change}/>
			<StockItem name={props.items[1].name} price={props.items[1].price} 
			change={props.items[1].change} p_change={props.items[1].p_change}/>
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
