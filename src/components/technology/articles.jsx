import React from 'react';
import { connect } from 'react-redux'
import EachArticle from './articleItem'
import './articles.scss'
let ArticlesReturned = ({articles}) => {

    let someDiv = '';
    if(articles){
        someDiv = articles.map((item, index) =>
            (
                <div className='articleBox' key={`${index}` }>
                    {<EachArticle item={articles[index]}/>}
                </div>
            )
        )
      
    
    }
    return (
        <div className="articleMain">
          {someDiv}
        </div>
    )
};


const mapStateToProps = (state) => ({
 articles: state.articles
})



ArticlesReturned = connect(mapStateToProps, null)(ArticlesReturned);

export default ArticlesReturned;