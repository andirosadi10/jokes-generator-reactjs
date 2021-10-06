import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Search = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	let { query } = useParams();

	useEffect(() => {
		const getData = () => {
			fetch(`https://api.chucknorris.io/jokes/search?query=${query}`, {
				method: "GET",
			})
				.then((res) => res.json())
				.then((data) => {
					setData(data.result);
					setLoading(false);
				})
				.catch((error) => console.log(error));
		};
		getData();
	}, [query]);

	return (
		<Main>
			<img
				src="https://assets.chucknorris.host/img/avatar/chuck-norris.png"
				alt="Icon Joke"
				style={{ marginTop: "16px" }}
			/>
			<SearchText>Search Text : {query}</SearchText>
			{loading && <span style={{ textAlign: "center" }}>Loading...</span>}
			{data.length !== 0 ? (
				data.map((item, i) => <JokeText key={i}>"{item.value}"</JokeText>)
			) : (
				<JokeText style={{ textAlign: "center" }}>Data Not Found !</JokeText>
			)}
		</Main>
	);
};

const Main = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 16px;
`;

const SearchText = styled.p`
	color: #b45309;
	font-size: 16px;
	font-weight: 600;
	font-style: normal;
	line-height: 22px;
	text-align: center;
	margin-top: 16px;
	margin-bottom: 32px;
`;

const JokeText = styled.p`
	font-size: 16px;
	font-weight: 600;
	font-style: italic;
	line-height: 22px;
	text-align: center;
	margin-bottom: 16px;
`;

export default Search;
