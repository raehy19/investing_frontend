import styled from 'styled-components';
import { useRouter } from 'next/router';

const Navbar = () => {
	const router = useRouter();
	return (
		<Container>
			<Button onClick={() => router.push('/')}>홈</Button>
			<Button>관심</Button>
			<Button>랭킹</Button>
			<Button>잔고</Button>
		</Container>
	);
};

const Container = styled.div`
	background-color: snow;
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
	width: 100%;
	height: 50px;
	position: fixed;
	max-width: 480px;
	min-width: 320px;
	bottom: 0;
	z-index: 1;
`;

const Button = styled.button`
	background-color: aliceblue;
	width: 20%;
	height: 40px;
	border-radius: 12px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
`;

export default Navbar;
