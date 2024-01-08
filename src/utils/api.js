const BASE_URL = "https://api-recipe.vercel.app/";

const END_POINT = {
  recipes: "recipes",
  recipesId: "recipes/:id",
};

export const fetchRecipe = async () => {
  const url = `${BASE_URL}${END_POINT.recipes}`;
  return await fetchData(url);
};

export const fetchRecipeId = async (id) => {
  const url = `${BASE_URL}${END_POINT.recipesId.replace(':id',id)}`;
  return await fetchData(url);
};

async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.log("response failed");
    }
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}
