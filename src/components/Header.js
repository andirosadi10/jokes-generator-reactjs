import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
	let location = useLocation();
	return (
		<StyledHeader>
			{location.pathname !== "/" && (
				<LinkS to="/">
					<i className="fa fa-arrow-left" aria-hidden="true"></i>
				</LinkS>
			)}

			<LogoBrand>CHUCK NORRIS</LogoBrand>
		</StyledHeader>
	);
};

const StyledHeader = styled.header`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 62px;
	background: #fffbeb;
	box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
	@import url("https://fonts.googleapis.com/css2?family=Rye&display=swap");
`;

const LinkS = styled(Link)`
	text-decoration: none;
	position: absolute;
	left: 26px;
	color: #b45309;
`;

const LogoBrand = styled.p`
	font-family: "Rye", cursive;
	font-size: 24px;
	font-style: normal;
	font-weight: 400px;
	line-height: 30px;
	color: #b45309;
`;

export default Header;
