import React, { useEffect, useState } from "react";
import style from"./RecipeDetails.module.scss";
import { fetchRecipeId } from "../../utils/api";
import { Link, useParams } from "react-router-dom";
import Waitmessage from "../Loader/Waitmessage";

function RecipeDetails() {
  const [recipe1, setRecipe1] = useState({});
  const [loaded, setLoaded] = useState(true);
  const [isFavorite,setFavorite] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    const fetchRecipeData = async () => {
      try {
        const data = await fetchRecipeId(id);
        setRecipe1(data);
        setLoaded(false);
      } catch {
        setLoaded(false);
      }
    };
    fetchRecipeData();
  }, []);

  useEffect(()=>{
 const fav =JSON.parse(localStorage.getItem('fav')) || []
 const isRecipeFav = fav.some(rec => rec.id === recipe1.id)
 setFavorite(isRecipeFav)
  },[recipe1])

  const handlebtn=() =>{
    setFavorite(preVal=>!preVal)
    const fav =JSON.parse(localStorage.getItem('fav')) || []
    const updateFav = isFavorite ? fav.filter(rec => rec.id !== recipe1.id)
    : [...fav,recipe1]
    localStorage.setItem('fav',JSON.stringify(updateFav))

  }

  return (
    <div>
      {loaded ? (
        <Waitmessage />
      ) : (
        <div className={style.details}>
          <Link to={"/"}>Go Back</Link>
          <div className={style.header}>
            <h2>{recipe1.title}</h2>
            <button className={style.favButton} onClick={handlebtn}>{isFavorite? '+ Add to favorite' : '- remove from favorite'}</button>
          </div>

          <div className={style.content}>
            <img className={style.image} src={recipe1.image} alt={recipe1.title} />
            <div className="receipeInfo">
              <span className={style.taglevel}>{recipe1.level}</span>
              <span className={style.tagtime}>{recipe1.time}</span>
              <span className={style.tagveg}>
                {recipe1.isVeg ? "veg" : "non-Veg"}
              </span>
            </div>

            <div className={style.tags}>
              {recipe1.ingredients.map((ingredients, ind) => (
                <span className={style.ingredients} key={ind}>
                  {ingredients}
                </span>
              ))}
            </div>
            <h3>Instruction</h3>
            <ol className={style.instructions}>
              {recipe1.instructions.map((instruction, ind) => (
                <li key={ind}>{instruction}</li>
              ))}
            </ol>
          </div>
        </div>
      )}
    </div>
  );
}

export default RecipeDetails;
