import React from "react";
import Category from "../../containers/categories";

const CategoriesBlock = () => {
    return(
  <div>
    <Category to="/" category="" >Home</Category>
    <Category to="/technology" category="technology">Technology</Category>
    <Category to="/sports" category="sports">Sports</Category>
    <Category to="/health" category="health">Health</Category>
  </div>
    )
};

export default CategoriesBlock;