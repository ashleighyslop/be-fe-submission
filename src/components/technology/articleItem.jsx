import React from 'react';
const EachArticle = ({item}) => {
    return(
            <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <a href={item.url} target="_blank">Read full article </a>
            <img src={item.urlToImage}/>
            </div>
    )
}

export default EachArticle;