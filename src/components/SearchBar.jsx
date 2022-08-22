import styled from 'styled-components';
import { useState } from 'react';
import { useRouter } from 'next/router';

function SearchBar() {
	const [searchKeyword, setSearchKeyword] = useState('');
	const router = useRouter();

	return (
		<Container>
			<Input
				type="search"
				placeholder="검색"
				value={searchKeyword}
				onChange={(e) => {
					return setSearchKeyword(e.target.value);
				}}
			/>
			<Button
				type="button"
				onClick={() => {
					return router.push(`/chart/${searchKeyword}`);
				}}
			>
				검색
			</Button>
		</Container>
	);
}

export default SearchBar;

const Container = styled.div`
	display: flex;
`;

const Input = styled.input`
	padding: 1rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 2rem auto;
	width: 50rem;
	max-width: 95%;
	border-radius: 12px;
	box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
`;

const Button = styled.button`
	padding: 8px;
`;
