/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Category = () => {
	const [data, setData] = useState({});
	const [loading, setLoading] = useState(true);
	let { category } = useParams();

	useEffect(() => {
		const getCategory = () => {
			fetch(`https://api.chucknorris.io/jokes/random?category=${category}`, {
				method: "GET",
			})
				.then((res) => res.json())
				.then((result) => {
					setData(result);
					setLoading(false);
				})
				.catch((error) => console.log(error));
		};
		getCategory();
	}, [category]);

	return (
		<MainCategory>
			<img src={data.icon_url} alt={data.categories} />
			<Title>Category : {data.categories}</Title>
			{loading ? (
				<span style={{ textAlign: "center" }}>Loading...</span>
			) : (
				<Text style={{ textAlign: "center" }}>"{data.value}"</Text>
			)}
		</MainCategory>
	);
};

const MainCategory = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 16px;
	margin-top: 16px;
`;

const Title = styled.p`
	color: #b45309;
	font-size: 16px;
	font-weight: 600;
	font-style: normal;
	line-height: 22px;
	margin-top: 16px;
	margin-bottom: 32px;
`;

const Text = styled.p`
	font-size: 16px;
	font-weight: 600;
	font-style: italic;
	line-height: 22px;
`;

export default Category;
