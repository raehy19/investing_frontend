import { useRouter } from 'next/router';
import styled from 'styled-components';

function StockItem(props) {
	const router = useRouter();
	return (
		<Container onClick={() => router.push(`/chart/${props.ticker}`)}>
			<h2 style={{ width: '30%' }}>{props.name}</h2>
			<h2>{props.price}</h2>
			<h2>{props.change}</h2>
			<h2>{props.p_change}</h2>
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
