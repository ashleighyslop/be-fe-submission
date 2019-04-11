import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './home/home';
import SelectedCategory from "./technology/selectedCategory";
import {StyledHeader, StyledLink} from "./header/styledHeader";
import CategoriesBlock from "./header/link";
import Footer from "./footer/footer";
const App = () => {
  return(
    <div>
      <Header/>
      <Footer/>
    </div>
  )
}

const Header = () => {
  return (
    <Router>
    <StyledHeader>
    <CategoriesBlock/>
    </StyledHeader>
   
    <hr/>
        <Route exact path="/" component={Home}/>
        <Route path="/:category" component={SelectedCategory} />
    </Router>
  );
};


export default App;