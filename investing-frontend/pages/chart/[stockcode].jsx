import Chart from '../../src/components/Chart';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const Chartpage = () => {
	const router = useRouter();
	return (
		<Container>
			<StockInfo>{router.query.stockcode}</StockInfo>
			<Chart name={`${router.query.stockcode}`} />
			<BtnContainer>
				<Button color={'rgba(255, 0, 0, 0.4)'} onClick={() => router.push('/order')}>
					매수
				</Button>
				<Button color={'rgba(0, 0, 255, 0.4)'} onClick={() => router.push('/order')}>
					매도
				</Button>
			</BtnContainer>
		</Container>
	);
};

export default Chartpage;

const StockInfo = styled.div`
	font-size: 6rem;
	height: 8rem;
`;

const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
`;

const BtnContainer = styled.div`
	width: 100%;
	height: 60px;
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
`;

const Button = styled.button`
	background-color: ${(props) => props.color};
	width: 40%;
	height: 40px;
	border-radius: 12px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
`;
