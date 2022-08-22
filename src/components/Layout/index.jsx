import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';

const Layout = ({ children }) => {
	return (
		<Container>
			<Content>{children}</Content>
			<Navbar />
			<MarginForNavbar />
		</Container>
	);
};

export default React.memo(Layout);

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	width: 100vw;
	height: 100vh;
	margin: 0 auto;
	overflow: hidden;
`;

const Content = styled.div`
	background-color: ghostwhite;
	display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: center;
	margin: 0 auto;
	width: 100%;
	height: 100%;
	max-width: 480px;
	min-width: 320px;
`;

const MarginForNavbar = styled.div`
	width: 100vw;
	height: 60px;
`;
