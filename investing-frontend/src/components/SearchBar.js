import styled from 'styled-components';
import React, { useState } from 'react';
import { useRouter } from 'next/router';

function SearchBar(props) {
	const stocks = props.stockItems;
	const [search, setSearch] = useState("");
	const filteredStocks = stocks.filter((stock) => {
		console.log(stock['name'].includes(search));
		return stock['name'].includes(search);
	})
	const stockDisplay = search.length>0;

	const router = useRouter();

	return (
		<Container>
			<Input
				type="search"
				placeholder="검색"
				value={search}
				onChange={(e) => {
					return setSearch(e.target.value);
				}}
			/>
			<Button
				type="button"
				onClick={() => {
					return router.push(`/chart/${search}`);
				}}
			>
				검색
			</Button>
			{stockDisplay && <ul>
				{filteredStocks.map((stock) => {
					return (<li key = {stock.name}>{stock.name} {stock.change}</li>)
				})}
			</ul>}
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
