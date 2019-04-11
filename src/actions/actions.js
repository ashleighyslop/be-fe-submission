export const GET_CATEGORY='GET_CATEGORY';
export const DISPLAY_ARTICLES='DISPLAY_ARTICLES'
//const url=`https://newsapi.org/v2/top-headlines?country=gb&category=${category}&apiKey=${API_KEY}`

const API_KEY = '0d6606cb3e7f416ebdba3e6f0e0df952';


export const getCategory = (category) => {
    return{
        type: GET_CATEGORY,
        category
    }
}

export const requestPosts = () => ({
  type: REQUEST_POSTS,
});

export const displayArticles = (articles) =>{
  return{
    type: DISPLAY_ARTICLES,
    articles
  }
}


export function fetchNews(category){
  return function(dispatch){
    return fetch(`https://newsapi.org/v2/top-headlines?country=gb&category=${category}&apiKey=${API_KEY}`)
   .then(
     resposne => resposne.json(),
     error => console.log('Error!!!----------', error)
   )
   .then((myJson) => {
      dispatch(displayArticles(myJson.articles));
   });
  }
      
};
