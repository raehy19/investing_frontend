import styled from 'styled-components';

function SearchBar() {
	return <Container type="search" placeholder="검색" />;
}

export default SearchBar;

const Container = styled.input`
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
