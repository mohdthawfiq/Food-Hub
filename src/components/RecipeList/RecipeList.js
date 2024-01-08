import React from "react";
import style from"./RecipeList.module.scss";
import { Link } from "react-router-dom";

function RecipeList({ recipes = [] }) {
  return (
    <div className={style.recipeList}>
      <h3 className={style.title}> CHECK FOR AVAILABLE RECIPES</h3>
      <div className={style.list}>
        {recipes.map((recipe) => (
          <Link key={recipe.id}
          className={style.linkItem}
          to={`./recipe/${recipe.id}`}>
          <div  className={style.cardContainer}>
            <div className={style.cardHeader}>{recipe.title}</div>
            <div className={style.receipeInfo}>
              <span className={style.taglevel}>{recipe.level}</span>
              <span className={style.tagtime}>{recipe.time}</span>
              <span className={style.tagveg}>
                {recipe.isVeg ? "veg" : "non-Veg"}
              </span>
            </div>
            <img className={style.image} src={recipe.image} alt={recipe.title} />
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default RecipeList;
