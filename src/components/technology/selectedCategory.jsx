import React from "react";
import {fetchNews} from "../../actions/actions";
import { connect } from 'react-redux';
import ArticlesReturned from './articles';
let SelectedCategory = ({getPosts, category }) => {
   getPosts(category);
  return (
      <ArticlesReturned/>

  );
}




const mapStateToProps = (state) => ({
  category: state.category
})

const mapDispatchToProps = {
  getPosts: fetchNews
}

SelectedCategory = connect(mapStateToProps, mapDispatchToProps)(SelectedCategory);

export default SelectedCategory;