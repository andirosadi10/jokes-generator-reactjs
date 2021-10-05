import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Category from "./pages/Category";
import styled from "styled-components";

const App = () => {
	return (
		<Router>
			<Container>
				<Header />
				<Content>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/search/:query" component={Search} />
						<Route exact path="/category/:category" component={Category} />
					</Switch>
				</Content>
			</Container>
		</Router>
	);
};

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const Content = styled.main`
	margin: 0 auto;
	min-width: 480px;
	padding: 0;
`;

export default App;
