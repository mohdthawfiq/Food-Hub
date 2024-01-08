import { useEffect, useState } from "react";
import { fetchRecipe, fetchRecipeId } from "./utils/api";
import Waitmessage from "./components/Loader/Waitmessage";
import Header from "./components/Header/Header";
import RecipeList from "./components/RecipeList/RecipeList";

function App() {
  const [recipe, setRecipe] = useState([]);
  const [loaded, setLoaded] = useState(true);

  useEffect(() => {
    const fetchRecipeData = async () => {
      try {
        const data = await fetchRecipe();
        setRecipe(data);
        setLoaded(false);
      } catch {
        setLoaded(false);
      }
    };
    fetchRecipeData();
  }, []);

  return (
    <div className="App">
      <Header title={"FOOD APP"} />
    
      {loaded ? <Waitmessage /> :  <RecipeList recipes={recipe}/>}
    </div>
  );
}

export default App;
