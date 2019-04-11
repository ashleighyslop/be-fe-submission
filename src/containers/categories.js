import React from 'react'
import { connect } from 'react-redux'
import {getCategory} from '../actions/actions';
import {StyledLink} from '../components/header/styledHeader';

const mapStateToProps = (state) => ({
    category: state.category
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => {
        dispatch(getCategory(ownProps.category));
    }
});

const Category = connect(mapStateToProps, mapDispatchToProps)(StyledLink);

export default Category;