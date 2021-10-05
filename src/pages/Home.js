import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Home = () => {
	const [joke, setJoke] = useState({});
	const [categories, setCategories] = useState([]);
	const [category, setCategory] = useState("");
	const [query, setQuery] = useState("");
	const [loading, setLoading] = useState(true);
	let history = useHistory();

	useEffect(() => {
		getJoke();
		getCategories();
	}, []);

	const getJoke = () => {
		fetch("https://api.chucknorris.io/jokes/random", {
			method: "GET",
		})
			.then((res) => res.json())
			.then((data) => {
				setJoke(data);
				setLoading(false);
			})
			.catch((error) => console.log(error));
	};

	const getCategories = () => {
		fetch("https://api.chucknorris.io/jokes/categories", {
			method: "GET",
		})
			.then((res) => res.json())
			.then((data) => setCategories(data))
			.catch((error) => console.log(error));
	};

	const getCategory = () => {
		if (!category) return;
		history.push(`/category/${category}`);
	};

	const searchJokeByText = () => {
		if (!query) return;
		history.push(`/search/${query}`);
	};

	return (
		<Container>
			<SearchTop>
				<Input
					type="text"
					placeholder="Search jokes by text"
					onChange={(e) => setQuery(e.target.value)}
				/>
				<Button onClick={searchJokeByText}>Search!</Button>
			</SearchTop>
			{loading ? (
				<span style={{ textAlign: "center" }}>Loading ...</span>
			) : (
				<MainJokes>
					<Img src={joke.icon_url} alt="Icon Joke" />
					<TextJokes>"{joke.value}"</TextJokes>
					<Button onClick={getJoke}>Another!</Button>
				</MainJokes>
			)}
			<SearchBottom>
				<InputSelect type="text" onChange={(e) => setCategory(e.target.value)}>
					<option value="" style={{ maxWidth: "236px" }}>
						Search jokes by category
					</option>
					{categories.map((categoryName, i) => (
						<option value={categoryName} key={i} style={{ maxWidth: "236px" }}>
							{categoryName}
						</option>
					))}
				</InputSelect>
				<Button onClick={getCategory}>Search!</Button>
			</SearchBottom>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin: 0 auto;
	height: 85vh;
	padding: 16px;
`;

const SearchTop = styled.div`
	display: flex;
	justify-content: space-between;
`;

const Input = styled.input`
	width: 236px;
	height: 42px;
	padding: 11px 16px;
	font-size: 14px;
	line-height: 19.07px;
	color: #5a5a63;
	border: none;
	border-radius: 6px;
	box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.25);
	box-sizing: border-box;
	::placeholder {
		color: #9ca3af;
		font-size: 14px;
		font-weight: normal;
	}
`;

const Button = styled.button`
	height: 42px;
	padding: 10px 16px;
	background: #b45309;
	border-radius: 6px;
	border: none;
	color: #ffffff;
	font-size: 16px;
	font-weight: 700;
	line-height: 21.79px;
	box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
	cursor: pointer;
`;

const SearchBottom = styled.div`
	display: flex;
	justify-content: space-between;
`;

const InputSelect = styled.select`
	width: 236px;
	height: 42px;
	padding: 11px 16px;
	line-height: 19.07px;
	color: #5a5a63;
	border: none;
	border-radius: 6px;
	box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.25);
	box-sizing: border-box;
	::placeholder {
		color: #9ca3af;
		font-size: 14px;
		font-weight: normal;
	}
`;

const MainJokes = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 32px;
	padding: 16px;
	position: absolute;
	top: 150px;
	left: 0;
	right: 0;
`;

const Img = styled.img`
	max-width: 60px;
	max-height: 60px;
	border-radius: 10px;
`;

const TextJokes = styled.p`
	font-size: 16px;
	font-weight: 600;
	font-style: italic;
	text-align: center;
	margin: 24px 0;
`;

export default Home;
