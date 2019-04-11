import styled from "styled-components";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const StyledHeader = styled.header`
  @import url('https://fonts.googleapis.com/css?family=Poppins:light');
  font-family: 'Poppins', sans-serif;
  font-size: 63px;
  background-color: #FFB6C1;
  text-decoration: none;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
    padding: 4%;
`;

export{
    StyledHeader,
    StyledLink
} 

