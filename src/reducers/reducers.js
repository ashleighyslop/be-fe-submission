import {GET_CATEGORY, DISPLAY_ARTICLES} from "../actions/actions";

const getNewsApp = (state = {}, action) =>{
  switch (action.type) {
    case GET_CATEGORY:
      return { ...state, category: action.category };
    case DISPLAY_ARTICLES:
      return{...state, articles: action.articles, loading: false}  
    default:
      return state;
  }
}

export default getNewsApp;