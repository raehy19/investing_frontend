import styled from 'styled-components';

function StockItem(props) {
	return (
		<Container>
			<h2>{props.title}</h2>
			<h2>${props.amount}</h2>
		</Container>
	);
}

export default StockItem;

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
	padding: 0.5rem;
	margin: 1rem 0;
	border-radius: 12px;
	background-color: #fdfdfd;
`;
